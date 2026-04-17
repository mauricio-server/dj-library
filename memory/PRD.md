# DJ Library — PRD

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

### P0 — Backend integration (future phase)
- File scanner / indexer (scan folders, read ID3)
- Real CRUD on tracks / crates / wanted-lists / matches
- Real matching engine (exact / clean / fuzzy with configurable thresholds)

### P1
- Authentication (JWT or Emergent-managed auth)
- Import from Rekordbox / Traktor / Serato XML
- Export Matches / Wanted Lists as CSV, JSON, Rekordbox XML
- Multi-user / shared libraries

### P2
- Waveform preview player
- Smart crates (rules-based)
- Public set-list sharing page
- DnD reordering of crates and tracks
