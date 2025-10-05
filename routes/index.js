const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Web App Template',
    message: 'Welcome to your new web application!'
  });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    message: 'This is a template for building web applications quickly.'
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    message: 'Get in touch with us!'
  });
});

module.exports = router;
