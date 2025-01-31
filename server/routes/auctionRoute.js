const express = require('express');
const auctionController = require('../controllers/auctionController');

const router = express.Router();

router.post('/createauction', auctionController.createauction)

module.exports = router;