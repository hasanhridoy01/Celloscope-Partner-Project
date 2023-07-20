const express = require('express');
const router = express.Router();
const accountmanagerinfoController = require('../controllers/accountmanager.controller');

//Basic Router
router.route('/')
.get(accountmanagerinfoController.getAccoutManagerInfo)
.post(accountmanagerinfoController.createAccoutManagerInfo)

module.exports = router;