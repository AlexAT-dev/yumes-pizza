const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.post('/order', ordersController.createOrder);
router.get('/order', ordersController.getOrders);

module.exports = router;

