const express = require('express');
const path = require('path');
require('dotenv').config();
const { loadContent } = require('./lib/content');

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
    const posts = loadContent(path.join(__dirname, 'content/blog'));
    const projects = loadContent(path.join(__dirname, 'content/projects'));
    const pinnedPost = posts.find((p) => p.pin === 1);
    const pinnedProject = projects.find((p) => p.pin === 1);
    res.render('base', { body: 'about', title: 'about', assetVersion: Date.now(), pinnedPost, pinnedProject });
});

app.get('/blog', (req, res) => {
    const posts = loadContent(path.join(__dirname, 'content/blog'));
    res.render('base', { body: 'blog', title: 'blog', assetVersion: Date.now(), posts });
});

app.get('/blog/:slug', (req, res) => {
    const posts = loadContent(path.join(__dirname, 'content/blog'));
    const post = posts.find((p) => p.slug === req.params.slug);
    if (!post) return res.status(404).send('not found');
    res.render('base', { body: 'blog-post', title: post.title, assetVersion: Date.now(), post });
});

app.get('/projects', (req, res) => {
    const projects = loadContent(path.join(__dirname, 'content/projects'));
    res.render('base', { body: 'projects', title: 'projects', assetVersion: Date.now(), projects });
});

app.get('/projects/:slug', (req, res) => {
    const projects = loadContent(path.join(__dirname, 'content/projects'));
    const project = projects.find((p) => p.slug === req.params.slug);
    if (!project) return res.status(404).send('not found');
    res.render('base', { body: 'project-detail', title: project.title, assetVersion: Date.now(), project });
});

// Start the server
app.listen(port, address, () => {
    console.log(`Server is running on http://${address}:${port}`);
});

module.exports = app;
