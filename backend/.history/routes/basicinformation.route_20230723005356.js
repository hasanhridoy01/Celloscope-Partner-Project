const express = require('express');
const router = express.Router();
const basicController = require('../controllers/basicinformation.controller');

//Basic Router
router.route('/')
.get(basicController.getInfo)
.post(basicController.createInfo)

router.route('/:id')
.get(basicController.getupdateInfo)
.delete(basicController.deleteInfo)

router.route('/search')
.get(basicController.searchInfo)

module.exports = router;