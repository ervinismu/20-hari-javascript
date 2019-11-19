var express = require('express');
var router = express.Router();

// require controller
var application_controller = require('../controllers/applicationController.js');

// routes
router.get('/', application_controller.home);
router.get('/about', application_controller.about);
router.get('/contact', application_controller.contact);

module.exports = router;
