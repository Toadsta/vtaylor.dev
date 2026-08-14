---
title: "Birch"
date: 2026-08-14
pin: 2
description: "The template this website is built on — a ready-to-use static site with easy customisation."
tech: ["Node.js", "EJS", "GitHub Pages"]
repo: "https://github.com/Toadsta/birch"
live: "https://toadsta.github.io/birch/"
image: "/images/projects/birch-preview.png"
---
The template this site runs on, minus everything that makes it mine. Fork it, drop your name and bio into `content/settings.md`, and you've got the same blog/projects setup, light/dark theme, and terminal-style look.

**Set up via GitHub Actions:**

```
$ fork Toadsta/birch on github.com
$ open the Actions tab -> enable workflows
$ open Settings -> Pages -> set source to "GitHub Actions"
$ edit content/settings.md with your name, socials, and bio
$ git push
```

**Or install locally:**

```
$ git clone https://github.com/Toadsta/birch.git
$ cd birch
$ npm install
$ npm run build
```

`npm run build` pre-renders every route to static HTML in `dist/` — the same output GitHub Pages deploys.
