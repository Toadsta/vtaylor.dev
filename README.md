# vtaylor.dev
![license](https://img.shields.io/github/license/Toadsta/vtaylor.dev) ![Code size](https://img.shields.io/github/languages/code-size/Toadsta/vtaylor.dev)

vtaylor.dev is my personal website that I mainly made to just learn
some more web programming skills. The website is a general about me
site with links to my socials, a projects page, and a blog.

VicOS, the Windows 95-style desktop pastiche that used to live here, has moved to
its own repo: [Toadsta/VicOS](https://github.com/Toadsta/VicOS).

## Features and Technologies Used

- **Node.js + Express**: server for local development, serving the EJS templates and static assets.
- **EJS**: templating so I can embed page fragments into a shared base layout. Similar to Flask/Jinja.
- **Markdown content**: the about page, blog posts, and projects all live as markdown files with frontmatter under `content/`, parsed with `gray-matter` and `marked`. Adding a new post or project is just adding a file — no route or template changes needed.
- **Static export + GitHub Pages**: the live site isn't the Express server — `npm run build` pre-renders every route to plain HTML in `dist/`, and a GitHub Actions workflow deploys that to GitHub Pages on every push to `main`.
- **Light/dark theme**: follows system preference by default, with a manual toggle in the footer.

## Project Structure

Here's the structure of the project:
```
├── app.js                  # Express dev server
├── build.js                 # static export to dist/ for GitHub Pages
├── lib
│   ├── content.js           # loads markdown content (gray-matter + marked)
│   └── errors.js
├── content
│   ├── about.md
│   ├── blog
│   └── projects
├── views
│   ├── base.ejs
│   ├── about.ejs
│   ├── blog.ejs
│   ├── blog-post.ejs
│   ├── projects.ejs
│   ├── project-detail.ejs
│   └── error.ejs
└── public
    ├── css
    ├── fonts
    ├── images
    └── javascript
```

## Getting Started

To run this website locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running the following command in the project directory:
```npm install```
3. Start the Node.js dev server by running the following command:
```node app.js```
4. Open your web browser and visit http://localhost:3000 or visit https://vtaylor.dev to visit my website!

To build the static site the same way production does:
```npm run build```
This pre-renders everything into `dist/`, which is what actually gets deployed.

## Adding a blog post or project

Drop a markdown file with frontmatter into `content/blog/` or `content/projects/` — the filename (minus `.md`) becomes the URL slug. `content/blog-example.md` and `content/project-example.md` are reference templates with all the available frontmatter fields explained; copy one in rather than starting from scratch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Acknowledgments

The contents of the repository was made by me (Victoria Taylor):
1. The theme of the main webpage is inspired by [Risotto](https://github.com/joeroe/risotto) for Hugo
2. Error pages use cat images from [http.cat](https://http.cat)
