const { query } = require('../db');

async function getAddressByOrderId(id_order) {
  const existing = await query(
    'SELECT * FROM Address WHERE id_order = $1',
    [id_order],
  );
  return existing.rows[0] || null;
}

async function createAddress({
  id_order,
  street,
  building,
  appart,
  floor,
  entrance,
  intercom,
}) {
  await query(
    'INSERT INTO Address (id_order, street, building, appart, floor, entrance, intercom) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [id_order, street, building, appart, floor, entrance, intercom],
  );
}

module.exports = {
  getAddressByOrderId,
  createAddress,
};

