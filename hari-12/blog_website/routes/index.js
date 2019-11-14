var express = require('express');
var router = express.Router();

// controller
var article_controller = require('../controllers/articlesController.js');
var application_controller = require('../controllers/applicationController.js');

// routes
router.get('/', application_controller.home);

router.get('/about', application_controller.about);

router.get('/contact', application_controller.contact);

router.get('/articles', article_controller.article_list);

module.exports = router;
