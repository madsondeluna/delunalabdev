# delunalab.dev

Personal website of Madson de Luna. A virtual lab for courses, applications, videos, and writing on software development and bioinformatics.

Live at [delunalab.dev](https://delunalab.dev).

## Tech stack

- **Next.js 16** — React framework with static export (`output: 'export'`)
- **React 19** — UI component library
- **TypeScript** — static typing
- **Tailwind CSS 4** — utility-first CSS
- **Cloudflare Pages** — hosting and CDN, deployed from the `main` branch on every push

## Fonts

- **Geist Sans** — body text
- **Geist Mono** — labels, tags, monospaced elements
- **Cormorant Garamond** — display headings

## Local development

```bash
npm install
node node_modules/next/dist/bin/next dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: this project runs on a macOS volume without symlink support. Use `node node_modules/next/dist/bin/next` instead of `next` directly.

## Build

```bash
node node_modules/next/dist/bin/next build
```

Output goes to `out/`. Cloudflare Pages runs `npm run build` and serves that directory.

## Links

- GitHub: [github.com/madsondeluna](https://github.com/madsondeluna)
- Twitter: [x.com/madsondeluna](https://x.com/madsondeluna)
- LinkedIn: [linkedin.com/in/madsonaragao](https://www.linkedin.com/in/madsonaragao/)
