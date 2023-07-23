const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search.controller');

//Basic Router
router.route('/')
.get(searchController.searchInfo)

module.exports = router;