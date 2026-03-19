const express = require('express');
const cors = require('cors');
const os = require('os');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env'),
});

const { pool } = require('./db');
const apiRouter = require('./routes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
app.use(express.json());

const FRONTEND_ORIGINS = [
  process.env.FRONTEND_ORIGIN || 'http://localhost:3000',
  process.env.FRONTEND_ORIGIN2,          
]

app.use(
  cors({
    origin: FRONTEND_ORIGINS,
    credentials: true,
  }),
);

console.log(`CORS configured to allow origin: ${FRONTEND_ORIGINS.join(', ')}`);

const isRailway = !!process.env.RAILWAY_ENVIRONMENT_ID;
const UPLOADS_PATH = isRailway ? '/uploads' : path.join(__dirname, '..', 'uploads');
const imagesDir = path.join(UPLOADS_PATH, 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

app.get('/api/image/:filename', (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(imagesDir, filename);

  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('File not found:', imagePath);
      return res.status(404).send('Файл не знайдено');
    }

    res.sendFile(imagePath, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(err.status || 500).end();
      }
    });
  });
});

// mount API routes
app.use('/api', apiRouter);
app.use('/api', uploadRoutes);

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

