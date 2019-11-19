let Client = require('../models/client')

exports.index = function(req, res, next){
  Client.find({}, function(err, results){
    if (err) console.log(err);
    res.render('clients/index', { data: results });
  });
};

exports.create = function(req, res, next){
  res.render('clients/create');
};
