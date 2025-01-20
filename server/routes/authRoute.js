const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', AuthController.siginup)
router.post('/signin', AuthController.signin)
router.post('/forgetpass', AuthController.forgetpass)
router.post('/resetpass', AuthController.forgetpass)

module.exports = router;