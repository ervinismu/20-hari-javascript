var express = require('express');
var router = express.Router();

// require controller
var client_controller = require('../controllers/clientController.js');
var application_controller = require('../controllers/applicationController.js');

// routes
router.get('/', application_controller.home);
router.get('/about', application_controller.about);
router.get('/contact', application_controller.contact);
router.get('/cats', application_controller.cats);
router.get('/client', client_controller.list_all_client);

module.exports = router;
