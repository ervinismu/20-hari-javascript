var router = require('express').Router();

// include file articelsController.js
var article_controller = require('../controllers/articlesController.js')

router.get('/', article_controller.index);
router.get('/create', article_controller.create);
router.get('/detail/:articleId', article_controller.detail);
router.post('/create_article', article_controller.create_article);

router.get('/delete/:articleId', article_controller.delete);

router.get('/update/:articleId', article_controller.update);
module.exports = router
