const fs = require('fs');
const path = require('path');
const { pool } = require('./db');

async function runMigrations() {
  const migrationsDir = path.join(__dirname, '..', 'migrations');
  const files = fs
    .readdirSync(migrationsDir)
    .filter(f => f.endsWith('.sql'))
    .sort();

  for (const file of files) {
    const fullPath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(fullPath, 'utf8');
    console.log(`Running migration: ${file}`);
    await pool.query(sql);
  }
}

runMigrations()
  .then(() => {
    console.log('Migrations completed');
    return pool.end();
  })
  .catch(err => {
    console.error('Migration error:', err);
    pool.end().finally(() => process.exit(1));
  });

