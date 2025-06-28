const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const address = process.env.ADDRESS || 'localhost'; // Default to localhost if ADDRESS is not set

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Redirect root to /about
app.get('/', (req, res) => {
    res.redirect('/about');
});

// Render the about page using EJS
app.get('/about', (req, res) => {
    res.render('base', { body: 'about' });
});

app.get('/blog', (req, res) => {
    res.render('base', { body: 'blog' });
});

app.get('/contact', (req, res) => {
    res.render('base', { body: 'contact' });
});

// Serve the vicos page as an HTML file
app.get('/vicos', (req, res) => {
    res.render('vicos');
});

// Start the server
app.listen(port, address, () => {
    console.log(`Server is running on http://${address}:${port}`);
});

module.exports = app;
