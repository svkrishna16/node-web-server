const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
app.set('view engine','hbs');
//setup your middleware
//app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
  var now = new Date().toString();
  console.log(`${now} : ${req.method} : ${req.url}`);
  next();
});

//root route
app.get('/',(req,res)=>{
  res.render('home.hbs', {
    pageTitle: 'Vijay\'s Page',
    pageHeader: 'Welcome to Node.js Home',
    author: 'Kaashvi Siricilla',
    neverused: 'Kaashvi Siricilla'
  });
});

//about route
app.get('/about',(req,res)=>{
  res.render('about.hbs', {
    pageTitle: 'About Page',
    pageHeader: 'Node.js About Page',
    author: 'Vijay Siricilla'
  });
});


app.listen(3000, ()=>{
  console.log('Server Started on the port 3000');
});
