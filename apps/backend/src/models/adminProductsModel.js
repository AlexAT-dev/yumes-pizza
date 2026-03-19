const { query } = require('../db');

async function getAll() {
  const { rows } = await query('SELECT * FROM Products ORDER BY name ASC');
  return rows;
}

async function getById(id) {
  const { rows } = await query('SELECT * FROM Products WHERE id = $1', [id]);
  return rows[0] || null;
}

async function create(product) {
  const { rows } = await query(
    `INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [
      product.id,
      product.name,
      product.image || null,
      product.stock || 0,
      product.description || null,
      product.price,
      product.discount || null,
      product.id_category,
    ],
  );
  return rows[0];
}

async function updateById(id, product) {
  const { rows } = await query(
    `UPDATE Products
     SET name = COALESCE($2, name),
         image = COALESCE($3, image),
         stock = COALESCE($4, stock),
         description = COALESCE($5, description),
         price = COALESCE($6, price),
         discount = $7,
         id_category = COALESCE($8, id_category)
     WHERE id = $1
     RETURNING *`,
    [
      id,
      product.name,
      product.image,
      product.stock,
      product.description,
      product.price,
      product.discount,
      product.id_category,
    ],
  );
  return rows[0] || null;
}

async function removeById(id) {
  const { rowCount } = await query('DELETE FROM Products WHERE id = $1', [id]);
  return rowCount > 0;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  removeById,
};
