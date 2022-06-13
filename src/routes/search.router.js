const express = require('express');
const router = express.Router();

const searchController = require('../app/controllers/search.controller');

router.get('/', searchController.search);

module.exports = router;