---
title: "Your Post Title"
date: 2026-01-01
excerpt: "One or two sentences shown on the /blog list page under the title and date."
tags: ["topic-one", "topic-two"]
pin:
image:
---
This is the body of the post — plain markdown, rendered with `marked`. Headings, links, lists, bold/italic, and fenced code blocks (rendered as a terminal-style window) all work.

## Field notes

- `tags` — array of tags shown as small pills, on both the list page and next to the title on the post itself. Leave as `[]` or omit for none.
- `pin` — optional number. Set it to pin this post to the top of `/blog`, sorted lowest-first (`pin: 1` comes before `pin: 2`), and it'll show a small pin icon on its list entry. Leave it blank or delete the line for a normal, unpinned post — those sort by `date`, newest first.
- `image` — optional path to an image under `public/images/` (e.g. `/images/blog/your-image.png` — put the actual file there first). Renders to the left of the post on the detail page; on mobile it floats left and the text wraps around it. Leave blank or omit for no image.

## How to use this

1. Copy this file into `content/blog/`, and rename it to your slug, e.g. `my-new-post.md` — the filename (minus `.md`) becomes the URL, so that example would be `/blog/my-new-post`.
2. Fill in `title`, `date` (`YYYY-MM-DD` — controls sort order, newest first), and `excerpt` (shown on the `/blog` list page).
3. Write the post below the `---` in plain markdown.
4. That's it — no routes or other files need touching. `/blog` picks it up automatically, both in local dev (`node app.js`) and in the static build (`npm run build`).

This file itself is never read by the site — it lives in `content/`, not `content/blog/`, purely as a reference. Leave it here or delete it, doesn't matter.
