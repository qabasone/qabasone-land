# QabasOne — Concept Landing Page

An original, light-only, bilingual (Arabic / English) landing page for QabasOne built with plain HTML, CSS, and JavaScript.

## View

Open `index.html` in a browser. For a local server, run this from the project directory:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Included

- `index.html` — semantic, SEO-aware homepage structure
- `styles.css` — full responsive visual design, CSS illustrations, reduced-motion support
- `app.js` — complete AR/EN translations, RTL/LTR toggle, mobile menu, interactive demo
- `assets/logo-mark.svg`, `assets/logo-mark-light.svg`, `assets/favicon.svg` — original conceptual QabasOne brand marks
- `assets/underline.svg` — custom editorial signature stroke
- `assets/og-cover.svg` — share-card artwork

No frameworks, bundlers, paid assets, trackers, or third-party JavaScript. Google Fonts are loaded at runtime, with system font fallbacks if offline.

## Customization

- Main application CTA: currently `https://app.qabas.one`. Update the three links if needed.
- All bilingual copy: edit the `translations` object in `app.js`.
- Colors/typographic sizing: edit the design variables at the top of `styles.css`.
- Concept brand mark: replace the original placeholder SVGs with an official logo when available.
- The workflow demo and hero illustration are **illustrative** and intentionally contain no fabricated customer numbers, business metrics, testimonials, or product screenshots.

## Note

This is a marketing design concept based on QabasOne's connected business operations (sales, purchases, inventory, collections). Review marketing positioning and feature claims before publishing. The contact/signup CTA was deliberately not invented; the current primary link opens the actual app URL.
