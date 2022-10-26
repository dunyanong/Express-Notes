const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// To create view engine:
app.set('view engine', 'ejs');

// listen to request
app.listen(3000);

// static file of style.css with the foldername of public
app.use(express.static('public'));

// middle ware for logging details
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }));

// Creating an express server
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    
    res.render('index', { title: 'Home', blogs: blogs  });
    
});

app.get('/about', (req, res) => {

    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'New blog'});
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Page not found'});
});

















