let Cat = require('../models/cat.js')

exports.home = function(req, res, next) {
  res.render('index', { 
    title: 'Belajar Expres.js',
    author: 'ervinismu'
  });
};

exports.about = function(req, res, next) {
  res.render('about');
};

exports.contact = function(req, res, next) {
  res.render('contact');
};

exports.cats = function(req, res, next) {
  Cat.find({}, function(err, results) {
    res.render('cats', {
      data: results 
    });
  });
}
