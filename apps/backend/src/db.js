const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env'),
});

const isProduction = process.env.NODE_ENV === 'production';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not defined in .env!');
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false, // автоматично SSL лише на продакшені
});

pool.on('error', err => {
  console.error('Unexpected PG client error', err);
});

const query = (text, params) => pool.query(text, params);

module.exports = {
  pool,
  query,
};