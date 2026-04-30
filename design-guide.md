# design guide — delunalab

Reference document for standardizing other sites with the same visual identity. Built with Next.js 15 (App Router), Tailwind CSS v4, TypeScript.

## core concept

Everything is lowercase. This is a non-negotiable identity rule: all visible text on the site is rendered in lowercase via `text-transform: lowercase` applied to the body. This includes headings, nav links, labels, buttons, and footer text. Write content in any case in code — the CSS transforms it.

The aesthetic is editorial and minimal: generous whitespace, strong typography contrast, no decorative elements, no gradients on content, no rounded corners on cards.

## color system

All colors are defined as CSS custom properties on `:root` (light mode) and `:root.dark` (dark mode). The `.dark` class is toggled on `<html>` by JavaScript reading from `localStorage`.

### light mode

```css
:root {
  --bg:            #f4f6f9;   /* page background — ice white, cool-toned */
  --surface:       #ebeef3;   /* cards, section backgrounds */
  --surface-hover: #e1e5ec;   /* card hover state */
  --border:        #ced3dc;   /* dividers, card borders, section rules */
  --border-hover:  #748cab;   /* border on hover — steel blue accent */
  --text:          #0d1321;   /* primary text — darkest navy */
  --muted:         #3e5c76;   /* secondary text, labels, tags, nav links */
  --dim:           #dde1e9;   /* placeholder backgrounds, thumbnails */
  --accent:        #3e5c76;   /* interactive accent */
  --secondary:     #748cab;   /* secondary accent, tag borders on hover */
}
```

### dark mode

```css
:root.dark {
  --bg:            #0d1321;   /* page background — deepest navy */
  --surface:       #1d2d44;   /* cards, section backgrounds — dark navy */
  --surface-hover: #253752;   /* card hover state */
  --border:        #2a3f5c;   /* dividers, card borders */
  --border-hover:  #3e5c76;   /* border on hover — medium blue */
  --text:          #f4f6f9;   /* primary text — ice white */
  --muted:         #748cab;   /* secondary text, labels — steel blue */
  --dim:           #141c2e;   /* placeholder backgrounds, thumbnails */
}
```

### theme toggle

Dark/light is toggled by adding or removing the `dark` class on `<html>`. The user's preference is persisted in `localStorage` under the key `"theme"`. To prevent flash of wrong theme on load, inject this script as the first child of `<body>` before any content:

```html
<script>
  try {
    if (localStorage.getItem('theme') === 'dark')
      document.documentElement.classList.add('dark');
  } catch(e) {}
</script>
```

The toggle icon is a 13x13px SVG circle: outline only in light mode, filled in dark mode. Color follows `--muted` at rest, `--text` on hover.

## typography

Three font families, all loaded via `next/font/google`:

| role | font | variable | weights |
|---|---|---|---|
| body | Geist Sans | `--font-geist-sans` | system default |
| labels / code / mono | Geist Mono | `--font-geist-mono` | system default |
| display / headings | Cormorant Garamond | `--font-cormorant` | 300, 400, 500 |

### scale

| element | font | size | weight | tracking |
|---|---|---|---|---|
| hero title | Cormorant Garamond | `clamp(4rem, 10vw, 8.5rem)` | 300 | `-0.03em` |
| section title | Cormorant Garamond | `clamp(2.25rem, 4vw, 3.5rem)` | 300 | `-0.02em` |
| opinion title | Cormorant Garamond | `clamp(1.1rem, 2vw, 1.5rem)` | 400 | default |
| body / description | Geist Sans | `clamp(1rem, 1.5vw, 1.2rem)` | 400 | default |
| card body text | Geist Sans | `0.8375rem` | 400 | default |
| nav links | Geist Sans | `0.8125rem` | 400 | default |
| labels / section numbers | Geist Mono | `0.6875rem` | 400 | `0.08–0.14em` |
| tags / badges | Geist Mono | `0.625rem` | 400 | `0.06–0.1em` |
| logo / brand | Geist Mono | `0.8125rem` | 400 | `0.04em` |

Line heights: `0.92` for hero, `1` for section titles, `1.3–1.45` for card titles, `1.65–1.7` for body text.

## layout

- Max content width: `1200px`, centered with `margin: 0 auto`.
- Horizontal padding: `2.5rem` on both sides.
- Section vertical padding: `100px` top and bottom.
- The nav is `64px` tall and fixed at the top (`z-index: 50`).

## navigation

Fixed header, `64px` height, transparent when at top, switches to blurred/frosted glass on scroll (after `40px`):

```
background: rgba(8,8,8,0.88) — scrolled
backdrop-filter: blur(16px)  — scrolled
border-bottom: 1px solid var(--border) — scrolled
```

Left: brand name in Geist Mono. Right: anchor links + theme toggle. Nav link color is `--muted` at rest, `--text` on hover, transition `0.2s ease`.

Note: the nav background color on scroll is hardcoded dark (`rgba(8,8,8,0.88)`) regardless of theme. Adjust this if your other site needs a light-mode-aware nav blur.

## section structure

Each section follows this pattern:

```
<section id="[name]" style={{ padding: "100px 0" }}>
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}>
    <SectionHeader number="01" title="section name" description="..." />
    [content grid or list]
  </div>
</section>
```

The `SectionHeader` component renders:
- Section number in Geist Mono, `0.6875rem`, `--muted`, `letterSpacing: 0.12em`
- Section title in Cormorant Garamond, `clamp(2.25rem, 4vw, 3.5rem)`, weight 300
- Optional description in Geist Sans, `0.9rem`, `--muted`, `maxWidth: 480px`
- A `1px solid var(--border)` rule below, with `3rem` padding-bottom and `3.5rem` margin-bottom

## card grids

Cards are separated by a `1px` gap on a colored background — not individual borders. The technique is:

```jsx
<div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "1px",
  background: "var(--border)",  /* the gap color */
}}>
  {items.map(item => (
    <div style={{ background: "var(--surface)" }}>
      {/* card content */}
    </div>
  ))}
</div>
```

This creates the appearance of thin borders between cards without using `border` on each card. The card background is `var(--surface)` and changes to `var(--surface-hover)` on hover via the `.hover-surface` CSS class.

Card internal padding: `2rem`. Card content layout: flex column, gap `1rem`.

## list rows

For single-column lists (applications, opinions), use the same `1px` gap technique with `flexDirection: "column"`:

```jsx
<div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
  {items.map(item => (
    <a style={{ background: "var(--surface)", padding: "2rem" }} className="hover-surface">
      ...
    </a>
  ))}
</div>
```

## tags and badges

Small pill labels using Geist Mono:

```jsx
/* tag — outlined */
<span style={{
  fontFamily: "var(--font-mono)",
  fontSize: "0.625rem",
  color: "var(--muted)",
  border: "1px solid var(--border)",
  padding: "2px 8px",
  borderRadius: "2px",
}}>
  tag name
</span>

/* badge — filled with category color */
<span style={{
  fontFamily: "var(--font-mono)",
  fontSize: "0.625rem",
  color: "#fff",
  background: "#4a3f6b",  /* category-specific color */
  padding: "2px 8px",
  borderRadius: "2px",
  letterSpacing: "0.08em",
}}>
  badge label
</span>
```

## interactive states

All interactive states are handled via CSS classes defined in `globals.css`, not inline JS event handlers (required for Next.js server components):

```css
.hover-surface         /* background: var(--surface-hover) on hover */
.hover-fade            /* opacity: 0.7 on hover */
.link-muted            /* color: var(--muted), → var(--text) on hover */
.link-cta              /* underlined primary CTA link */
.link-secondary        /* muted secondary link */
```

Transition duration across all interactive states: `0.2s ease`.

Text selection: `background: var(--text); color: var(--bg)` — inverted colors.

## scroll reveal animation

All sections use a `FadeIn` client component that wraps content and triggers on scroll via `IntersectionObserver`:

- Initial state: `opacity: 0`, `transform: translateY(20px)`
- Visible state: `opacity: 1`, `transform: translateY(0)`
- Transition: `0.9s cubic-bezier(0.16, 1, 0.3, 1)`
- Optional `delay` prop (in ms) for staggered children
- Threshold: `0.05`, root margin: `0px 0px -40px 0px`

```tsx
<FadeIn delay={100}>
  <div>content appears on scroll</div>
</FadeIn>
```

## hero section

Full viewport height (`min-height: 100svh`), `position: relative`, `overflow: hidden`. Layout: text content on the left (z-index 1) with a canvas animation absolutely positioned on the right, covering 70% of the width from the right edge.

Text content has `maxWidth: "1200px"`, padded `120px` top, `80px` bottom, `2.5rem` horizontal. The headline inner container is `maxWidth: "620px"`.

Hero entrance animation: all elements fade in on mount via `setTimeout(100ms)` trigger, with staggered `transitionDelay` per element (0ms, 80ms, 160ms, 240ms, 400ms).

Scroll indicator: `position: absolute`, `bottom: 2.5rem`, `right: 2.5rem`. Text in Geist Mono, vertical writing mode (`writing-mode: vertical-rl`), followed by a `1px` line `48px` tall with gradient fade.

## canvas animation (hero background)

A canvas element renders animated ASCII-like characters that respond to the cursor position:

- Character set: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%@&*!?[]{}|;:<>+-=~^/\`
- Cell size: `18px` grid
- Font: `monospace`, `0.7 * CELL` size
- Color: `--text` CSS variable read at draw time (adapts to theme automatically)
- Base opacity range: `0.05` to `0.45`, slow random flicker
- Cursor boost: within `150px` of cursor, opacity increases up to `+0.6`
- Mouse events tracked on `document` (not the canvas) to work through overlapping elements

Two overlays on top of the canvas:

1. Blur overlay (left 52% of canvas): `backdrop-filter: blur(6px)` with a mask gradient from opaque left to transparent right. Creates the effect of characters dissolving toward the text content.
2. Vignette overlay: four linear gradients (one per edge) fading to `var(--bg)`. Left edge fades 32%, all other edges fade 10%.

## status indicators

Live status colors (hardcoded, not CSS variables):

```
live         #4ade80   /* green */
beta         #facc15   /* yellow */
development  #60a5fa   /* blue */
coming soon  var(--muted)
```

## level / category badges (courses and videos)

Category-specific background colors:

```
beginner     #2d6a4f   /* dark green */
intermediate #4a3f6b   /* dark purple */
advanced     #7a2e2e   /* dark red */

tutorial     #4a3f6b   /* dark purple */
project      #2d5a7a   /* dark blue */
concept      #4a5a2d   /* dark olive */
workflow     #7a4a2d   /* dark brown */
```

These are intentionally dark so white text (`color: #fff`) is legible on top.

## footer

Minimal footer inside the `1200px` container, `3rem` padding, flex row space-between, border-top `1px solid var(--border)`:

- Left: brand name in Geist Mono `0.8125rem`, copyright in Geist Mono `0.6875rem` `--muted`
- Right: email link + vertical `1px` divider + social links (github, youtube, linkedin), all in Geist Mono `0.6875rem`, using `.link-muted` class

## what to replicate on another site

To apply this identity to a new site, the minimum required elements are:

1. `text-transform: lowercase` on `body`
2. CSS variables for the full color system (both `:root` and `:root.dark`)
3. Cormorant Garamond for display headings, Geist Sans for body, Geist Mono for labels
4. The dark/light toggle with `localStorage` persistence and the anti-flash script
5. The `hover-surface`, `hover-fade`, `link-muted`, `link-cta`, `link-secondary` utility classes
6. The `FadeIn` scroll reveal component
7. The `1px gap on colored parent` technique for card grids
8. Fixed nav with `backdrop-filter` blur on scroll
9. Section structure: `100px` vertical padding, `1200px` max-width, `2.5rem` horizontal padding
10. `::selection` with inverted colors
