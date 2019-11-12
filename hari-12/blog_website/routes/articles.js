var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.send('Article Page');
});

module.exports = router
