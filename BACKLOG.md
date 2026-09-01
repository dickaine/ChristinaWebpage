# Backlog

Open items for christinaforhr.nl. Everything here needs either input from Christina or a decision — the code marks the input-blocked ones with `TBD:` comments in [index.html](index.html).

## Blocked on Christina's input

- [ ] **Cal.com / Calendly URL** — used in three places: header CTA, hero CTA, and the contact-section embed (currently a disabled placeholder button). Replace the `TBD` hrefs and swap the placeholder for the real embed.
- [ ] **Indicative pricing** for the three Diensten cards — all show "op aanvraag" until Christina confirms price ranges.
- [ ] **Case-study outcome numbers** — KPN (number of platforms/employees migrated) and VU (new hires per year, lead-time reduction) results are qualitative until verified.
- [ ] **KvK number** in the footer.

## Photos to update

All current photos are placeholders or reused shots; replace with a consistent, recent set:

- [ ] **Hero photo** — brief asks for an environmental shot (whiteboard / laptop / workshop) instead of the reused studio portrait.
- [ ] **Over mij photo** (`Images/Over mij image.jpeg`) — replace with a recent portrait matching the new editorial style.
- [ ] **Diensten image** (`Images/Diensten image.jpg`) — generic stock conference room; replace with a real working shot or drop it.
- [ ] **Contact photo** (`Images/Contact foto.jpg`) — refresh alongside the other photography.
- [ ] **HRtechArena review image** (`Images/Christina_van_Hoekelen_HRTech_Review.png`) — check it still matches her current profile on hrtecharena.nl.
- [ ] Shoot in one session for consistent light/tone; export web-sized (≤ 1600px, compressed) instead of camera originals.

## Decisions / build work

- [ ] **Hosting** — the site is not deployed anywhere yet. GitHub Pages is the zero-cost option for this repo; then point the christinaforhr.nl domain at it.
- [ ] **Newsletter ESP** — the form has an empty `action`; pick a provider (Mailchimp / Buttondown / Beehiiv) and wire it up.
- [ ] **Mobile navigation** — below 760px the primary nav is hidden entirely (only the CTA remains). If nav on mobile is wanted, build a slide-out or stacked menu.
- [ ] **Favicon** — currently a WhatsApp photo JPEG; replace with a proper icon (e.g. a "C" monogram in the accent orange).

## Nice to have

- [ ] **Colored logos in dark mode** — client logos are muted/inverted on the dark theme so dark logo text stays visible; showing original colors on small light chips is the alternative.
- [ ] **Image filename cleanup** — several files contain spaces (`Contact foto.jpg`, `Diensten image.jpg`, `WhatsApp Image 2024-04-15 at 12.33.25.jpeg`); URLs `%20`-encode fine, rename only alongside other work.
- [ ] **Logo strip ordering** — the "Gewerkt voor" carousel is in the order logos were added; consider leading with the biggest names (Starbucks, CERN, KPN).
- [ ] **Boon Edam context** — in the logo strip only; not on Christina's LinkedIn (experience there stops at 2014), so no case/testimonial material available yet.
