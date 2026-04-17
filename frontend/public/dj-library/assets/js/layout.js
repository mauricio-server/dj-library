/* ============================================
   DJ LIBRARY — Layout (sidebar + topbar injector)
   ============================================ */

(function () {
  const NAV = {
    Principal: [
      { id: 'dashboard', label: 'Dashboard',     href: 'dj-library.html',  icon: iconHome },
      { id: 'tracks',    label: 'Tracks',        href: 'tracks.html',      icon: iconMusic, badge: '4.8K' },
      { id: 'wanted',    label: 'Wanted Lists',  href: 'wanted-list.html', icon: iconList },
      { id: 'matches',   label: 'Matches',       href: 'matches.html',     icon: iconTarget, badge: '147' },
    ],
    'Organização': [
      { id: 'genres',     label: 'Genres',      href: 'genres.html',     icon: iconTag },
      { id: 'crates',     label: 'Crates',      href: 'crates.html',     icon: iconFolder },
      { id: 'duplicates', label: 'Duplicates',  href: 'duplicates.html', icon: iconCopy },
    ],
    Sistema: [
      { id: 'widgets',  label: 'Widgets',     href: 'widgets.html',  icon: iconLayers },
      { id: 'blank',    label: 'Blank Page',  href: 'blank.html',    icon: iconSquare },
      { id: 'settings', label: 'Settings',    href: 'settings.html', icon: iconSettings },
    ],
  };

  // SVG icon builders (Lucide-inspired)
  function svg(path, stroke = 'currentColor') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  }
  function iconHome()   { return svg('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/>'); }
  function iconMusic()  { return svg('<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'); }
  function iconList()   { return svg('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>'); }
  function iconTarget() { return svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'); }
  function iconTag()    { return svg('<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1.5"/>'); }
  function iconFolder() { return svg('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'); }
  function iconCopy()   { return svg('<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'); }
  function iconLayers() { return svg('<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'); }
  function iconSquare() { return svg('<rect x="3" y="3" width="18" height="18" rx="2"/>'); }
  function iconSettings(){return svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 0 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9V9a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 0 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>'); }

  // Extra topbar icons
  window.DJ_ICONS = {
    menu:   () => svg('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>'),
    sidebar:() => svg('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>'),
    search: () => svg('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
    bell:   () => svg('<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>'),
    play:   () => svg('<polygon points="5 3 19 12 5 21 5 3"/>'),
    plus:   () => svg('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'),
    upload: () => svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>'),
    download:()=> svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'),
    refresh:()=> svg('<polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>'),
    check:  () => svg('<polyline points="20 6 9 17 4 12"/>'),
    x:      () => svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
    zap:    () => svg('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
    trendUp:() => svg('<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>'),
    trendDown:()=>svg('<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>'),
    filter: () => svg('<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>'),
    grid:   () => svg('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>'),
    table:  () => svg('<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/>'),
    more:   () => svg('<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>'),
    edit:   () => svg('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>'),
    trash:  () => svg('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),
    chevL:  () => svg('<polyline points="15 18 9 12 15 6"/>'),
    chevR:  () => svg('<polyline points="9 18 15 12 9 6"/>'),
    chevD:  () => svg('<polyline points="6 9 12 15 18 9"/>'),
    sun:    () => svg('<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'),
    moon:   () => svg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
    headphones:()=> svg('<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>'),
    folder: iconFolder,
    music:  iconMusic,
    settings: iconSettings,
    list:   iconList,
  };

  // Render sidebar
  function renderSidebar(activeId) {
    const groups = Object.entries(NAV).map(([group, items]) => {
      const itemsHtml = items.map(it => `
        <a href="${it.href}" class="nav-item ${it.id === activeId ? 'active' : ''}" data-label="${it.label}" data-testid="nav-${it.id}">
          <span class="nav-icon">${it.icon()}</span>
          <span class="nav-label">${it.label}</span>
          ${it.badge ? `<span class="nav-badge">${it.badge}</span>` : ''}
        </a>
      `).join('');
      return `
        <div class="nav-group">
          <div class="nav-group-label">${group}</div>
          ${itemsHtml}
        </div>
      `;
    }).join('');

    return `
      <div class="sidebar-brand">
        <div class="logo">
          ${DJ_ICONS.headphones()}
        </div>
        <div class="brand-text">
          <div class="brand-name">DJ Library</div>
          <div class="brand-tag">v0.1 · static</div>
        </div>
      </div>
      <nav class="sidebar-nav">${groups}</nav>
      <div class="sidebar-footer">
        <div class="user-card" data-testid="user-card">
          <div class="user-avatar">DJ</div>
          <div class="user-meta">
            <div class="user-name">DJ Producer</div>
            <div class="user-plan">Self-Hosted</div>
          </div>
        </div>
      </div>
    `;
  }

  // Render topbar
  function renderTopbar({ title, crumb, actions }) {
    return `
      <button class="icon-btn mobile-only" id="mobile-open" data-testid="mobile-menu-btn" aria-label="Menu">${DJ_ICONS.menu()}</button>
      <button class="topbar-toggle desktop-only" id="sidebar-toggle" data-testid="sidebar-toggle" aria-label="Toggle sidebar">${DJ_ICONS.sidebar()}</button>
      <div class="topbar-title">
        <div class="crumb">${crumb || 'DJ Library'}</div>
        <h1>${title}</h1>
      </div>
      <div class="topbar-search desktop-only">
        <span class="search-icon">${DJ_ICONS.search()}</span>
        <input type="text" placeholder="Search tracks, artists, wanted lists…" data-testid="global-search" />
        <span class="kbd">⌘K</span>
      </div>
      <div class="topbar-actions">
        ${actions || `
          <button class="icon-btn" data-testid="notifications-btn" aria-label="Notifications">
            ${DJ_ICONS.bell()}<span class="dot"></span>
          </button>
          <button class="btn btn-primary desktop-only" data-testid="topbar-import-btn" onclick="location.href='wanted-list.html'">
            ${DJ_ICONS.plus()}<span>New List</span>
          </button>
        `}
      </div>
    `;
  }

  // Apply skin from localStorage
  function applySkin() {
    const skin = localStorage.getItem('djlib-skin') || 'neon';
    document.documentElement.dataset.skin = skin;
  }

  // Mount layout
  window.DJLayout = {
    mount({ active, title, crumb, actions }) {
      applySkin();
      const sidebar = document.getElementById('sidebar');
      const topbar = document.getElementById('topbar');
      if (sidebar) sidebar.innerHTML = renderSidebar(active);
      if (topbar) topbar.innerHTML = renderTopbar({ title, crumb, actions });

      // Sidebar collapse state from localStorage (desktop)
      const collapsed = localStorage.getItem('djlib-sidebar-collapsed') === '1';
      const app = document.querySelector('.app');
      if (collapsed && app) app.classList.add('collapsed');

      // Toggle desktop
      const toggleBtn = document.getElementById('sidebar-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          app.classList.toggle('collapsed');
          localStorage.setItem('djlib-sidebar-collapsed', app.classList.contains('collapsed') ? '1' : '0');
        });
      }

      // Mobile open
      const mobileBtn = document.getElementById('mobile-open');
      const sidebarEl = document.querySelector('.sidebar');
      const overlay = document.querySelector('.mobile-overlay');
      if (mobileBtn && sidebarEl && overlay) {
        const close = () => { sidebarEl.classList.remove('mobile-open'); overlay.classList.remove('open'); };
        mobileBtn.addEventListener('click', () => {
          sidebarEl.classList.add('mobile-open');
          overlay.classList.add('open');
        });
        overlay.addEventListener('click', close);
        sidebarEl.querySelectorAll('.nav-item').forEach(a => a.addEventListener('click', close));
      }
    },
    applySkin,
    icons: () => window.DJ_ICONS,
  };
})();
