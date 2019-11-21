const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles');
const apiArticleRouter = require('./routes/api/articles');

// SET CONNECTION MONGODB
const mongo_db_url = "mongodb+srv://user-db:123456qwerty@company-website-db-m7end.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mongo_db_url, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Success connectiong to database.');
});

var app = express();

app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use('/', indexRouter);
app.use('/articles', articlesRouter);
app.use('/api/articles', apiArticleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
