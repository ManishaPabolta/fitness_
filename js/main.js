/* main.js - small utilities */
document.addEventListener('DOMContentLoaded', function () {
  // Auto login: if user exists in localStorage, leave; else fall back to session
  const u = auth.getCurrentUser();
  if (u) { console.log('Auto-login detected for', u.email); }

  // daily quote rotation (very simple)
  const quotes = [
    'The only bad workout is the one that didn\'t happen.',
    'Progress, not perfection.',
    'You don\'t have to be extreme, just consistent.'
  ];
  const qEl = document.getElementById('daily-quote');
  if (qEl) qEl.textContent = quotes[Math.floor(Math.random()*quotes.length)];

  // Footer theme toggle and language selector
  const footerTheme = document.getElementById('footer-theme-toggle');
  if (footerTheme) footerTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const now = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', now);
    // update header button ARIA if present
    const themeBtn = document.getElementById('theme-toggle'); if (themeBtn) themeBtn.setAttribute('aria-pressed', document.body.classList.contains('dark'));
  });
  const lang = document.getElementById('footer-lang'); if (lang) { lang.value = localStorage.getItem('lang') || 'en'; lang.addEventListener('change', ()=>{ localStorage.setItem('lang', lang.value); alert('Language set to ' + lang.value + ' (dummy)'); }); }

  // Global reveal-on-scroll for .reveal elements (works on all pages)
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length){ const ro = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } }); },{threshold:0.12}); revealEls.forEach(el=>ro.observe(el)); } else { revealEls.forEach(el=>el.classList.add('visible')); }
});
