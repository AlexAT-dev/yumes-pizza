const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/user-reg', authController.registerUser);
router.post('/user-login', authController.loginUser);

module.exports = router;

