const express = require('express');
const path = require('path');
require('dotenv').config();
const { loadContent } = require('./lib/content');
const { errorPages } = require('./lib/errors');

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const address = process.env.ADDRESS || 'localhost'; // Default to localhost if ADDRESS is not set

function renderError(res, code, message, reqPath) {
    res.status(code).render('base', { body: 'error', title: `${code} error`, assetVersion: Date.now(), code, message, path: reqPath });
}

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
    if (!post) return renderError(res, 404, 'no such file or directory', req.path);
    res.render('base', { body: 'blog-post', title: post.title, assetVersion: Date.now(), post });
});

app.get('/projects', (req, res) => {
    const projects = loadContent(path.join(__dirname, 'content/projects'));
    res.render('base', { body: 'projects', title: 'projects', assetVersion: Date.now(), projects });
});

app.get('/projects/:slug', (req, res) => {
    const projects = loadContent(path.join(__dirname, 'content/projects'));
    const project = projects.find((p) => p.slug === req.params.slug);
    if (!project) return renderError(res, 404, 'no such file or directory', req.path);
    res.render('base', { body: 'project-detail', title: project.title, assetVersion: Date.now(), project });
});

// Fun status-code pages, not tied to real server conditions since GitHub Pages
// is static and can't actually trigger these - just here for the novelty
for (const [code, message] of Object.entries(errorPages)) {
    app.get(`/${code}`, (req, res) => renderError(res, Number(code), message, req.path));
}

// Catch-all 404 for anything else
app.use((req, res) => {
    renderError(res, 404, 'no such file or directory', req.path);
});

// Anything unplanned falls back to a generic error page
app.use((err, req, res, next) => {
    console.error(err);
    renderError(res, 406, 'something went wrong', req.path);
});

// Start the server
app.listen(port, address, () => {
    console.log(`Server is running on http://${address}:${port}`);
});

module.exports = app;
