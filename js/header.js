/* header.js - inject site header and manage theme + auth links */
function applyThemeFromStorage() {
  const t = localStorage.getItem('theme');
  if (t === 'dark') document.body.classList.add('dark'); else document.body.classList.remove('dark');
}

function renderHeader() {
  const el = document.getElementById('site-header');
  const u = auth.getCurrentUser();
  el.innerHTML = `
    <header class="header">
      <div class="brand"><a href="/index.html">Fitness</a></div>
      <nav>
        <a href="/index.html">Home</a>
        <a href="/pages/workouts.html">Workouts</a>
        <a href="/pages/sports.html">Sports</a>
        <a href="/pages/diet.html">Diet</a>
        <a href="/pages/about.html">About</a>
        <a href="/pages/dashboard.html">Dashboard</a>
      </nav>
      <div class="auth-area">
        <button id="theme-toggle" class="btn" title="Toggle theme">🌓</button>
        ${u ? `
          <div class="profile-wrapper">
            <button id="profile-btn" class="avatar-btn" aria-haspopup="true" aria-expanded="false" title="Open profile">
              <img id="header-avatar" src="${u.photo || '/assets/images/avatar-placeholder.svg'}" alt="Profile" />
            </button>
            <div id="profile-menu" class="dropdown" role="menu" aria-hidden="true">
              <div class="profile-card">
                <img class="profile-card-img" src="${u.photo || '/assets/images/avatar-placeholder.svg'}" alt="avatar" />
                <div class="profile-info"><strong>${u.name || u.email}</strong><div class="muted small">${u.email}</div>
                  <div class="profile-stats small muted">Streak: <span id="hdr-streak">-</span> • Favorites: <span id="hdr-fav">-</span></div>
                </div>
              </div>
              <div class="menu-actions">
                <a class="menu-link" href="/pages/profile.html">View Profile</a>
                <a class="menu-link" href="/pages/profile.html#edit">Edit Profile</a>
                <button class="menu-link" id="menu-logout-1">Logout</button>
              </div>
            </div>
          </div>
          <div class="settings-wrapper">
            <button id="settings-btn" class="btn ghost" aria-haspopup="true" aria-expanded="false" title="Open settings">⚙️</button>
            <div id="settings-menu" class="dropdown" role="menu" aria-hidden="true">
              <button class="menu-link" id="settings-theme">Toggle Theme</button>
              <a class="menu-link" href="/pages/settings.html">Settings</a>
              <button class="menu-link" id="menu-logout-2">Logout</button>
            </div>
          </div>` : `<a class="btn" href="/login.html">Login</a> <a class="btn" href="/signup.html">Signup</a>`}
      </div>
    </header>`;

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.setAttribute('aria-label','Toggle theme');
    themeBtn.setAttribute('role','button');
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const now = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', now);
      themeBtn.setAttribute('aria-pressed', document.body.classList.contains('dark'));
    });
    // set initial aria-pressed
    themeBtn.setAttribute('aria-pressed', document.body.classList.contains('dark'));
  }

  // profile menu behaviour
  const profileBtn = document.getElementById('profile-btn');
  const profileMenu = document.getElementById('profile-menu');
  if (profileBtn && profileMenu) {
    function closeProfile(){ profileMenu.classList.remove('open'); profileMenu.setAttribute('aria-hidden','true'); profileBtn.setAttribute('aria-expanded','false'); }
    function openProfile(){ profileMenu.classList.add('open'); profileMenu.setAttribute('aria-hidden','false'); profileBtn.setAttribute('aria-expanded','true'); updateHeaderStats(); }
    profileBtn.addEventListener('click', (e) => { e.stopPropagation(); if (profileMenu.classList.contains('open')) closeProfile(); else openProfile(); });
    document.getElementById('menu-logout-1').addEventListener('click', () => { auth.logout(); location.href='/login.html'; });
  }

  // settings menu behaviour
  const settingsBtn = document.getElementById('settings-btn');
  const settingsMenu = document.getElementById('settings-menu');
  if (settingsBtn && settingsMenu) {
    function closeSettings(){ settingsMenu.classList.remove('open'); settingsMenu.setAttribute('aria-hidden','true'); settingsBtn.setAttribute('aria-expanded','false'); }
    function openSettings(){ settingsMenu.classList.add('open'); settingsMenu.setAttribute('aria-hidden','false'); settingsBtn.setAttribute('aria-expanded','true'); }
    settingsBtn.addEventListener('click', (e)=>{ e.stopPropagation(); if (settingsMenu.classList.contains('open')) closeSettings(); else openSettings(); });
    document.getElementById('settings-theme').addEventListener('click', ()=>{ themeBtn.click(); closeSettings(); });
    document.getElementById('menu-logout-2').addEventListener('click', ()=>{ auth.logout(); location.href='/login.html'; });
  }

  // close dropdowns on outside click or ESC
  document.addEventListener('click', function(){ if (profileMenu) profileMenu.classList.remove('open'); if (settingsMenu) settingsMenu.classList.remove('open'); if (profileBtn) profileBtn.setAttribute('aria-expanded','false'); if (settingsBtn) settingsBtn.setAttribute('aria-expanded','false'); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ if (profileMenu) profileMenu.classList.remove('open'); if (settingsMenu) settingsMenu.classList.remove('open'); } });

  // update header stats
  function updateHeaderStats(){ const u = auth.getCurrentUser(); const fav = u && u.favorites ? u.favorites.length : 0; const hist = u && u.history ? u.history : []; const week = hist.filter(h=> (new Date(h.date)) > (Date.now() - 7*24*60*60*1000)).length; const streak = (function(){ if(!u || !u.history) return 0; const days = new Set(u.history.map(h=> new Date(h.date).toDateString())); let s=0; for(let i=0;i<30;i++){ const d=new Date(); d.setDate(d.getDate()-i); if (days.has(d.toDateString())) s++; else break; } return s; })(); const elFav = document.getElementById('hdr-fav'); const elSt = document.getElementById('hdr-streak'); if (elFav) elFav.textContent = fav; if (elSt) elSt.textContent = streak; }

  // re-render header when profile updates
  document.addEventListener('user:updated', function(){ renderHeader(); });

  // mark active nav link (robust resolution)
  const pageUrl = location.href.split('#')[0].split('?')[0];
  document.querySelectorAll('.header nav a').forEach(a => {
    try {
      const resolved = new URL(a.getAttribute('href'), location.href).href;
      if (resolved === pageUrl || pageUrl.indexOf(resolved) !== -1) a.classList.add('active');
    } catch (e) { /* ignore invalid URLs */ }
  });
}

document.addEventListener('DOMContentLoaded', function(){ applyThemeFromStorage(); renderHeader(); });

// render on DOM ready
document.addEventListener('DOMContentLoaded', function(){ applyThemeFromStorage(); renderHeader(); });
