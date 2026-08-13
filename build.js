const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'dist');
const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');

const pages = [
    { file: 'index.html', body: 'about', title: 'about' },
    { file: 'about.html', body: 'about', title: 'about' },
    { file: 'blog.html', body: 'blog', title: 'blog' },
    { file: 'projects.html', body: 'projects', title: 'projects' },
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const page of pages) {
    const html = ejs.render(
        fs.readFileSync(path.join(viewsDir, 'base.ejs'), 'utf8'),
        { body: page.body, title: page.title },
        { views: [viewsDir], filename: path.join(viewsDir, 'base.ejs') }
    );
    fs.writeFileSync(path.join(outDir, page.file), html);
}

fs.cpSync(publicDir, outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'CNAME'), 'vtaylor.dev\n');

console.log(`Built ${pages.length} pages to ${outDir}`);
