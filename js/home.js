/* home.js - hero animations, counters, testimonials, video modal, CTA behavior */
document.addEventListener('DOMContentLoaded', function () {
  // Hero animated inline text
  const heroAnim = document.getElementById('hero-anim');
  const phrases = ['Train smarter.','Eat better.','Move daily.','Join community.']; let hi=0;
  if (heroAnim) setInterval(()=>{ hi=(hi+1)%phrases.length; heroAnim.textContent = phrases[hi]; }, 2600);

  // main CTA change if logged in
  const mainCta = document.getElementById('main-cta');
  const user = auth.getCurrentUser();
  if (mainCta) {
    if (user) { mainCta.textContent = 'Go to Dashboard'; mainCta.href='pages/dashboard.html'; }
    else { mainCta.textContent = 'Start Your Fitness Journey'; mainCta.href='pages/signup.html'; }
  }

  // counters animate when visible
  const counters = document.querySelectorAll('.stat .stat-val');
  function runCounters() { counters.forEach(c => { const target = +c.dataset.target || 0; const dur = 1200; let s=null; function step(ts){ if (!s) s=ts; const p = Math.min((ts-s)/dur,1); c.textContent = Math.floor(p*target); if (p<1) requestAnimationFrame(step); } requestAnimationFrame(step); }); }
  let ran=false; function checkCounters(){ if (ran) return; const el = document.querySelector('.hero'); if (!el) return; const r=el.getBoundingClientRect(); if (r.top < window.innerHeight && r.bottom > 0) { runCounters(); ran=true; } }
  checkCounters(); window.addEventListener('scroll', checkCounters);

  // testimonial carousel (faded)
  const carousel = document.getElementById('test-carousel'); if (carousel) {
    let idx = 0; const slides = Array.from(carousel.querySelectorAll('.test-slide'));
    function show(i){ slides.forEach((s,si)=> { s.classList.toggle('active', si===i); s.setAttribute('aria-hidden', si===i? 'false':'true'); }); }
    show(0); setInterval(()=>{ idx=(idx+1)%slides.length; show(idx); }, 4500);
  }

  // reveal sections on scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length){ const ro = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } }); },{threshold:0.12}); revealEls.forEach(el=>ro.observe(el)); } else { revealEls.forEach(el=>el.classList.add('visible')); }

  // Video modal: create modal and open/close controls
  const poster = document.getElementById('video-poster');
  let modal = document.getElementById('video-modal');
  if (!modal) {
    modal = document.createElement('div'); modal.id='video-modal'; modal.className='modal'; modal.innerHTML = `<div class="dialog" role="dialog" aria-modal="true"><button class="close" aria-label="Close">✕</button><video id="home-video" controls muted playsinline preload="metadata" poster="assets/images/hero-bg.svg"><source src="assets/videos/motivation.mp4" type="video/mp4">Your browser does not support HTML video.</video></div>`;
    document.body.appendChild(modal);
    modal.querySelector('.close').addEventListener('click', closeVideo);
    modal.addEventListener('click', (e)=>{ if (e.target===modal) closeVideo(); });
  }
  function openVideo(){ modal.classList.add('show'); const v = document.getElementById('home-video'); v.currentTime = 0; v.muted = true; const p = v.play(); if (p && p.catch) p.catch(()=>{}); }
  function closeVideo(){ modal.classList.remove('show'); const v = document.getElementById('home-video'); try{ v.pause(); v.currentTime = 0; }catch(e){} }
  if (poster) { poster.addEventListener('click', openVideo); poster.addEventListener('keydown', (e)=>{ if (e.key==='Enter' || e.key===' ') { e.preventDefault(); openVideo(); } }); }
  document.addEventListener('keydown', (e)=>{ if (e.key==='Escape') closeVideo(); });

  // sticky CTA bar (simple)
  const sticky = document.createElement('div'); sticky.className='sticky-cta'; sticky.innerHTML = `<div style="display:flex;gap:12px;align-items:center;padding:8px"><span style="font-weight:700">Ready to start?</span><a class="btn" href="${user? 'pages/dashboard.html':'pages/signup.html'}">${user? 'Go to Dashboard' :'Join now'}</a></div>`;
  document.body.appendChild(sticky);
  let lastY = window.scrollY; window.addEventListener('scroll', ()=>{ if (window.scrollY>200 && window.scrollY>lastY) sticky.classList.add('show'); else sticky.classList.remove('show'); lastY = window.scrollY; });

  // local toast fallback for home page (uses its own container if global toast not available)
  function showLocalToast(txt){ let t = document.getElementById('home-toast'); if (!t){ t = document.createElement('div'); t.id='home-toast'; t.className='toast'; t.setAttribute('aria-hidden','true'); document.body.appendChild(t); }
    t.textContent = txt; t.classList.add('show'); setTimeout(()=> t.classList.remove('show'),2200); }


  // newsletter main form validation
  const nf = document.getElementById('newsletter-form-main'); if (nf) nf.addEventListener('submit', function (e){ e.preventDefault(); const em = document.getElementById('n-email-main'); const msg = document.getElementById('n-msg-main'); if (!em.value || !em.value.includes('@')) { msg.textContent='Enter a valid email'; msg.style.color='crimson'; return; } msg.textContent='Subscribed — check your inbox (dummy)'; msg.style.color='green'; nf.reset(); });

  // make workouts filters work with workouts.js list (simple delegation)
  document.querySelectorAll('.filters .chip').forEach(b => b.addEventListener('click', function(){ const f = this.dataset.filter; document.querySelectorAll('.filters .chip').forEach(x=>x.classList.remove('active')); this.classList.add('active'); // rely on workouts.js renderWorkouts to respect filter: it sets handlers to chips on its own, but we call it to re-render
    if (window.workouts && workouts.renderWorkouts) workouts.renderWorkouts(); }));

  // Lazy image loader
  const lazyImgs = document.querySelectorAll('img.lazy-img[data-src]'); if ('IntersectionObserver' in window){ const obs = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if (e.isIntersecting){ const img = e.target; img.src = img.dataset.src; img.classList.add('loaded'); obs.unobserve(img); } }); },{rootMargin:'200px'}); lazyImgs.forEach(i=>obs.observe(i)); } else { lazyImgs.forEach(i=>{ i.src = i.dataset.src; i.classList.add('loaded'); }); }

  // Scroll indicator behavior
  const scrollInd = document.querySelector('.scroll-indicator'); if (scrollInd){ scrollInd.addEventListener('click', function(e){ e.preventDefault(); const t = document.querySelector(this.getAttribute('href')); if (t) t.scrollIntoView({behavior:'smooth'}); }); }

  // Sport tabs filtering
  document.querySelectorAll('.tabs .chip').forEach(btn=> btn.addEventListener('click', function(){ const tab = this.dataset.tab; document.querySelectorAll('.tabs .chip').forEach(x=>x.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.sport-card').forEach(card=>{ if (tab==='All' || card.dataset.category===tab) card.style.display='block'; else card.style.display='none'; }); }));

  // before/after click / toggle
  document.querySelectorAll('.before-after').forEach(b=>{
    const handle = b.querySelector('.handle'); if (!handle) return; handle.addEventListener('click', ()=> b.classList.toggle('split'));
    handle.addEventListener('keydown', (e)=>{ if (e.key==='Enter' || e.key===' ') { e.preventDefault(); b.classList.toggle('split'); } });
    b.addEventListener('click', ()=> b.classList.toggle('split'));
  });

  // Draw a simple sparkline for weight progress if present
  function drawSparkline(canvas, arr){ if (!canvas) return; const ctx = canvas.getContext('2d'); ctx.clearRect(0,0,canvas.width,canvas.height); if (!arr || arr.length===0) { ctx.fillStyle='#f0f0f0'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle='var(--muted)'; ctx.font='12px sans-serif'; ctx.fillText('No data',10,20); return; } const w = canvas.width, h = canvas.height, max = Math.max(...arr), min = Math.min(...arr); ctx.beginPath(); arr.forEach((v,i)=>{ const x = (i/(arr.length-1||1))*(w-8)+4; const y = h - ((v-min)/(max-min||1))*(h-12)-6; if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y); }); ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#4CAF50'; ctx.lineWidth=2; ctx.stroke(); }
  const spark = document.getElementById('mini-sparkline'); if (spark && user && user.weightProgress){ drawSparkline(spark, user.weightProgress.slice(-7)); }

  // Show user progress and populate mini stats
  if (user){ const up = document.getElementById('user-progress'); if (up) up.style.display='block'; const greet = document.getElementById('mini-greet'); if (greet) greet.textContent = `Quick progress — ${user.name || user.email}`;
    const streakEl = document.getElementById('mini-streak'); const completeEl = document.getElementById('mini-complete'); const cbar = document.getElementById('mini-complete-bar'); const calsEl = document.getElementById('mini-cals');
    const history = user.history || [];
    if (streakEl) streakEl.textContent = user.streak || Math.min(30, history.length);
    const weeklyCount = Object.values(user.weeklyPlan || {}).flat().length; const pct = Math.min(100, Math.round((weeklyCount/7)*100)); if (completeEl) completeEl.textContent = pct + '%'; if (cbar) cbar.style.width = pct + '%';
    const today = new Date().toISOString().slice(0,10); const calsToday = (history.filter(h=> (h.date||'').slice(0,10)===today).reduce((s,h)=>s+(h.calories||0),0)); if (calsEl) calsEl.textContent = calsToday + ' kcal';
  }

  // Unlock badges based on simple rules
  document.querySelectorAll('.badges-list .badge').forEach(b=>{ const name = b.dataset.badge; const histLen = (user && user.history) ? user.history.length : 0; if ((name==='daily-streak' && histLen>=3) || (name==='weekly-goal' && histLen>=7) || (name==='workout-master' && histLen>=20) || (name==='nutrition-champ' && (user && user.meals && user.meals.length>5))) { b.classList.remove('locked'); b.classList.add('unlocked'); } });

  // Feature detail data and handlers
  const FEATURE_DATA = {
    workouts: {
      title: 'Workouts — structured for every level',
      content: `
        <p>Our workout library covers a wide range of modalities — strength training, HIIT, mobility, endurance and sport-specific drills. Each session includes a purpose, estimated time, difficulty level and an evidence-based progression plan so you can scale safely as you improve.</p>
        <p>Workouts are designed by certified coaches and are accompanied by detailed steps, interval timers, and estimated calories burned (personalised with your weight when available). Sessions come with warm-up and cool-down recommendations to reduce injury risk.</p>
        <p>Use filters to find sessions by duration, intensity, and goal (fat loss, strength, mobility). Add favorites, schedule them into your weekly plan, and track completion in your history. Details pages include step-by-step instructions, equipment lists and demonstration images.</p>
        <ul><li>Types: Strength, Cardio, Yoga, Mobility, Sport Drills</li><li>Features: timers, favorites, history, plan</li><li>Example: 20-min HIIT (warm-up → 4 rounds → cool-down)</li></ul>
      `,
      images: ['assets/images/features/workouts.svg','assets/images/workout-1.svg'],
      link: 'pages/workouts.html',
      linkText: 'View all workouts'
    },
    nutrition: {
      title: 'Nutrition — simple, practical guidance',
      content: `
        <p>Nutrition underpins every fitness goal. We provide approachable meal templates, macronutrient breakdowns, and example meal plans (vegetarian, high-protein, balanced) to fit different energy needs and cultural preferences.</p>
        <p>Use our BMR/TDEE calculators to estimate daily needs and then tailor meal plans for maintenance, deficit or surplus. Quick recipes include estimated calories & macros and are easy to batch-cook for a busy week.</p>
        <p>Hydration and micronutrient guidance is also included — we recommend simple daily water targets and small strategies to increase vegetable variety, pick quality proteins, and use healthy fats strategically.</p>
        <ul><li>Tools: BMR/TDEE calculator, meal planner, grocery lists</li><li>Focus: sustainability, balance, personalization</li></ul>
      `,
      images: ['assets/images/features/nutrition.svg','assets/images/recipe-1.svg'],
      link: 'pages/diet.html',
      linkText: 'Explore nutrition'
    },
    sports: {
      title: 'Sports — rules, drills and coaching tips',
      content: `
        <p>Whether you play casually or coach a team, our sports section breaks down rules, common drills, and equipment lists for popular sports. Each sport page contains beginner-friendly progressions and safety considerations for contact and non-contact activities.</p>
        <p>Coaches can use our drill libraries to build sessions that develop technical skills, tactical awareness and sport-specific fitness. There are also articles on recovery strategies and injury prevention tailored to the sport.</p>
        <ul><li>Content: drills, practice plans, safety tips</li><li>Audience: players, coaches, parents</li></ul>
      `,
      images: ['assets/images/features/sports.svg','assets/images/sport-1.svg'],
      link: 'pages/sports.html',
      linkText: 'See sports guide'
    },
    progress: {
      title: 'Progress tracking — metrics that matter',
      content: `
        <p>Track what's meaningful: weight trends, workout completion, streaks, and simple biometrics. Our dashboard presents an overview with charts and quick insights so you can spot trends and plan the next steps.</p>
        <p>We focus on actionable metrics (consistency, adherence, strength progression) rather than vanity metrics. Use the weekly summary and history to celebrate wins and find areas to adjust.</p>
        <ul><li>Charts: weight over time, workouts per week</li><li>Features: streaks, history export, mini-dashboard</li></ul>
      `,
      images: ['assets/images/features/progress.svg'],
      link: 'pages/dashboard.html',
      linkText: 'Open dashboard'
    },
    safety: {
      title: 'Safety-first approach',
      content: `
        <p>We prioritise safety: every workout includes warm-ups, recommended modifications, and risk-aware progressions. Clear instructions and reminders are included to prevent common technique mistakes.</p>
        <p>If you have pre-existing conditions, consult a healthcare professional before starting. We also provide guidance on how to self-regulate intensity and recognise signs of overtraining.</p>
      `,
      images: ['assets/images/features/safety.svg'],
      link: 'pages/about.html',
      linkText: 'Safety & disclaimers'
    },
    privacy: {
      title: 'Privacy & data ownership',
      content: `
        <p>Your data stays on your device by default. This app uses LocalStorage to save progress locally — we don't send data to a server unless you export or choose to sync in a future release.</p>
        <p>We provide clear instructions to export or delete your data and advise best practices (regular backups, use of a single device). Security is considered when handling sensitive info like passwords (hashed in memory client-side only).</p>
      `,
      images: ['assets/images/features/privacy.svg'],
      link: 'pages/settings.html',
      linkText: 'Privacy settings'
    },
    offline: {
      title: 'Offline-friendly design',
      content: `
        <p>Work offline with confidence: workout completion, progress and plans are stored locally so you can train without network access. Syncing to cloud services is an optional future feature.</p>
        <p>The UI is resilient to connectivity drops and will queue actions for when a connection is restored. Keep an eye on export options to backup your progress externally.</p>
      `,
      images: ['assets/images/features/offline.svg'],
      link: 'pages/about.html',
      linkText: 'About offline usage'
    },
    badges: {
      title: 'Achievements & gamification',
      content: `
        <p>Earn badges for consistency, challenges and milestones — they’re designed to motivate and reflect meaningful behaviours (daily streaks, weekly goals, nutrition consistency).</p>
        <p>Badges are visual, shareable, and tied to clear criteria so they’re achievable and encouraging. They unlock features in the app and can be used to set short-term challenges.</p>
      `,
      images: ['assets/images/features/badges.svg'],
      link: 'pages/dashboard.html',
      linkText: 'View your achievements'
    }
  };

  let lastFocusedFeature = null;
  function openFeature(key){
    const data = FEATURE_DATA[key]; if (!data) return; const modal = document.getElementById('feature-modal');
    modal.querySelector('#feature-title').textContent = data.title;
    modal.querySelector('.feature-body').innerHTML = data.content;
    const imgs = modal.querySelector('.feature-images'); imgs.innerHTML = '';
    (data.images||[]).forEach(src => { const i = document.createElement('img'); i.src = src; i.alt = data.title; imgs.appendChild(i); });
    const link = modal.querySelector('#feature-link'); link.href = data.link || '#'; link.textContent = data.linkText || 'Learn more';
    modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); lastFocusedFeature = document.activeElement; modal.querySelector('.feature-close').focus();
  }
  function closeFeature(){ const modal = document.getElementById('feature-modal'); modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); if (lastFocusedFeature) lastFocusedFeature.focus(); }

  document.querySelectorAll('.feature-btn').forEach(btn=>{ btn.addEventListener('click', ()=> openFeature(btn.dataset.feature)); btn.addEventListener('keydown', (e)=>{ if (e.key==='Enter' || e.key===' ') { e.preventDefault(); openFeature(btn.dataset.feature); } }); });
  document.querySelector('.feature-close').addEventListener('click', closeFeature);
  document.getElementById('feature-modal').addEventListener('click', (e)=>{ if (e.target && e.target.id==='feature-modal') closeFeature(); });
  document.addEventListener('keydown', (e)=>{ if (e.key==='Escape') { const mod = document.getElementById('feature-modal'); if (mod && mod.classList.contains('show')) closeFeature(); } });

  // --- Home extras: Workout of the Day, recipes carousel, micro-challenge, gallery ---
  function initWOD(){
    const container = document.getElementById('workout-of-day'); if (!container) return;
    function pick(card){
      const img = card.querySelector('img');
      const title = card.querySelector('h3')?.textContent || 'Workout of the Day';
      const meta = card.querySelector('.meta .small')?.textContent || card.querySelector('.meta')?.textContent || '';
      const idEl = card.querySelector('.quick-start');
      const id = idEl ? idEl.dataset.id : null;
      container.querySelector('img').src = img? img.src : 'assets/images/home/workout-1.svg';
      container.querySelector('#wod-title').textContent = title;
      container.querySelector('#wod-meta').textContent = meta;
      const startBtn = document.getElementById('wod-start');
      const saveBtn = document.getElementById('wod-save');
      const det = document.getElementById('wod-details');
      startBtn.onclick = ()=>{ if (!id) return showLocalToast('Start unavailable'); const orig = document.querySelector(`.quick-start[data-id="${id}"]`); if (orig) orig.click(); else showLocalToast('Start unavailable'); };
      saveBtn.onclick = ()=>{ if (!id) return showLocalToast('Save unavailable'); const fav = document.querySelector(`.fav[data-id="${id}"]`); if (fav) fav.click(); else showLocalToast('Save unavailable'); };
      det.href = `/pages/workout-detail.html?id=${id||''}`;
    }
    function tryPickRandom(){ const cards = document.querySelectorAll('.workout-list .workout'); if (!cards.length) return; const idx = Math.floor(Math.random()*cards.length); pick(cards[idx]); }
    setTimeout(tryPickRandom,600);
    setInterval(tryPickRandom,60000);
  }

  function initRecipes(){ const track = document.querySelector('.recipes-track'); if (!track) return; let timer = setInterval(()=>{ if (track.scrollWidth <= track.clientWidth) return; const step = Math.min(220, track.clientWidth); track.scrollBy({left:step,behavior:'smooth'}); if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) track.scrollTo({left:0,behavior:'smooth'}); },3600); track.addEventListener('mouseenter', ()=> clearInterval(timer)); track.addEventListener('mouseleave', ()=> { timer = setInterval(()=>{ if (track.scrollWidth <= track.clientWidth) return; const step = Math.min(220, track.clientWidth); track.scrollBy({left:step,behavior:'smooth'}); if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) track.scrollTo({left:0,behavior:'smooth'}); },3600); }); }

  function initMicro(){ const join = document.getElementById('micro-join'); if (!join) return; const bar = document.getElementById('micro-bar'); const count = document.getElementById('micro-count'); let val = Number(localStorage.getItem('micro-challenge-count') || 12); function update(){ const pct = Math.min(100, 40 + Math.round(val/10)); if (bar) bar.style.width = pct + '%'; if (count) count.textContent = `${val} people joined`; } join.addEventListener('click', function(){ val++; localStorage.setItem('micro-challenge-count', val); update(); showLocalToast('Joined micro challenge — nice!'); }); update(); }

  function initGallery(){ document.querySelectorAll('.photo-gallery img').forEach(img=>{ img.addEventListener('click', ()=>{ openFeatureImage(img.src, img.alt); }); }); function openFeatureImage(src, alt){ const modal = document.getElementById('feature-modal'); modal.querySelector('#feature-title').textContent = alt || 'Photo'; modal.querySelector('.feature-body').innerHTML = `<img src="${src}" alt="${alt}" style="width:100%;border-radius:8px" />`; modal.querySelector('.feature-images').innerHTML = ''; modal.querySelector('#feature-link').href='#'; modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); } }

  // init everything after a short delay so workouts have rendered
  function initExtras(){ initWOD(); initRecipes(); initMicro(); initGallery();
    // Recipes map for home cards
    const RECIPES = [
      {id:'r1',title:'Berry Oats',kcal:320,time:'10 min',ingredients:['Oats','Berries','Milk','Honey'],img:'assets/images/home/recipe-1.svg'},
      {id:'r2',title:'Grilled Chicken Bowl',kcal:450,time:'20 min',ingredients:['Chicken','Rice','Veggies','Olive oil'],img:'assets/images/home/recipe-2.svg'},
      {id:'r3',title:'Green Smoothie',kcal:210,time:'5 min',ingredients:['Spinach','Banana','Almond milk','Seeds'],img:'assets/images/home/recipe-3.svg'}
    ];

    // Hook recipe cards to open detailed modal
    document.querySelectorAll('.recipe-card').forEach((card, idx)=>{
      card.addEventListener('click', ()=>{
        const r = RECIPES[idx] || RECIPES[0];
        const modal = document.getElementById('feature-modal');
        modal.querySelector('#feature-title').textContent = r.title + ' — ' + r.time;
        const body = modal.querySelector('.feature-body');
        body.innerHTML = `<p class="small muted">${r.kcal} kcal • ${r.time}</p><p>Ingredients: <strong>${r.ingredients.join(', ')}</strong></p><div style="margin-top:8px"><button id="add-grocery" class="btn">Add ingredients to grocery</button> <a class="btn ghost" href="pages/diet.html">View plan</a></div>`;
        modal.querySelector('.feature-images').innerHTML = `<img src="${r.img}" alt="${r.title}" style="width:280px;border-radius:8px" />`;
        const link = modal.querySelector('#feature-link'); link.href = '#'; link.textContent = 'Add ingredients';
        modal.classList.add('show'); modal.setAttribute('aria-hidden','false');
        setTimeout(()=>{
          const ag = document.getElementById('add-grocery'); if (ag) ag.addEventListener('click', ()=>{
            if (!auth.isAuthenticated()){ if (confirm('Log in to save groceries?')) location.href='/login.html'; return; }
            const u = auth.getCurrentUser(); u.grocery = u.grocery || []; r.ingredients.forEach(it=>{ if (!u.grocery.includes(it)) u.grocery.push(it); }); auth.saveCurrentUser(u); showLocalToast('Ingredients added to grocery');
          });
        },30);
      });
    });

    // Hook sport cards to show sport details
    document.querySelectorAll('.sport-card').forEach(card=>{
      card.style.cursor='pointer';
      card.addEventListener('click', ()=>{
        const title = card.querySelector('strong') ? card.querySelector('strong').textContent : 'Sport';
        const detail = card.querySelector('.sport-details') ? card.querySelector('.sport-details').innerHTML : '';
        const modal = document.getElementById('feature-modal');
        modal.querySelector('#feature-title').textContent = title;
        modal.querySelector('.feature-body').innerHTML = `<p class="small muted">${detail}</p><p style="margin-top:8px">Drills & practice ideas, safety tips and equipment lists are available on the full sports page.</p><div style="margin-top:8px"><a class="btn" href="pages/sports.html">Open sports guide</a></div>`;
        modal.querySelector('.feature-images').innerHTML = card.querySelector('img')? `<img src="${card.querySelector('img').src}" alt="${title}" style="width:260px;border-radius:8px"/>` : '';
        modal.classList.add('show'); modal.setAttribute('aria-hidden','false');
      });
    });

    // Hook badges to show badge details
    document.querySelectorAll('.badges-list .badge').forEach(b=>{
      b.style.cursor='pointer';
      b.addEventListener('click', ()=>{
        const key = b.dataset.badge;
        const modal = document.getElementById('feature-modal');
        const info = {
          'daily-streak':{title:'Daily Streak',content:'Maintain daily completed workouts to build a streak. Complete at least 3 days to unlock.'},
          'weekly-goal':{title:'Weekly Goal',content:'Complete 4+ workouts in a week to hit your weekly goal.'},
          'workout-master':{title:'Workout Master',content:'Complete 20 distinct workouts across categories to earn this badge.'},
          'nutrition-champ':{title:'Nutrition Champ',content:'Log 5+ meals in the tracker to show good tracking habit.'}
        };
        const d = info[key] || {title:key,content:'Details coming soon.'};
        modal.querySelector('#feature-title').textContent = d.title;
        modal.querySelector('.feature-body').innerHTML = `<p class="small muted">${d.content}</p><div style="margin-top:8px"><a class="btn" href="pages/dashboard.html">See progress</a></div>`;
        modal.querySelector('.feature-images').innerHTML = '';
        modal.classList.add('show'); modal.setAttribute('aria-hidden','false');
      });
    });

  }
  setTimeout(initExtras, 800);

});