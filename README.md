# S.I Interiors website

Plain HTML, CSS and a small amount of JS. No build step: open `index.html` in a browser.

## Files
- `index.html`: all content, in section order (Header, Hero, Services, Projects, Accreditations, About, Contact, Footer)
- `css/styles.css`: design tokens at the top (colours, fonts, spacing), then the styles
- `js/main.js`: mobile menu, footer year, form guard
- `images/`: photos; `placeholder.svg` (and `hero-placeholder.svg` for the hero) are used until real photos are added
- `CHECKLIST.md`: what's still needed from you

## Editing
- **Text:** edit `index.html`. Anything still to fill is marked `[PLACEHOLDER ...]`. Search for `[PLACEHOLDER` to find them all.
- **Images:** save the photo in `images/` (or `images/projects/`), then change the `src` and `alt` on the `<img>`. Use 3:2 WebP files about 1200-1600px wide.
- **Logo carousel:** under the hero. Each `<li>` in the `logos` section is one logo: change `src`/`alt`, or copy an `<li>` to add more (8+ looks best). The loop is duplicated automatically by `js/main.js`; it stops moving for visitors who prefer reduced motion and pauses on hover. Delete the whole section if you have no logos to show.
- **Add a project:** copy one `<article class="card">` block inside the Projects section.
- **Accent colour:** change `--accent` and `--accent-dark` in `css/styles.css`. Also update the fill in `favicon.svg`.
- **Phone number:** search for `tel:+44XXXXXXXXXX` and replace it everywhere, then update the visible text.
- **Logo:** put `logo.svg` in `images/` and replace the `.logo-text` span in the header with an `<img>`.

## Enquiry form
The form posts to a form service, so it needs a real endpoint:
1. Sign up at formspree.io (or web3forms.com) and create a form.
2. Replace `https://formspree.io/f/PLACEHOLDER` in the `<form action>` with your endpoint.
3. Send a test enquiry.

Until then, the form shows a "not connected" message instead of sending.

## Fonts
Archivo (600) for headings and Inter (400, 600) for body text, loaded from Google Fonts with `display=swap`.
