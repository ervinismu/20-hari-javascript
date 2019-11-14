let Article = require('../models/article');

// Display list articles
exports.article_list = function(req, res, next) {
  res.send('Article Page');
};
