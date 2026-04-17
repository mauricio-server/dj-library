# DJ Library — PRD

## ⚠️ SCOPE LOCK — FRONTEND-ONLY PROJECT
**This project is strictly frontend. No backend, no API, no database, no server logic will be implemented here.**
- All data stays fictional / static / localStorage-only
- Integrations, persistence, auth, scanners and matching engines are OUT of scope
- Main agent must NEVER propose or implement backend code, APIs, MongoDB models, or server endpoints
- Future backend work (if any) will be done in a different project/environment by the user

## Problem Statement
Static frontend (HTML/CSS/JS only — no backend) for a self-hosted DJ music library management app. Users must be able to preview browsing a music library, organizing metadata, importing "wanted lists" in `Artist - Track` format, and visualizing comparisons as HAVE / MISSING / POSSIBLE MATCH. Visual direction: modern, premium musical app inspired by Tunein-style dashboards.

## User Personas
- **Self-hosted DJ**: wants a dark, premium, musical-looking interface to manage thousands of tracks, compare setlists and organize crates for each gig.

## Core Requirements (static phase)
- 100% static HTML (no backend, no real API calls, no dynamic persistence besides localStorage for UI preferences)
- Sidebar + topbar consistent across pages
- Sidebar collapsible on desktop (icons-only when collapsed, with hover tooltips showing labels) AND on mobile (off-canvas drawer)
- Skin system (user choice): Neon (default), Electric, Nebula, Sunset, Matrix
- All pages follow a unified dark premium aesthetic
- Rich fake data covering House / Techno / Drum & Bass / Hip-Hop
- Tracks include album-art imagery (via picsum seed) + gradient fallback

## What's Been Implemented (2026-02-17)

### Pages (10)
- `dj-library.html` — Dashboard: 6 metric cards, quick actions, recent tracks table with album art, latest matches, top genres, tracks-per-decade chart, activity feed
- `tracks.html` — Library table with filters (genre/year/BPM/key/format), active filter chips, pagination, Table/Cards view toggle, album art in every row/card
- `wanted-list.html` — List name, large textarea, live counter (total + valid Artist-Track lines), "Valid Format" example block, projected preview, history table, preview modal
- `matches.html` — 4 status metric cards (total/have/missing/possible), 3 match-type examples (EXACT / CLEAN / FUZZY), filterable table with confidence bars, export button
- `genres.html` — Grid of 12 genre cards + distribution chart
- `crates.html` — Crate cards with 2×2 album-art mosaics
- `duplicates.html` — Metrics + table with multiple copies per track
- `widgets.html` — UI kit (buttons, badges, alerts, inputs, toggles, cards, tables, dropdowns, modals, loading, empty states, charts, pagination)
- `blank.html` — Reusable base layout placeholder
- `settings.html` — Skin picker (5 themes), library settings, matching rules, layout preferences
- `index.html` — Redirect to dashboard

### Shared Layout
- `/assets/css/main.css` — Design system (CSS variables for 5 skins, components)
- `/assets/js/layout.js` — Injects sidebar + topbar, handles sidebar collapse/mobile toggle, applies persisted skin
- `/assets/js/main.js` — Modals, dropdowns, wanted-list counter, skin picker, view toggles, shared renderers
- `/assets/js/data.js` — 52 tracks, 12 genres, 6 wanted-lists, 20 matches, 8 crates, 6 duplicates, activity feed, metrics

### Stack & Integration
- React app (`/app/frontend/src/App.js`) auto-redirects `/` to `/dj-library/dj-library.html`
- Static files served by CRA from `/app/frontend/public/dj-library/`
- Fonts: `Sora` (body) + `Manrope` (headings) — chosen for modern premium look
- Icons: inline SVG (Lucide-style), no external icon library loaded
- Album art: `picsum.photos` with stable seed per track + gradient fallback

### Skins available in Settings
- **Neon** (default) — Purple + Magenta
- **Electric** — Cyan + Blue
- **Nebula** — Purple + Cyan
- **Sunset** — Orange + Pink
- **Matrix** — Green + Lime

## Prioritized Backlog

### Frontend enhancements (the only things in scope here)
- Auto-switch Dark/Light based on `prefers-color-scheme` or time of day
- Search bar full interactivity (client-side filter across the static dataset)
- DnD reorder in crates (UI only, no persistence)
- More wanted-list templates / visual states (empty, error, large list)
- Shareable setlist preview page (static, read-only)

### OUT OF SCOPE (will NOT be built in this project)
- ❌ Backend of any kind (FastAPI, Node, etc.)
- ❌ MongoDB / database / persistence
- ❌ Real file scanners / ID3 readers
- ❌ Real matching engines (exact/clean/fuzzy)
- ❌ Authentication (JWT, OAuth, Google, etc.)
- ❌ Rekordbox/Traktor/Serato imports that require parsing
- ❌ Any API endpoint (`/api/...`)
- ❌ Player/audio playback logic
- ❌ Stripe, payments, subscriptions
