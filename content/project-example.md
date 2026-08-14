---
title: "Your Project Name"
date: 2026-01-01
description: "One sentence shown on the /projects list page under the title."
tech: ["Language", "Framework"]
repo: "https://github.com/you/your-repo"
live: "https://your-live-site.com"
pin:
image:
---
This is the write-up for the project — plain markdown, rendered with `marked`. Fenced code blocks render as a terminal-style window, handy for install commands (see `bardns.md` for an example).

## Field notes

- `tech` — array of tags shown as small pills on both the list and detail page. Leave as `[]` or omit for none.
- `repo` — link to source, shown with a GitHub icon next to the title. Omit or leave `""` to hide the "repo" link entirely.
- `live` — link to a hosted/deployed version, shown with an external-link icon. Omit or leave `""` to hide the "live" link — useful for things with no hosted site, like a native app (see `bardns.md`).
- `pin` — optional number. Set it to pin this project to the top of `/projects`, sorted lowest-first (`pin: 1` comes before `pin: 2`), and it'll show a small pin icon on its card. Leave it blank or delete the line for a normal, unpinned project — those sort by `date`, newest first.
- `image` — optional path to an image under `public/images/` (e.g. `/images/projects/your-image.png` — put the actual file there first). Renders to the left of the write-up on the detail page; on mobile it floats left and the text wraps around it. Leave blank or omit for no image.

## How to use this

1. Copy this file into `content/projects/`, and rename it to your slug, e.g. `my-project.md` — the filename (minus `.md`) becomes the URL, so that example would be `/projects/my-project`.
2. Fill in the frontmatter fields above.
3. Write the project details below the `---` in plain markdown.
4. `/projects` picks it up automatically — no routes or other files need touching.

This file itself is never read by the site — it lives in `content/`, not `content/projects/`, purely as a reference. Leave it here or delete it, doesn't matter.
