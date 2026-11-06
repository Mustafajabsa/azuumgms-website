# Azuum GMS website

Bilingual (English / Arabic) marketing website for Azuum GMS, the garage management system.

## Pages

| File (in `docs/`) | Page |
|---|---|
| `index.html` | Home |
| `modules.html` | Modules |
| `workshop.html` | Workshop and job cards |
| `apps.html` | Staff app, customer app and white labeling |
| `onboarding.html` | Onboarding steps |
| `finance.html` | Finance and reports |
| `security.html` | Roles and security |
| `packages.html` | Packages |
| `contact.html` | Book a demo |

## Structure

- `site.css`: all styles (light and dark themes, right-to-left layout)
- `site.js`: language switch, theme, animations and interactive demos
- `img/`: app screenshots (WebP)
- `video/`: product video and poster

The site lives in the `docs/` folder, which GitHub Pages publishes. It is a static site with no build step: `docs/.nojekyll` tells GitHub Pages to serve the files as they are. To host it elsewhere, upload the contents of `docs/`, with `index.html` as the home page.

## Before launch

- The "Book a demo" form does not send anything yet. Connect it to your email or CRM in `site.js` (the `data-demo-form` handler).
- Add your contact email and phone number.
