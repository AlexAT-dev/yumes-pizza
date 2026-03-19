const { query } = require('../db');

async function getAllCategories() {
  const { rows } = await query('SELECT * FROM Categories');
  return rows;
}

async function getCategoryById(id) {
  const { rows } = await query('SELECT * FROM Categories WHERE id = $1', [id]);
  return rows[0] || null;
}

module.exports = {
  getAllCategories,
  getCategoryById,
};

