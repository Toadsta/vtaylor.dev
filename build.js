const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const { loadContent } = require('./lib/content');

const outDir = path.join(__dirname, 'dist');
const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');

const assetVersion = process.env.GITHUB_SHA ? process.env.GITHUB_SHA.slice(0, 8) : String(Date.now());

const projects = loadContent(path.join(__dirname, 'content/projects'));

const pages = [
    { file: 'index.html', body: 'about', title: 'about' },
    { file: 'about.html', body: 'about', title: 'about' },
    { file: 'blog.html', body: 'blog', title: 'blog' },
    { file: 'projects.html', body: 'projects', title: 'projects', locals: { projects } },
];

for (const project of projects) {
    pages.push({ file: `projects/${project.slug}.html`, body: 'project-detail', title: project.title, locals: { project } });
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const page of pages) {
    const html = ejs.render(
        fs.readFileSync(path.join(viewsDir, 'base.ejs'), 'utf8'),
        { body: page.body, title: page.title, assetVersion, ...(page.locals || {}) },
        { views: [viewsDir], filename: path.join(viewsDir, 'base.ejs') }
    );
    const outPath = path.join(outDir, page.file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
}

fs.cpSync(publicDir, outDir, { recursive: true });

console.log(`Built ${pages.length} pages to ${outDir}`);
