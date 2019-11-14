var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose'); // REQUIRE MONGOOSE
var Schema = mongoose.Schema; // REQUIRE SCHEMA FROM MONGOOSE

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');

// SET CONNECTION MONGODB
let mongo_db_url = "mongodb+srv://user-db:123456qwerty@company-website-db-m7end.mongodb.net/test?retryWrites=true&w=majority"
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


// EXAMPLE USE MODEL, SCHEMA AND METHOD MONGOOSE
// define schema
const CatSchema = new Schema({
  name: String,
  age: { 
    type: Number,
    required: true,
    min: [5, 'Terlalu muda miaw'],
    max: 19
  }
});
// virtual
CatSchema.virtual('speak').get(function(){
  console.log(`${this.name} can speak, Miaow!,`);
});
// methods
CatSchema.methods.hello = function(){
  let teks = `hello, my name ${this.name}, age ${this.age}, Miaow...miaow...`;
  console.log(teks);
};

// create model
const Cat = mongoose.model('Cat', CatSchema);
// set data into model
const doraemon = new Cat({
  name: 'Doraemon',
  age: 6
});
// call virtual in model
doraemon.speak
// call methods in model
doraemon.hello()

// ugly.hello();
// saving data
// doraemon.save(function(err, result){
//   if (err) {
//     console.log(err.name)
//   } else {
//     doraemon.hello()
//   }
// });






var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

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
