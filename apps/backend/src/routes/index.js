const express = require('express');

const categoriesRouter = require('./categories');
const newsRouter = require('./news');
const productsRouter = require('./products');
const authRouter = require('./auth');
const ordersRouter = require('./orders');
const addressRouter = require('./address');

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/news', newsRouter);
router.use('/products', productsRouter);
router.use('/grouped-products', productsRouter); // handled inside
router.use('/auth', authRouter);
router.use('/', ordersRouter); // /order (GET/POST)
router.use('/address', addressRouter);

module.exports = router;

