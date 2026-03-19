const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.post('/', addressController.createAddress);
router.get('/:id_order', addressController.getAddressByOrderId);

module.exports = router;

