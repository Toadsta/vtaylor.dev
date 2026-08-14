const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

function loadContent(dir) {
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

    const items = files.map((file) => {
        const slug = file.replace(/\.md$/, '');
        const raw = fs.readFileSync(path.join(dir, file), 'utf8');
        const { data, content } = matter(raw);
        return { slug, ...data, html: marked.parse(content) };
    });

    items.sort((a, b) => {
        if (a.pin != null && b.pin != null) return a.pin - b.pin;
        if (a.pin != null) return -1;
        if (b.pin != null) return 1;
        return new Date(b.date) - new Date(a.date);
    });
    return items;
}

module.exports = { loadContent };
