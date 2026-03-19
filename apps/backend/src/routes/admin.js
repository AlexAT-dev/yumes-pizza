const express = require('express');
const { authenticate } = require('../middleware/auth');
const { requireAdmin } = require('../middleware/requireAdmin');
const products = require('../controllers/adminProductsController');
const categories = require('../controllers/adminCategoriesController');
const news = require('../controllers/adminNewsController');

const router = express.Router();

router.use(authenticate, requireAdmin);

router.get('/products', products.getAllProducts);
router.post('/products', products.createProduct);
router.put('/products/:id', products.updateProduct);
router.delete('/products/:id', products.deleteProduct);

router.get('/categories', categories.getAllCategories);
router.post('/categories', categories.createCategory);
router.put('/categories/:id', categories.updateCategory);
router.delete('/categories/:id', categories.deleteCategory);

router.get('/news', news.getAllNews);
router.post('/news', news.createNews);
router.put('/news/:id', news.updateNews);
router.delete('/news/:id', news.deleteNews);

module.exports = router;
