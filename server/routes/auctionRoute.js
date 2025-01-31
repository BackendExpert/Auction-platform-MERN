const express = require('express');
const auctionController = require('../controllers/auctionController');
const UserMiddelware = require('../middlewares/UserMiddleware');

const router = express.Router();

router.post('/createauction/:user', UserMiddelware(['seller', 'admin']), auctionController.createauction)
router.get('/allauction', auctionController.allAuction)
router.get('/viewauction/:id', auctionController.getbyidAuction)
router.post('/updateAuction/:id', UserMiddelware(['seller', 'admin']), auctionController.updateAuction)
router.post('/auctionupdateStatus/:id', UserMiddelware(['seller', 'admin']), auctionController.auctionupdateStatus)

module.exports = router;