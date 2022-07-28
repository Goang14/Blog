const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/MeController');

router.get('/store/courses',courseController.storeCourses);

module.exports = router;