/* ============================================
   DJ LIBRARY — Page helpers (modals, dropdowns, skins, counters)
   ============================================ */

(function () {
  // Init on DOM ready for every page
  document.addEventListener('DOMContentLoaded', () => {
    initDropdowns();
    initModals();
    initWantedListCounter();
    initSkinPicker();
    initTrackViewToggle();
    initFilterChips();
  });

  // --- Dropdowns ---
  function initDropdowns() {
    document.querySelectorAll('[data-dropdown-toggle]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wrap = btn.closest('.dropdown');
        const isOpen = wrap.classList.contains('open');
        document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
        if (!isOpen) wrap.classList.add('open');
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    });
  }

  // --- Modals ---
  function initModals() {
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-modal-open');
        const modal = document.getElementById(id);
        if (modal) modal.classList.add('open');
      });
    });
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-backdrop');
        if (modal) modal.classList.remove('open');
      });
    });
    document.querySelectorAll('.modal-backdrop').forEach(bd => {
      bd.addEventListener('click', (e) => {
        if (e.target === bd) bd.classList.remove('open');
      });
    });
  }

  // --- Wanted list counter ---
  function initWantedListCounter() {
    const textarea = document.getElementById('wanted-textarea');
    const counter = document.getElementById('wanted-counter');
    const validCounter = document.getElementById('wanted-valid-counter');
    if (!textarea || !counter) return;
    const update = () => {
      const lines = textarea.value.split('\n').filter(l => l.trim().length > 0);
      const valid = lines.filter(l => /.+\s-\s.+/.test(l));
      counter.textContent = lines.length;
      if (validCounter) validCounter.textContent = valid.length;
    };
    textarea.addEventListener('input', update);
    update();
  }

  // --- Skin picker ---
  function initSkinPicker() {
    const cards = document.querySelectorAll('[data-skin-value]');
    if (cards.length) {
      const current = localStorage.getItem('djlib-skin') || 'neon';
      cards.forEach(c => c.classList.toggle('active', c.dataset.skinValue === current));
      cards.forEach(c => {
        c.addEventListener('click', () => {
          const v = c.dataset.skinValue;
          localStorage.setItem('djlib-skin', v);
          document.documentElement.dataset.skin = v;
          cards.forEach(x => x.classList.toggle('active', x.dataset.skinValue === v));
        });
      });
    }

    // --- Mode picker (dark/light) ---
    const modes = document.querySelectorAll('[data-mode-value]');
    if (modes.length) {
      const current = localStorage.getItem('djlib-mode') || 'dark';
      modes.forEach(c => c.classList.toggle('active', c.dataset.modeValue === current));
      modes.forEach(c => {
        c.addEventListener('click', () => {
          const v = c.dataset.modeValue;
          localStorage.setItem('djlib-mode', v);
          document.documentElement.dataset.mode = v;
          modes.forEach(x => x.classList.toggle('active', x.dataset.modeValue === v));
        });
      });
    }
  }

  // --- Track view toggle (table/cards) ---
  function initTrackViewToggle() {
    const btns = document.querySelectorAll('[data-view]');
    if (!btns.length) return;
    btns.forEach(b => {
      b.addEventListener('click', () => {
        const view = b.dataset.view;
        btns.forEach(x => x.classList.toggle('active', x.dataset.view === view));
        document.querySelectorAll('[data-view-panel]').forEach(p => {
          p.style.display = p.dataset.viewPanel === view ? '' : 'none';
        });
      });
    });
  }

  // --- Filter chips remove ---
  function initFilterChips() {
    document.addEventListener('click', (e) => {
      const x = e.target.closest('.chip .x');
      if (x) x.closest('.chip').remove();
    });
  }

  // --- Shared renderers ---
  window.DJRender = {
    trackRow(t, opts = {}) {
      const cover = window.coverUrl(t.id);
      const grad = window.coverClass(t.id);
      return `
        <tr data-testid="track-row-${t.id}">
          <td>
            <div class="track-cell">
              <div class="album-art ${grad}"><img src="${cover}" alt="" onerror="this.style.display='none'"/></div>
              <div class="track-info">
                <span class="track-title">${t.track}</span>
                <span class="track-artist">${t.artist}</span>
              </div>
            </div>
          </td>
          <td class="muted">${t.remix}</td>
          <td><span class="badge badge-neutral">${t.genre}</span></td>
          <td class="mono muted">${t.year}</td>
          <td class="mono">${t.bpm}</td>
          <td class="mono muted">${t.key}</td>
          <td><span class="badge badge-accent">${t.format}</span></td>
          <td class="mono muted">${t.duration}</td>
          <td>
            <div class="dropdown">
              <button class="icon-btn" data-dropdown-toggle aria-label="Actions">${DJ_ICONS.more()}</button>
              <div class="dropdown-menu">
                <div class="dropdown-item">${DJ_ICONS.play()}<span>Preview</span></div>
                <div class="dropdown-item">${DJ_ICONS.edit()}<span>Edit metadata</span></div>
                <div class="dropdown-item">${DJ_ICONS.folder()}<span>Add to crate</span></div>
                <div class="dropdown-sep"></div>
                <div class="dropdown-item" style="color: var(--missing)">${DJ_ICONS.trash()}<span>Remove</span></div>
              </div>
            </div>
          </td>
        </tr>
      `;
    },
    trackCard(t) {
      const cover = window.coverUrl(t.id);
      const grad = window.coverClass(t.id);
      return `
        <div class="track-card" data-testid="track-card-${t.id}">
          <div class="cover ${grad}"><img src="${cover}" alt="" onerror="this.style.display='none'"/></div>
          <div class="t-name">${t.track}</div>
          <div class="t-artist">${t.artist}</div>
          <div class="kit-row" style="margin-top:10px">
            <span class="badge badge-neutral">${t.genre}</span>
            <span class="badge badge-accent">${t.bpm} BPM</span>
          </div>
        </div>
      `;
    },
  };
})();
