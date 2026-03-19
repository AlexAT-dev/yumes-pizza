const { query } = require('../db');

const IMG_PATH = `${process.env.BACKEND_URL || 'http://localhost:3001'}/api/image/`;

const formatNewsImage = items =>
  items.map(element => ({ ...element, image: IMG_PATH + element.image }));

async function getAllNews() {
  const { rows } = await query('SELECT * FROM News');
  return formatNewsImage(rows);
}

async function getNewsById(id) {
  const { rows } = await query('SELECT * FROM News WHERE id = $1', [id]);
  if (!rows[0]) return null;
  return formatNewsImage(rows)[0];
}

module.exports = {
  getAllNews,
  getNewsById,
};

