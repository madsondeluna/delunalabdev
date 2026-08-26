# Design guide, delunalab

This site is built on **Pure Design**. The language is the guide, and it lives at
`madsondeluna/pure-design-language`, rendered live at
[madsondeluna.com/apps/pure/preview](https://madsondeluna.com/apps/pure/preview/).
Read that before changing anything visual here. What follows is only what is
specific to this repository.

The previous version of this file documented a different design and has been
replaced rather than amended. Three of its rules were the opposite of the
language's and were removed from the code in the same pass: lowercase forced on
the whole body, Cormorant Garamond as the display face, and a per-technology
colour palette of some sixty hand-written hexes.

## Where the language lives

| Path | What |
|---|---|
| `src/app/pure/` | the CSS the Next build imports: `theme.css`, `patterns.css`, `light.css`, `motion.css` |
| `public/pure/` | the same CSS by URL for the static pages, plus `icons.svg` and `light.js` |
| `public/biohub/_shared.css` | the eight tools import the language from `/pure/` and add only their own shapes |

Copies, never symlinks to the volume: the project has to build without it mounted.
Bumping the language is copying `web/*.css`, `web/icons.svg` and `web/light.js`
into both places.

## What is specific to this site

| Piece | Note |
|---|---|
| Fonts | `next/font/google` self-hosts the three families. Archivo declares `axes: ["wdth"]`, without which `--font-display-stretch` resolves and does nothing |
| Hero canvas | the character rain reads `--text` through `getComputedStyle` every frame, so it follows the mode with no extra wiring |
| Mode | one `theme` key in `localStorage` shared with the tool pages. A stored `"dark"` predates 1.6.0 and meant the blue one, so it is translated to `deep-blue` rather than discarded |
| App cards | `.card-glass` keeps its resting fill on hover; the response is the travelling highlight of `.lit` and the rim of `.lit-edge`, which are gradual. The fill swap was a binary jump and read as a blink |
| Status | `--status-*` on a dot, with the label always in words next to it. Type and technology are neither state nor data series, so they take neutral ink |
| Data scales | the electrostatic ramp is `--div-*` and SASA is `--seq-*`. Both were rainbows, which invent boundaries in continuous data and fail colour-blind separation |

## Rules this site must not break

The full list is in the language's README, under "Craft rules". The three that
this repository has broken before, and that a review here should check first:

- no hex, rem or ms literal in app CSS; if a value is missing it becomes a token
  in the language, never a literal here
- sentence case everywhere, including headings, buttons and table headers
- the standard `backdrop-filter` declaration comes **after** the `-webkit-` one.
  Lightning CSS keeps only the last of the pair and does not restore the standard
  prefix, so the wrong order ships glass with no blur at all, in a build that
  compiles clean

## Deploy

Cloudflare Pages, from `main` on every push, running `npm run build` and serving
`out/`. The GitHub Pages entry on this repository is a leftover and its
certificate has been failing since July; it serves nothing.
