const { query } = require('../db');

async function getAll() {
  const { rows } = await query('SELECT * FROM News ORDER BY id ASC');
  return rows;
}

async function create(news) {
  const { rows } = await query(
    'INSERT INTO News (id, image, title) VALUES ($1, $2, $3) RETURNING *',
    [news.id, news.image || null, news.title],
  );
  return rows[0];
}

async function updateById(id, news) {
  const { rows } = await query(
    `UPDATE News
     SET image = COALESCE($2, image),
         title = COALESCE($3, title)
     WHERE id = $1
     RETURNING *`,
    [id, news.image, news.title],
  );
  return rows[0] || null;
}

async function removeById(id) {
  const { rowCount } = await query('DELETE FROM News WHERE id = $1', [id]);
  return rowCount > 0;
}

module.exports = {
  getAll,
  create,
  updateById,
  removeById,
};
