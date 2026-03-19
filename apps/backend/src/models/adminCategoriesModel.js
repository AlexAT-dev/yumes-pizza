const { query } = require('../db');

async function getAll() {
  const { rows } = await query('SELECT * FROM Categories ORDER BY name ASC');
  return rows;
}

async function getById(id) {
  const { rows } = await query('SELECT * FROM Categories WHERE id = $1', [id]);
  return rows[0] || null;
}

async function create(category) {
  const { rows } = await query(
    'INSERT INTO Categories (id, name) VALUES ($1, $2) RETURNING *',
    [category.id, category.name],
  );
  return rows[0];
}

async function updateById(id, category) {
  const { rows } = await query(
    `UPDATE Categories
     SET name = COALESCE($2, name)
     WHERE id = $1
     RETURNING *`,
    [id, category.name],
  );
  return rows[0] || null;
}

async function removeById(id) {
  const { rowCount } = await query('DELETE FROM Categories WHERE id = $1', [id]);
  return rowCount > 0;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  removeById,
};
