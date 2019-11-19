let Article = require('../models/article');

exports.index = function(req, res, next) {
  let response_msg = req.query.message
  Article.find({}, function(err, results) {
    if (err) throw err;
    res.render('articles/index', {
      articles: results,
      message: response_msg
    });
  });
};

exports.update = function(req, res, next) {
  let articleId = req.params.articleId
  console.log(articleId)
  Article.findOne({ _id: articleId }, function(err, result){
    res.render('articles/update', { article: result });
  });
};

exports.detail = function(req,res, next){
  let params = req.params;
  Article.findOne({ _id: params.articleId }, function(err, result){
    res.render('articles/detail', {
      data: result
    });
  });
};

exports.delete = function(req, res, next){
  let articleId = req.params.articleId;
  Article.findOneAndDelete({ _id: articleId }, function(err, article) {
    if (err) {
      res.redirect('/articles?message=Failed delete article!');
    } else {
      res.redirect('/articles?message=Success delete article!');
    }
  })
};

exports.create = function(req, res, next) {
  res.render('articles/create');
};

exports.create_article = function(req, res, next) {
  console.log(req.body)
  let article = new Article(req.body)
  article.save(function(err, results){
    if (err) {
      console.log(err.message)
    } else {
      res.redirect('/articles')
    }
  });
};
