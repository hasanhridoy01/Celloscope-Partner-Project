const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partnerdetails.controller');

//Basic Router
router.route('/')
.get(partnerController.getPartnerDetails)
.post(partnerController.createPartnerDetails)

module.exports = router;