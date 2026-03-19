// src/routes/uploadRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const isRailway = !!process.env.RAILWAY_ENVIRONMENT_ID;
const UPLOADS_PATH = isRailway ? '/uploads' : path.join(__dirname, '..', '..', 'uploads');
const imagesDir = path.join(UPLOADS_PATH, 'images');

// Створюємо папку, якщо її ще немає
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Налаштування Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, imagesDir),
  filename: (req, file, cb) => cb(null, file.originalname), // залишаємо оригінальну назву файлу
});

const upload = multer({ storage });

// Завантаження одного файлу
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).send('Файл не завантажено.');
  
  res.json({
    message: 'Файл отримано!',
    file: {
      originalName: req.file.originalname,
      storedName: req.file.filename,
      path: `/api/image/${req.file.filename}`, // для доступу через роут
    },
  });
});

// Завантаження кількох файлів
router.post('/upload-multiple', upload.array('images', 50), (req, res) => {
  if (!req.files || req.files.length === 0) return res.status(400).send('Файли не завантажено.');
  
  const uploadedFiles = req.files.map(f => ({
    originalName: f.originalname,
    storedName: f.filename,
    path: `/api/image/${f.filename}`,
  }));

  res.json({ message: 'Файли отримано!', files: uploadedFiles });
});

module.exports = router;