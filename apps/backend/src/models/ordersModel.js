const { pool, query } = require('../db');

const IMG_PATH = 'http://localhost:3001/api/image/';
const formatImage = image => IMG_PATH + image;

async function createOrderWithTransaction(order) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    await client.query(
      'INSERT INTO Orders (id, date, totalPrice, discount, id_user, name, phone, details, payment) VALUES ($1, NOW(), $2, $3, $4, $5, $6, $7, $8)',
      [
        order.id,
        order.totalPrice,
        order.discount,
        order.id_user,
        order.name,
        order.phone,
        order.details,
        order.payment,
      ],
    );

    await client.query(
      'INSERT INTO Address (id_order, street, building, appart, floor, entrance, intercom) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [
        order.id,
        order.address.street,
        order.address.building,
        order.address.appart,
        order.address.floor,
        order.address.entrance,
        order.address.intercom,
      ],
    );

    const values = [];
    const placeholders = [];
    order.products.forEach((product, index) => {
      const base = index * 4;
      placeholders.push(
        `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4})`,
      );
      values.push(order.id, product.id, product.count, product.price);
    });

    await client.query(
      `INSERT INTO OrderProducts (id_order, id_product, amount, price) VALUES ${placeholders.join(
        ', ',
      )}`,
      values,
    );

    await client.query(
      `UPDATE Clients
       SET street = $1, building = $2, appart = $3, floor = $4, entrance = $5, intercom = $6
       WHERE id = $7`,
      [
        order.address.street,
        order.address.building,
        order.address.appart,
        order.address.floor,
        order.address.entrance,
        order.address.intercom,
        order.id_user,
      ],
    );

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

async function getOrdersByClient(id_client) {
  const { rows } = await query(
    `SELECT o.id,
            o.date,
            o.totalPrice,
            op.id_product,
            op.amount,
            op.price,
            p.name,
            p.image
     FROM Orders AS o
     JOIN OrderProducts AS op ON op.id_order = o.id
     JOIN Products AS p ON p.id = op.id_product
     WHERE o.id_user = $1`,
    [id_client],
  );

  return rows.reduce((acc, row) => {
    const existingOrder = acc.find(order => order.id === row.id);

    const product = {
      id: row.id_product,
      name: row.name,
      image: formatImage(row.image),
      count: row.amount,
      price: row.price,
    };

    if (existingOrder) {
      existingOrder.products.push(product);
    } else {
      acc.push({
        id: row.id,
        date: row.date,
        products: [product],
        totalPrice: row.totalPrice,
      });
    }
    return acc;
  }, []);
}

module.exports = {
  createOrderWithTransaction,
  getOrdersByClient,
};

