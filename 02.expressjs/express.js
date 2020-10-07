var express = require('express')
var app = express()


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
// contact page
app.get('/contact', function (req, res) {
  res.send('contact page!')
})
// about page
app.get('/about', function (req, res) {
  res.send('aboout page!')
})

app.listen(3000)
