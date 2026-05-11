# Christina For HR

Personal one-page website for **Christina van Hoekelen** — freelance HR / HRTech professional based in the Netherlands. The site is in Dutch and showcases services, testimonials, an HR Tech Arena profile, and contact options (LinkedIn, WhatsApp, email).

## Stack

Plain static site — no build step, no framework.

- HTML5 (single page)
- Vanilla CSS (one stylesheet per section)
- Vanilla JavaScript (two small scripts)

## Structure

```
.
├── index.html                 # Single page that ties everything together
├── CSS/
│   ├── general.css            # Base / shared styles
│   ├── header.css             # Sticky header + nav
│   ├── overmij.css            # "Over mij" (About) section
│   ├── testimonials.css       # Testimonials carousel
│   └── bottom-banner.css      # Footer
├── Javascript/
│   ├── carousel.js            # Rotates testimonials every 10s
│   └── scrolling.js           # Hides header on scroll-down, shows on scroll-up
└── Images/                    # Photos, logos, icons
```

### Page sections

1. **Header** — logo, nav links, LinkedIn + WhatsApp shortcuts
2. **Over mij** — short intro + Simon Sinek quote
3. **Diensten** — services offered (HR system implementation, optimisation, training)
4. **Testimonials** — auto-rotating carousel of client quotes
5. **HR Tech Review** — HRtechArena expert-panel profile
6. **Contact** — WhatsApp / LinkedIn / email + photo
7. **Footer** — logo link back to top

## Running locally

No build required. Open the page directly or serve the folder:

```bash
# Option 1: open in browser
open index.html

# Option 2: any static server (recommended — avoids file:// quirks)
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Deployment

Static hosting only — drop the folder on any static host (GitHub Pages, Netlify, Vercel, Azure Static Web Apps, plain S3).

## Contact

- Website owner: Christina van Hoekelen
- Email: office@christinaforhr.nl
- LinkedIn: [cvanhoekelen](https://www.linkedin.com/in/cvanhoekelen)
- HRtechArena profile: [christina-van-hoekelen](https://hrtecharena.nl/arena/christina-van-hoekelen/)
