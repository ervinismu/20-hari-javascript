const express = require('express')
//Import the mongoose module
var mongoose = require('mongoose')
const app = express()
const port = 3005
var User = require('../models/user')

// mongodb connection
let mongoDB = 'mongodb://127.0.0.1/blog_project_db';
let db = mongoose.connection;
mongoose.connect(mongoDB, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// SETUP TEMPLATE ENGINE WITH EJS
app.set('view engine', 'ejs')

// SERVE STATIS FILE
app.use('/assets', express.static('assets'))

// ROUTE / URL APPLICATION
// home page
app.get('/', (req, res) => {
  res.render('index')
})

// about page
app.get('/about', (req, res) => {
  User.create({ first_name: 'also_awesome' }, function (err, awesome_instance) {
    if (err) return handleError(err);
    // saved!
  });
  res.render('about')
})

// contact page
app.get('/contact', (req, res) => {
  res.render('contact')
})

// profile page
// http://localhost:3005/profile?name=Ervinismu
app.get('/profile', (req, res) => {
  let myJobs = ['Freelancer', 'Mentor', 'Penulis']
  console.log(req.query.name)
  res.render('profile', { 
    data: req.query,
    jobs: myJobs 
  })
})

// article page
app.get('/articles', (req, res) => {
  res.render('article')
})

// SET RUN
app.listen(port, () => {
  console.log(`Yeay! Your app running on port ${port}!`)
})
