# S.I Interiors website

Single-page marketing site for **S.I Interiors**, a Norfolk-based specialist fitter of **Trovex** products: hygienic PVC wall cladding and IPS (integrated plumbing system) panels. The site's job is to show they're a reliable, experienced fitting team and get contractors and facilities managers to call or send an enquiry.

Likely audience (unconfirmed): main contractors, schools, NHS trusts, care homes, commercial and leisure washrooms.

## Hard rules
- **Never invent content.** No accreditations, years trading, client names, project details, phone numbers or company details. Anything not supplied by the user is marked `[PLACEHOLDER: ...]` in the page.
- **British English** in all copy and comments.
- **Plain HTML/CSS with minimal JS.** No frameworks, no build step, no dependencies. The user must be able to edit text and swap images easily.
- **Mobile-first**, fast loading. Breakpoints at 640px and 960px.
- **No AI or stock imagery** in the finished site; real project photos only. Grey placeholders until then.
- Don't copy Trovex's structure or product range (this is a small local fitter, not a manufacturer). Don't use Trovex's or Elite's client logos, copy or images.
- Keep `CHECKLIST.md` and `README.md` in step with any change that adds something the user must supply or edit.

## Design direction
- Clean, solid, credible, aimed at people in the trade. Avoid anything that reads as luxury home interiors (no beige/stone palettes, thin display fonts, soft moody photos).
- One neutral base plus one accent colour. Tokens live at the top of `css/styles.css`. The accent (`--accent`, `--accent-dark`, also `favicon.svg`) is a **stand-in navy**, to be replaced with the colour from the real logo or van.
- Fonts: **Archivo 600** (headings) and **Inter 400/600** (body, 17px, 1.65 line height), from Google Fonts with `display=swap`. Max two typefaces and 2-3 weights. No serifs.
- Alternative if the real logo is condensed/industrial: Barlow 600 + Source Sans 3 (400/600). Decide once the logo is supplied.
- Visual references:
  - **trovex.com**: clear practical tone, sector-led framing, prominent contact details, and a slow logo strip under the hero.
  - **eliteinteriorsuk.com**: full-bleed hero photo with dark overlay and centred uppercase white text, solid plus outlined buttons, tagline under the logo, spaced uppercase nav.

## Page structure (`index.html`, in order)
1. **Header**: sticky; logo with tagline (desktop), anchor nav, phone button, mobile Menu toggle.
2. **Hero**: full-width cross-fading slideshow (`.hero-slides` > `.hero-slide` images), dark overlay (`--hero-overlay`), centred text in front: "Specialist fitters of Trovex hygienic wall cladding and IPS panels", sector line, **Send an enquiry** (solid) and **Call** (outlined) buttons.
3. **Logo carousel**: auto-scrolling strip directly under the hero, greyscale logos, fades out at both edges, pauses on hover.
4. **Services**: only two: hygienic PVC wall cladding and IPS panels. Each card has an **icon slot** (inline SVG, `currentColor`), not a photo, and *What it is / Where it's used / What fitting involves*.
5. **Projects**: 3-6 real jobs, each with photo, name, location, sector, one line on the work.
6. **Accreditations**: only schemes actually held, plus that they fit Trovex systems.
7. **About**: who they are, how long fitting (only if confirmed), area covered.
8. **Contact**: enquiry form (name, company, email, phone, project details) plus phone and email as large links.
9. **Footer**: contact, area covered, company details.

## File layout
```
index.html           all content
css/styles.css       tokens at top, then base, layout, components
js/main.js           mobile menu, logo carousel loop, footer year, form guard
images/              hero-sink.jpg, hero-window.jpg (real hero slideshow photos), placeholder.svg,
                      hero-placeholder.svg, logo-placeholder.svg, (later) more real photos
images/projects/     project photos
favicon.svg
CHECKLIST.md         everything the user still has to supply
README.md            how the user edits text, images, colours, form
.claude/launch.json  local preview server (python http.server, port 8080)
.gitignore           excludes Image/ (the user's drop folder for source photos, not the working images/ folder)
```

Git: a local repo exists on branch `main`, pushed to **github.com/jbartrum1001-maker/SI-INTERIORS** (public, remote `origin`). Commit and push as changes land unless the user asks to review diffs first.

## Behaviours worth knowing
- **Hero slideshow** (`js/main.js`): cross-fades between `.hero-slide` images every `HERO_INTERVAL` (6s) by toggling `.is-active` (opacity transition in CSS). No-op with one slide; skipped entirely under reduced motion. When testing changes to it in the browser pane, remember the stylesheet can go stale after a plain reload — bust it with a `?v=` query on the `<link>` href (or hard-restart the tab) before trusting a screenshot that looks wrong.
- **Logo carousel** (`js/main.js`): clones the logo `<li>`s until the track covers the viewport plus one full set, then loops by exactly one set (`--logos-shift`) at 50px/s (`SPEED`). Rebuilds on load and resize. It measures with the `.moving` class already applied, so don't remove that before measuring. Reduced-motion and no-JS users get a static wrapping row (no fade).
- **Form**: posts to a Formspree-style endpoint (`https://formspree.io/f/PLACEHOLDER`). Until a real endpoint is set, `main.js` blocks submission and shows "Form not connected yet". Has a `_gotcha` honeypot field.
- **Header** on mobile must not overflow: the long placeholder phone text broke it once, so keep the header phone label short.
- Repeated stand-ins to replace everywhere: `tel:+44XXXXXXXXXX` and `info@example.co.uk`.
- Find everything unfinished with a search for `[PLACEHOLDER`.
- **Image conversion**: no `magick`/`cwebp` on this machine. When the user drops a source photo (they use an `Image/` folder for these, gitignored), convert with PowerShell's `System.Drawing` (JPEG output, quality ~80) to hit the size targets in `CHECKLIST.md`, since real WebP export isn't available here. Check dimensions the same way before resizing/cropping guidance.

## Working process
- The user is gathering the missing information over time. **Build with placeholders, then work through `CHECKLIST.md` with them item by item**, ticking things off and replacing placeholders as facts arrive.
- Preview: run the `site` server from `.claude/launch.json` and open `http://localhost:8080/`. (`file://` doesn't load the CSS in the browser pane.) Check mobile width for horizontal overflow after layout changes.
- Node is available in the shell; Python is not on the PATH in Git Bash.
- Confirm items in the original brief still open: sectors named, which accreditations (CSCS, CHAS, etc.), Trovex approved-fitter status, logo and accent colour, form service.
