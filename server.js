const express = require('express');
const hbs = require('hbs');
const port = process.env.port || 3000;
var userName = require("os").userInfo().username;

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
    author: 'Kaashvi Siricilla'
  });
});

//about route
app.get('/about',(req,res)=>{
  res.render('about.hbs', {
    pageTitle: 'About Page',
    pageHeader: 'Node.js About Page',
    aboutPageTxt: 'Node.js built on Chrome\'s JavaScript runtime. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive applications that run across distributed devices.',
    author: 'Vijay Siricilla'
  });
});

app.get('/projects',(req,res)=>{
  res.render('projects.hbs',{
    pageTitle: 'Projects Page',
    pageHeader: 'Node.js Projects:',
    projectsPageText: 'Popular Node.js projects - PayPal, Netflix, Uber, LinkedIn, eBay, Walmart, NASA, Mozilla, Trello',
    author: `${userName}`.toLocaleUpperCase()
  });
})


app.listen(port, ()=>{
  console.log(`Server Started on the port ${port}`);
});
