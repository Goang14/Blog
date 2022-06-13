
const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/home.controller');

router.get('/', newController.home);


module.exports = router;