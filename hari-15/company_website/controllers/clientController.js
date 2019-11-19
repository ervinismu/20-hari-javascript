let Client = require('../models/client.js');

exports.list_all_client = function(req, res, next){
  var bambang = new Client({ 
    name: 'Bambang',
    address: 'Gunungkidul, Yogyakarta',
    total_project: 12,
    status: 'Done'
   });
  bambang.save(function(err, bambang) {
    if (err) return console.log(err.message);
    console.log('Success create client!');
  });
};
