<div align="center">

# 🎧 DJ Library

**A self-hosted music library manager built for DJs.**

Organize your local collection, import external tracklists, and instantly see what you own, what's missing, and what might be a close match — all in a premium, music-first interface.

![Status](https://img.shields.io/badge/status-static_frontend-blueviolet)
![Phase](https://img.shields.io/badge/phase-1_of_5-ff006e)
![License](https://img.shields.io/badge/license-MIT-blue)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-f7df1e)

</div>

---

## Table of Contents

- [Vision](#vision)
- [Screenshots](#screenshots)
- [Current Phase](#current-phase)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Vision

DJs manage thousands of tracks across dozens of gigs, setlists and genres. The tools available today are either proprietary (Rekordbox, Serato, Traktor), heavily tied to a single hardware ecosystem, or miss the one thing DJs actually need before a set: **"Do I already own these tracks?"**

**DJ Library** is designed to be:

- **Self-hosted** — your library stays on your machine.
- **Format-agnostic** — works with MP3, FLAC, WAV, AIFF, M4A and OGG.
- **Setlist-aware** — paste any tracklist in `Artist - Track` format and instantly see what you have, what's missing, and what might be a close match.
- **Fast & quiet** — no cloud accounts, no telemetry, no ads.

The product is being built **frontend-first** and **UX-first**: we nail the interface and user flow before adding any server, database or matching engine.

---

## Screenshots

> 📸 **Coming soon.** Screenshots will be added once the visual direction reaches v1.0. For now you can explore the static pages locally — see [Getting Started](#getting-started).

The static frontend includes:

| Page              | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| Dashboard         | Library metrics, recent activity, quick actions              |
| Tracks            | Rich table/cards view with filters, search and pagination    |
| Wanted Lists      | Paste `Artist - Track` lists, preview, import & compare      |
| Matches           | Have / Missing / Possible Match results with confidence bars |
| Genres            | Genre grid and distribution chart                            |
| Crates            | Visual crate cards with album-art mosaics                    |
| Duplicates        | Tracks detected with multiple copies                         |
| Widgets (UI Kit)  | Reusable components powering every screen                    |
| Settings          | Dark/Light mode · 5 color skins · library preferences        |
| Blank             | Reusable base layout for future features                     |

---

## Current Phase

> ### 🚧 Phase 1 — Static Frontend (in progress)
>
> The project is currently **100% frontend**. Pages are implemented in plain HTML, CSS and vanilla JavaScript.
>
> **What this phase is for:**
> - Validating the overall layout, navigation and visual direction
> - Prototyping every screen a DJ will touch before writing backend code
> - Producing a reusable design system (skins, modes, components)
>
> **What is _not_ implemented yet:**
> - No backend API
> - No database
> - No real file scanner
> - No real matching engine
> - All data on screen is fictional (static JS objects)
>
> Once the UX is locked, development moves to **Phase 2** (see [Roadmap](#roadmap)).

---

## Features

### ✅ Available now (static frontend)

- **Dashboard** with metric cards, recent tracks, latest matches, top genres and activity feed
- **Tracks library** with:
  - Search bar
  - Filters for genre, year, BPM, key and format
  - Active filter chips
  - Table view and card view (toggle)
  - Album art on every row/card
  - Pagination UI
- **Wanted Lists**:
  - Named list input
  - Multi-line textarea with live line counter and valid-line counter
  - `Artist - Track` format example
  - Preview modal
  - History of previous lists
- **Matches** view:
  - Summary cards (Total / Have / Missing / Possible)
  - Confidence score bars per row
  - Examples of the 3 match types (exact, clean, fuzzy)
  - Filter and search
- **Genres**, **Crates**, **Duplicates** pages with fake-but-realistic data
- **Widgets** — UI kit page (buttons, badges, alerts, inputs, toggles, cards, tables, dropdowns, modals, charts, pagination, empty states, loading)
- **Settings**:
  - **Mode**: Dark (default) / Light
  - **Skins**: Neon, Electric, Nebula, Sunset, Matrix
  - Preferences stored locally via `localStorage`
- **Responsive sidebar**:
  - Collapsible on desktop (icons-only with hover tooltips)
  - Off-canvas drawer on mobile

### 🔜 Planned (future phases)

- Recursive local folder scanner
- Metadata extraction from audio files
- Real 3-tier matching engine (exact / clean / fuzzy)
- Persistence of tracks, wanted lists and match results
- CSV / JSON / Rekordbox-XML export of match results
- BPM & key analysis, duplicate detection
- Crates, smart crates and genre analytics

> Detailed plan is in the [Roadmap](#roadmap).

---

## Tech Stack

### Current (Phase 1 — static frontend)

| Layer        | Technology                                                   |
| ------------ | ------------------------------------------------------------ |
| Markup       | HTML5                                                        |
| Styles       | Plain CSS with CSS variables (5 skins × 2 modes)             |
| Scripting    | Vanilla JavaScript (ES6+)                                    |
| Fonts        | [Sora](https://fonts.google.com/specimen/Sora) + [Manrope](https://fonts.google.com/specimen/Manrope) |
| Icons        | Inline SVG (Lucide-style)                                    |
| Placeholders | `picsum.photos` for album-art previews                       |
| Persistence  | `localStorage` (UI preferences only)                         |

No build step. No bundler. No framework.

### Planned (Phase 2+)

| Layer           | Planned Technology                                      |
| --------------- | ------------------------------------------------------- |
| Language        | Python 3.12                                             |
| Web Framework   | FastAPI                                                 |
| ORM             | SQLAlchemy (or SQLModel)                                |
| Database        | PostgreSQL                                              |
| Metadata        | [Mutagen](https://mutagen.readthedocs.io/)              |
| Fuzzy Matching  | [RapidFuzz](https://maxbachmann.github.io/RapidFuzz/)   |
| Infra           | Docker + docker-compose                                 |
| Static hosting  | Same FastAPI app serves the `/dj-library` frontend      |

---

## Architecture

### Target architecture (Phase 2+)

```
┌──────────────────────────────────────────────────────────────┐
│                         User Browser                         │
│            (loads /dj-library/*.html from FastAPI)           │
└───────────────────────────┬──────────────────────────────────┘
                            │ HTTPS
┌───────────────────────────┴──────────────────────────────────┐
│                        FastAPI service                       │
│  ┌─────────────┐   ┌─────────────┐   ┌───────────────────┐   │
│  │   Scanner   │   │   Matching  │   │   REST API /api   │   │
│  │  (Mutagen)  │   │ (RapidFuzz) │   │  tracks, wanted…  │   │
│  └──────┬──────┘   └──────┬──────┘   └─────────┬─────────┘   │
└─────────┼─────────────────┼─────────────────── ┼─────────────┘
          │                 │                    │
          ▼                 ▼                    ▼
  ┌───────────────┐  ┌───────────────┐  ┌──────────────────┐
  │  /music dir   │  │   PostgreSQL  │  │ wanted_items     │
  │ (mp3/flac/…)  │  │  (tracks,     │  │ match_results    │
  └───────────────┘  │   crates,     │  └──────────────────┘
                     │   wanted_*)   │
                     └───────────────┘
```

### Planned database schema

| Table            | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `tracks`         | Indexed tracks with metadata (artist, title, BPM, key, year, format, path…) |
| `wanted_lists`   | User-imported setlists / wishlists                   |
| `wanted_items`   | Individual `Artist - Track` lines in a list          |
| `match_results`  | Resolution of each wanted item → `have` / `missing` / `possible` with confidence score |

### Planned scanner behavior

- Recursive walk of `/music`
- Supported formats: `.mp3`, `.flac`, `.m4a`, `.aiff`, `.wav`, `.ogg`
- Metadata read via Mutagen
- Incremental updates (watch mode)
- Optional audio-hash based duplicate detection

### Planned matching engine

Three tiers, in order of priority:

1. **Exact match** — identical `Artist - Track` after trimming and case-folding.
2. **Clean match** — same after normalization (articles, punctuation, parentheses, accents).
3. **Fuzzy match** — RapidFuzz similarity above a configurable threshold.

Each result carries a confidence score (0–100) and is classified as:

- `have` — high-confidence match present in the library
- `possible` — fuzzy match above threshold, needs human review
- `missing` — no candidate above threshold

---

## Folder Structure

```
dj-library/
├── frontend/
│   └── public/
│       └── dj-library/                  ← static frontend lives here
│           ├── index.html               ← redirects to dashboard
│           ├── dj-library.html          ← dashboard
│           ├── tracks.html              ← library table/cards
│           ├── wanted-list.html         ← import setlists
│           ├── matches.html             ← comparison results
│           ├── genres.html              ← genre grid + distribution
│           ├── crates.html              ← crate mosaics
│           ├── duplicates.html          ← duplicate detector UI
│           ├── widgets.html             ← UI kit / component library
│           ├── blank.html               ← reusable base layout
│           ├── settings.html            ← mode + skin picker + prefs
│           └── assets/
│               ├── css/
│               │   └── main.css         ← design system + themes
│               └── js/
│                   ├── layout.js        ← sidebar + topbar injector
│                   ├── main.js          ← dropdowns, modals, skins, modes
│                   └── data.js          ← fictional dataset (tracks, genres…)
│
├── backend/                             ← Phase 2+ (not implemented yet)
├── docker/                              ← Phase 2+ (not implemented yet)
├── README.md
└── LICENSE
```

> 🔒 **Scope note:** the `backend/` and `docker/` directories are reserved for later phases. During Phase 1 the entire project is frontend-only.

---

## Getting Started

### Requirements

- Any modern browser (Chrome, Firefox, Safari, Edge)
- Optional: a local static file server if you want to avoid `file://` quirks

### Option 1 — open directly

Clone the repo and open `frontend/public/dj-library/dj-library.html` in your browser.

```bash
git clone https://github.com/<your-user>/dj-library.git
cd dj-library
open frontend/public/dj-library/dj-library.html      # macOS
# or:
xdg-open frontend/public/dj-library/dj-library.html  # Linux
# or just drag the file into your browser window
```

### Option 2 — serve locally (recommended)

A simple static server gives you proper URL routing and cleaner console output.

With Python 3:

```bash
cd frontend/public
python -m http.server 8080
# then open:
#   http://localhost:8080/dj-library/dj-library.html
```

With Node:

```bash
cd frontend/public
npx serve .
```

### Navigating the app

- Navigate through the left sidebar to visit every page.
- Try **Settings** to switch between **Dark / Light** modes and the five color skins.
- Collapse the sidebar via the toggle button (desktop) or the hamburger icon (mobile).

No environment variables, build step or install command are required during Phase 1.

---

## Roadmap

| Phase | Focus                                     | Status             |
| ----- | ----------------------------------------- | ------------------ |
| **1** | Static frontend, UX & design system       | 🟢 In progress     |
| **2** | FastAPI backend scaffold + REST endpoints | ⚪ Planned         |
| **3** | PostgreSQL integration + scanner (Mutagen)| ⚪ Planned         |
| **4** | Matching engine (exact / clean / fuzzy)   | ⚪ Planned         |
| **5** | Advanced features (BPM, key, crates, analytics, duplicate cleanup) | ⚪ Planned |

### Phase 1 — Static Frontend (current)

- [x] Design system (tokens, typography, icons)
- [x] Dashboard page
- [x] Tracks library (table + cards)
- [x] Wanted Lists
- [x] Matches view with confidence scores
- [x] Widgets / UI kit page
- [x] Genres, Crates, Duplicates pages
- [x] Settings with Dark/Light + 5 skins
- [x] Responsive + collapsible sidebar
- [ ] Real screenshots in README
- [ ] Visual polish pass

### Phase 2 — Backend Scaffold

- [ ] FastAPI project skeleton
- [ ] REST endpoints for `tracks`, `wanted_lists`, `wanted_items`, `match_results`
- [ ] Docker + docker-compose dev environment
- [ ] Static frontend served by FastAPI

### Phase 3 — Database & Scanner

- [ ] PostgreSQL schema + migrations
- [ ] SQLAlchemy/SQLModel models
- [ ] Recursive scanner of `/music`
- [ ] Metadata extraction via Mutagen
- [ ] Incremental / watch-mode updates

### Phase 4 — Matching Engine

- [ ] Exact matcher
- [ ] Normalization pipeline (clean matcher)
- [ ] Fuzzy matcher (RapidFuzz) with configurable thresholds
- [ ] Batch comparison API
- [ ] CSV / JSON export of results

### Phase 5 — Advanced Features

- [ ] BPM & musical key analysis
- [ ] Duplicate detection (metadata + optional audio hash)
- [ ] Crates & smart crates
- [ ] Rekordbox / Traktor / Serato import/export
- [ ] Analytics (by decade, genre, BPM range)

---

## Contributing

> Contribution guidelines will be finalized once Phase 2 begins.

For now, feedback on UX, accessibility and design direction is highly welcome:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-suggestion`.
3. Commit your changes with a clear message.
4. Open a Pull Request describing what you changed and why.

For bug reports, please open an issue including:
- Browser & OS
- Steps to reproduce
- Expected vs actual behavior
- Screenshot if possible

---

## License

MIT — see [LICENSE](./LICENSE).

---

<div align="center">

Built for the love of crate digging. 🎛️

</div>
