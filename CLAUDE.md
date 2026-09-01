# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is

A static one-page marketing site for **Christina van Hoekelen** — freelance HR × HRtech consultant. Plain HTML + CSS + JS — no framework, no build step, no package manager. See [README.md](README.md) for the public-facing overview.

**This repo is NOT part of the Kardz.eu workspace.** Do not apply the Kardz global rules in `~/.claude/CLAUDE.md` here:

- No `setup.sh`, no venv, no Python tooling
- No Azure / DEV / PRD deployment flow
- No ADO PRs, no changelog fragments, no SemVer bumps
- No automated tests required (it's a static page)

Use GitHub PR conventions if/when a PR is opened (repo lives on github.com/dickaine/ChristinaWebpage).

## Working on the site

1. Edit HTML / CSS / JS directly.
2. Serve via `python3 -m http.server 8000` and visit `http://localhost:8000/`. Don't open the HTML file directly — `file://` breaks some font + relative-path behavior.
3. Test at 375px width too. Every section is mobile-responsive; don't regress that.
4. Toggle dark mode via the round button in the header to check both themes.

## Strategic positioning (why the design is the way it is)

Christina is the HR × IT bridge consultant for Dutch scale-ups and corporates. The HR-consulting web has converged on identical templates (corporate blue, "we unlock potential" headlines, hidden humans, no pricing, soft CTAs). This site rejects that on three axes — keep these in mind for any future change:

1. **Visual:** editorial-minimal (warm off-white + one saturated accent + serif display) — *not* corporate-blue-and-pastel-illustration.
2. **Verbal:** sharp first-person POV ("Ik bouw…", "Ik help…") — *not* abstract "we transform".
3. **Commercial:** productized offers with named scope and duration — *not* "let's talk".

## File layout

```
.
├── index.html               # Single page, all sections
├── CSS/
│   ├── general.css          # Tokens (palette, type, spacing), reset, .container, .btn, .section, .eyebrow, .tbd, dark-mode block
│   ├── header.css           # Sticky header — wordmark + nav + theme toggle + CTA
│   ├── hero.css             # Hero + "Gewerkt voor" logo strip
│   ├── overmij.css          # "Over mij" section
│   ├── diensten.css         # Three productized offer cards
│   ├── case-studies.css     # Three case-study cards
│   ├── testimonials.css     # Carousel — DOM shape locked by carousel.js
│   ├── hr-tech-review.css   # HRtechArena "Featured in" strip
│   ├── newsletter.css       # Newsletter band on accent background
│   ├── contact.css          # Contact section (Cal.com placeholder + 3 methods)
│   ├── bottom-banner.css    # 3-column footer
│   └── theme-toggle.css     # Theme-toggle button
└── Javascript/
    ├── scrolling.js         # Header sticky-hide on scroll-down (DO NOT touch the mechanism)
    ├── carousel.js          # Cycles testimonial .active every 10s (DO NOT change DOM contract)
    └── theme-toggle.js      # localStorage + prefers-color-scheme → data-theme on <html>
```

## Design system (lives in `general.css`)

All styling references CSS variables on `:root`. Never hard-code colors, font sizes, or spacing in section files — extend the tokens in `general.css` instead.

**Palette** — light mode default:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F7F4EE` | Page background (warm off-white) |
| `--bg-alt` | `#EEE9DF` | Alternate section background |
| `--surface` | `#FFFFFF` | Cards |
| `--ink` | `#1A1A1A` | Body text |
| `--ink-muted` | `#4A4A47` | Secondary text |
| `--accent` | `#1E3A2F` | Deep-forest accent (open: may swap to ink-blue `#2B3A67`) |
| `--accent-soft` | `rgba(30,58,47,0.10)` | Hover backgrounds |
| `--accent-contrast` | `#F7F4EE` | Text on accent backgrounds |
| `--rule` | `#D8D2C4` | Hairlines, dividers |

Dark mode flips these via two paths: `@media (prefers-color-scheme: dark)` (system default) AND `[data-theme="dark"]` on `<html>` (toggle override). When tweaking colors, update both blocks.

**Type**

- `--font-display`: **Fraunces** (variable, opsz + wght) — headings, pull-quotes, wordmark
- `--font-body`: **Inter** (variable) — running text, nav, buttons, forms
- Type scale uses `clamp()` — `--fs-h1`, `--fs-h2`, `--fs-h3`, `--fs-h4`, `--fs-body`, `--fs-small`, `--fs-eyebrow`
- **Never use `font-size: Xvw`.** That was the previous mistake; it breaks readability at extremes.

**Spacing** — `--space-1` (4px) through `--space-12` (128px), all multiples of 4. Use these, not magic numbers.

**Layout**

- `.container` (72rem max) for text sections; `.container-wide` (80rem) for hero/grid.
- `.section` provides default top/bottom padding; `.section-alt` adds the alternate background.
- `--header-h` (88px) — used for body `padding-top` and `scroll-padding-top`. Update this single token if the header height changes.
- **Never use `height: 100vh` on sections.** Use `min-height` with `padding-block` instead — `100vh` breaks on short laptops and tall phones.

## Conventions in the codebase

- The site lives in **one HTML file** ([`index.html`](index.html)). Sections are anchored with `id="..."` and reached via in-page nav.
- **One stylesheet per section** under [`CSS/`](CSS/). When adding a new section, add a matching `.css` and `<link>` it in `<head>` (preserve the existing link order — `general.css` first, section CSS in roughly the order they appear on the page, `theme-toggle.css` last).
- **All copy stays in Dutch** unless the user explicitly asks for English.
- **Sticky-hide header**: [`scrolling.js`](Javascript/scrolling.js) sets inline `top` on `#header`. Don't override `top` in CSS or duplicate the listener. The magic `-115px` offset in the script slightly overshoots the current 88px header height — fine visually, leave it unless the user asks.
- **Testimonials carousel DOM is a contract**: [`carousel.js`](Javascript/carousel.js) selects `.carousel-text div` and toggles `.active` every 10s. To add a testimonial, add another direct-child `<div>` of `.carousel-text` (with `<blockquote>` + `<footer class="testimonial-attribution">` inside). Don't introduce nested divs inside an item — they'll get matched too.
- **Theme toggle** lives in [`theme-toggle.js`](Javascript/theme-toggle.js). The `<head>` of `index.html` has a tiny pre-paint script that reads `localStorage.theme` and sets `data-theme` before first render — keep that or you'll get FOUC on dark mode.
- **Auto-year** in the footer is set by a one-liner script — leave the literal year in `<span id="footer-year">` so view-source readers see a sensible value even with JS off.

## Things to flag in HTML, not invent

Search the codebase for `TBD:` — every placeholder that needs Christina's input is marked. Don't fabricate values for any of these:

- **Prices** in the three Diensten cards (currently "op aanvraag").
- **Case-study outcome numbers** (KPN platforms migrated, VU onboarding metrics).
- **Third case-study** (client, period, deliverable, outcome — all TBD).
- **Hero photo** — currently reuses the studio portrait; brief wants environmental shot.
- **Logo strip** clients beyond KPN + VU (JDE, AFPRO, Rituals all placeholder).
- **Cal.com / Calendly URL** — used in header CTA, hero CTA, and contact embed.
- **Newsletter `form action`** — empty until an ESP is chosen.
- **KvK number** in the footer.
- **Yvette Minderhoud testimonial** — original was a joke; current copy is a respectful placeholder.

When new TBDs are introduced, follow the same pattern: `<!-- TBD: short description -->` HTML comment and (optionally) a `<span class="tbd">…</span>` user-facing chip.

## Known rough edges (mention before touching, don't silently "fix")

- **Image filenames with spaces** (`WhatsApp Image 2024-04-15 at 12.33.25.jpeg`, `Contact foto.jpg`, `Diensten image.jpg`). URLs `%20`-encode fine. Rename only on request.
- **Mojibake risk** — keep files UTF-8. The carousel originally had `’` curly apostrophes; current quotes use straight `'` deliberately.
- **`scrolling.js` magic offset** (`-115px`) doesn't match the new 88px header height. Off-screen is off-screen; not a bug. Leave unless asked.
- **No hamburger menu** — at <760px the primary nav is hidden entirely; only the CTA stays in the header. If Christina wants nav on mobile, that's a real follow-up (build a slide-out or stack the nav into the CTA dropdown).

## Style preferences

- **Default to no comments** in code. The HTML keeps section-divider comments (`<!-- hero -->` / `<!-- end of hero -->`) for navigation only — match that pattern when adding sections.
- **Don't introduce a build tool, framework, package.json, Tailwind, or any JS framework.** Static HTML/CSS/JS is the rule.
- **Don't add tracking, analytics, or third-party scripts** beyond the existing Google Fonts and a future Cal.com embed.
- **Don't reformat untouched files.** The HTML is two-space-indented from `<html>`; CSS uses two-space indent and one rule per line. Match what's in the file you're editing.
- **Tap targets ≥44px** on anything interactive. The `.btn` class enforces this — use it instead of styling raw `<a>`s.
