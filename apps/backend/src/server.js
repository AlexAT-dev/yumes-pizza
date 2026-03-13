const express = require('express');
const cors = require('cors');
const os = require('os');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '..', '..', '.env'),
});

const { pool } = require('./db');
const apiRouter = require('./routes');

const app = express();
app.use(express.json());

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
  }),
);

// static images (keeps existing URL structure)
app.get('/api/image/*', (req, res) => {
  const img = req.params[0];
  const imagePath = path.join(__dirname, '..', 'uploads', 'images', img);
  res.sendFile(imagePath, err => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(err.status || 500).end();
    }
  });
});

// mount API routes
app.use('/api', apiRouter);

const PORT = Number(process.env.PORT) || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);

  const networkInterfaces = os.networkInterfaces();
  Object.keys(networkInterfaces).forEach(interfaceName => {
    networkInterfaces[interfaceName].forEach(iface => {
      if (iface.family === 'IPv4' && !iface.internal) {
        console.log(`  Address: ${iface.address}`);
      }
    });
  });
});

process.on('SIGINT', async () => {
  try {
    await pool.end();
    console.log('PostgreSQL pool closed');
  } catch (err) {
    console.error('Error closing PG pool:', err);
  } finally {
    server.close(() => process.exit());
  }
});

