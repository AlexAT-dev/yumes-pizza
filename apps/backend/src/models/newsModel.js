const { query } = require('../db');

const IMG_PATH = 'http://localhost:3001/api/image/';

const formatNewsImage = items =>
  items.map(element => ({ ...element, image: IMG_PATH + element.image }));

async function getAllNews() {
  const { rows } = await query('SELECT * FROM News');
  return formatNewsImage(rows);
}

module.exports = {
  getAllNews,
};

