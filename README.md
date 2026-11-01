# Writing

Source for [writing.christopherlovell.co.uk](https://writing.christopherlovell.co.uk), built with [Astro](https://astro.build) and deployed to GitHub Pages on every push to `main`.

## Writing a post

Add a Markdown file to `src/content/posts/`. The filename becomes the URL (`my-post.md` → `/my-post/`).

```markdown
---
title: My post
description: One sentence shown on the index, in feeds and in link previews.
date: 2026-11-01
draft: true        # optional: shows locally, hidden from the published site
updated: 2026-12-01 # optional
---

Text, with $inline$ and $$display$$ maths, footnotes[^1], tables and code blocks.

[^1]: Like this.
```

Write `\$` for a literal dollar sign, since `$...$` is maths.

## Running locally

Needs Node 22.23.4 or later.

```bash
npm install
npm run dev      # http://localhost:4321, includes drafts
npm run build    # production build into dist/
```
