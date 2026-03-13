const { query } = require('../db');

const IMG_PATH = `${process.env.BACKEND_URL || 'http://localhost:3001'}/api/image/`;

const formatImage = image => IMG_PATH + image;

const formatProduct = product => {
  const { price: full, discount, selling, ...rest } = product;
  const image = formatImage(product.image);
  // numeric values can come back as strings from the database,
  // ensure we send numbers to the client so .toFixed works safely
  const price = {
    full: Number(full),
    selling: selling != null ? Number(selling) : null,
    discount: discount != null ? Number(discount) : null,
  };
  return { ...rest, image, price };
};

async function getAllProducts() {
  const { rows } = await query(
    `SELECT *, ROUND(price - (price * COALESCE(discount, 0) / 100), 2) AS selling FROM Products`,
  );
  return rows.map(formatProduct);
}

async function getGroupedProducts() {
  const { rows } = await query(
    `SELECT c.name AS category_name,
            p.*,
            ROUND(p.price - (p.price * COALESCE(p.discount, 0) / 100), 2) AS selling
     FROM Products AS p
     JOIN Categories AS c ON c.id = p.id_category`,
  );

  return rows.reduce((acc, obj) => {
    const { id_category, category_name, ...rest } = obj;
    const existing = acc.find(item => item.id === id_category);
    const product = formatProduct(rest);
    if (existing) {
      existing.products.push(product);
    } else {
      acc.push({
        id: id_category,
        name: category_name,
        products: [product],
      });
    }
    return acc;
  }, []);
}

module.exports = {
  getAllProducts,
  getGroupedProducts,
};

