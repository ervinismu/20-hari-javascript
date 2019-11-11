const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()

const port = 3005 // PORT APPLICATION

// DATABASE CONNECTION
MongoClient.connect('mongodb://localhost:27017/blog_project_db', (err, client) => {
  if (err) {
    console.log(`Database not connected, because ${err}`)
  } else {
    let db = client.db('blog_project_db')
    console.log('Database connected!')
  }
})

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
