const express = require('express');
const auctionController = require('../controllers/auctionController');

const router = express.Router();

router.post('/createauction/:user', auctionController.createauction)
router.get('/allauction', auctionController.allAuction)
router.get('/viewauction/:id', auctionController.getbyidAuction)

module.exports = router;