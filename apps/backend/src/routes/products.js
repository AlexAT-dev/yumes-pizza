const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getProducts);
router.get('/grouped', productsController.getGroupedProducts);
router.get('/:productId', productsController.getProductById);

module.exports = router;

