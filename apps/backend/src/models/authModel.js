const { query } = require('../db');

async function findClientByEmail(email) {
  const result = await query('SELECT * FROM Clients WHERE email = $1', [
    email,
  ]);
  return result.rows[0] || null;
}

async function createClient({ id, name, phone, email, password }) {
  await query(
    'INSERT INTO Clients (id, name, phone, email, password, is_admin) VALUES ($1, $2, $3, $4, $5, $6)',
    [id, name, phone, email, password, false],
  );
}

async function findClientByEmailWithPassword(email) {
  const result = await query(
    'SELECT * FROM Clients WHERE email = $1',
    [email],
  );
  return result.rows[0] || null;
}

module.exports = {
  findClientByEmail,
  createClient,
  findClientByEmailWithPassword,
};

