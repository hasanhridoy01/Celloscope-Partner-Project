const express = require('express');
const router = express.Router();
const basicController = require('../controllers/basicinformation.controller');

//Basic Router
router.route('/')
.get(basicController.getInfo)

module.exports = router;