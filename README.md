# Astro Cartoon Portfolio

A modern, responsive portfolio website built with Astro 5, featuring a beautiful cartoon-style design with smooth animations, interactive project carousel, blog system, and comment integration.

## Quick Deploy

[![Deploy to Tencent Cloud](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?template=https://github.com/tomcomtang/astro-cartoon-portfolio&output-directory=./dist&build-command=npm%20run%20build&install-command=npm%20install&entry_from=childtom)

## Preview

You can preview the project online at:

<https://astro-cartoon-portfolio.edgeone.app/>

## Features

- Cartoon-style Astro portfolio, responsive layout
- Blog: Markdown posts, excerpts, tags, search, reading-time display, optional cover images
- Config-driven content: site copy, project list, post images, social links
- Comments via Giscus, SEO-friendly pages, smooth scroll animations

## Tech Stack

- Astro 5.x, TypeScript, Vite
- Styling: custom CSS
- Content: Markdown with Astro Content Collections
- Comments: Giscus (React component)

## Getting Started

```bash
git clone https://github.com/tomcomtang/astro-cartoon-portfolio.git
npm install
npm run dev
```

## Paths & Purpose

- `src/pages/index.astro` – Home (hero, projects, highlights)
- `src/pages/posts.astro` – Blog list with search/tag filter
- `src/pages/posts/[slug].astro` – Blog detail with comments
- `src/pages/about.astro` – About/skills section
- `src/pages/contact.astro` – Contact info and social links
- `src/pages/comments.astro` – Giscus standalone page
- `src/content/posts/` – Markdown blog posts
- `src/config/site.ts` – Site copy, nav, social, hero/about/contact text
- `src/config/projects.ts` – Project entries (title, desc, tech, links, images)
- `src/config/posts-images.ts` – Post slug → cover image mapping
- `src/styles/` – Page-level styles (home, posts list/detail, contact, transitions)
- `public/` – Static assets (images, svg, fonts)

## Environment Variables

Set these for Giscus comments:

```env
PUBLIC_GISCUS_REPO=your-username/your-repo
PUBLIC_GISCUS_REPO_ID=your-repo-id
PUBLIC_GISCUS_CATEGORY_ID=your-category-id
```

## License

MIT

## Author

tomcomtang
