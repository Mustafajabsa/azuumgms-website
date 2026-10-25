# AzzumGMS — website

A fully implemented, responsive, English/Arabic marketing website with an **interactive five-stage job-card demo**, CSS 3D interactive automotive hero, illustrated vehicle, guide lines, transitions, dashboard visuals, feature tabs, accordion FAQ and working demo-request API. Works without an npm install or third-party JavaScript dependencies.

## Run

Requires Node.js 18 or later:

```bash
npm start
```

Open **http://localhost:4173** in your browser. To change the port:

```bash
PORT=8080 npm start
```

On Windows PowerShell:

```powershell
$env:PORT=8080; npm start
```

You can also open `index.html` for a static visual preview, but **the demo form needs the Node server** to save requests.

## Website features

- Original navy/mint design with 3D CSS perspective scene and custom vector automotive artwork
- Full English/Arabic text and RTL layout toggle; language preference stored locally
- Hero, capability showcase tabs, five-stage interactive garage workflow, animated sample dashboard, customer-segment cards, CTA, FAQ and demo form
- Responsive desktop, tablet and mobile layouts
- Accessible button/tab states, keyboard navigation, form labels and reduced-motion support
- Zero runtime dependencies or build step
- Working lead submission endpoint: `POST /api/demo-requests`
- Submissions saved to `server/data/requests.jsonl` (one JSON record per line, ignored by git)
- Server-side field validation, hidden honeypot, basic hourly per-IP rate limiting, static path restrictions

### Demo form / deployment note

Requests are **persisted locally** under `server/data/requests.jsonl`; they are *not* sent via email or an external CRM. For production, configure persistent storage, backups, SMTP/CRM notifications, CSRF/origin controls, proxy-aware rate limiting, a privacy notice and your real domain's security and analytics policies. Do not deploy the default JSONL storage on ephemeral hosts expecting durability.

## Integration with existing React/Django SaaS

This is intentionally a standalone marketing application to avoid modifying the existing AzzumGMS product without repository access. Options:

1. Serve the marketing site at `www.your-domain` and the SaaS at `app.your-domain`.
2. Convert `app.js` sections into React components later if you prefer one frontend repository.
3. Replace `POST /api/demo-requests` with an authenticated/validated Django REST endpoint, using Django's CSRF configuration and data storage.

## What is illustrative

The website's 3D vehicle illustration, workflow state transitions, on-page dashboard figures, and cards are **interactive design demonstrations**, not live customer data. Pricing, performance claims, customer testimonials and business contact details are intentionally omitted because they have not been supplied.

## Key files

- `index.html` — HTML, meta and accessibility
- `styles.css` — complete visual design and responsive layouts
- `app.js` — bilingual content, visual sections and interactions
- `assets/automotive.svg` — original vector car illustration
- `assets/grid.svg` — technical grid asset
- `server.js` — Node static site and form submission API
