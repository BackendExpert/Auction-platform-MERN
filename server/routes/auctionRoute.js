const express = require('express');
const auctionController = require('../controllers/auctionController');
const { authMiddleware, accessMiddleware } = require('../middlewares/UserMiddleware');

const router = express.Router();

router.post('/createauction/:user', authMiddleware, accessMiddleware(['admin', 'seller']), auctionController.createauction)
router.get('/allauction', auctionController.allAuction)
router.get('/viewauction/:id', auctionController.getbyidAuction)
router.post('/updateAuction/:id/:user', authMiddleware, accessMiddleware(['admin', 'seller']), auctionController.updateAuction)
router.post('/auctionupdateStatus/:id/:user', authMiddleware, accessMiddleware(['admin', 'seller']), auctionController.auctionupdateStatus)

module.exports = router;