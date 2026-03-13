const { query } = require('../db');

async function getAllCategories() {
  const { rows } = await query('SELECT * FROM Categories');
  return rows;
}

module.exports = {
  getAllCategories,
};

