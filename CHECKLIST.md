# S.I Interiors: content checklist

Tick items off as they're supplied. Search the site files for `[PLACEHOLDER` to find every spot still to fill.
Rule: nothing here is invented. If it isn't confirmed, it stays a placeholder or is removed.

## 1. Business facts
- [ ] Phone number (header, hero, contact, footer; `tel:+44XXXXXXXXXX` appears in several places)
- [ ] Email address (contact, footer; `info@example.co.uk` is a stand-in)
- [ ] Area covered (Norfolk towns and any neighbouring counties)
- [ ] Years fitting / trading (use only if confirmed, otherwise delete the line)
- [ ] Company name, number, registered address, VAT number (footer)
- [ ] Response-time promise for enquiries (or remove the line)

## 2. Clients and sectors
- [ ] Which sectors to name (contractors, schools, NHS trusts, care homes, commercial washrooms, leisure)
- [ ] Hero line and sector tags updated to match

## 3. Accreditations
- [ ] Which schemes they actually hold (CSCS, CHAS, others)
- [ ] Badge logos or certificate references, if usable
- [ ] Trovex status: approved/authorised fitter, or just "fit Trovex systems"
- [ ] Insurance / RAMS / references-on-request line (only if true)

## 4. Brand
- [ ] Logo file (SVG or PNG) to replace the text logo in the header
- [ ] Accent colour from logo or van (edit `--accent` and `--accent-dark` in `css/styles.css`; also `favicon.svg`)
- [ ] Re-check font pairing against the real logo (alternative: Barlow + Source Sans 3)

## 5. Copy
- [ ] Hero text
- [ ] About text (who they are, 2-3 sentences)
- [ ] Wall cladding: what it is / where it's used / what fitting involves
- [ ] IPS panels: what it is / where it's used / what fitting involves
- [ ] Meta description (`<head>` of index.html)

## 6. Photos (real ones only; export as WebP, about 1200-1600px wide, 3:2)
- [x] Hero slideshow photos: `images/hero-sink.jpg` and `images/hero-window.jpg` in place, cross-fading every 6s. Add more by copying a `<img class="hero-slide">` in index.html
- [ ] Service icons for wall cladding and IPS panels (inline SVG, single colour; slots marked `[PLACEHOLDER] ICON` in the Services section)
- [ ] Wall cladding photo
- [ ] IPS panel photo
- [ ] About photo (team or van)
- [ ] Projects: 3-6 jobs, each with photo, name, location, sector and one line on the work
- [ ] Permission from clients/sites to show each project
- [ ] Logo carousel: logos of companies actually worked for, with permission to show them (transparent PNG/SVG, about 400px wide) and a heading line, or delete the section

## 7. Form and launch
- [ ] Choose form service (Formspree or Web3Forms) and paste endpoint into the form `action`
- [ ] Send a test enquiry and confirm it arrives
- [ ] Privacy policy (if needed for the form)
- [ ] Domain and hosting
- [ ] Final check on mobile and a search for any remaining `[PLACEHOLDER`
