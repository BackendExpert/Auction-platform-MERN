const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', AuthController.siginup)

module.exports = router;