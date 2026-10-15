// js/sports.js - Enhanced fitness sports page
document.addEventListener('DOMContentLoaded', function(){

  // --- Toast notification ---
  function showToast(txt){
    let t = document.getElementById('home-toast');
    if(!t){ t = document.createElement('div'); t.id='home-toast'; t.className='toast'; document.body.appendChild(t); }
    t.textContent = txt; t.classList.add('show'); setTimeout(()=> t.classList.remove('show'),2200);
  }

  // --- Sports data ---
  const SPORTS = [
    {id:'football',title:'Football',desc:'Ball control, passing, shooting and match tactics.',level:'Intermediate',type:'outdoor',pop:95,img:'https://uploads.onecompiler.io/44cwzqjd6/44d3wgvqc/71B27F-1znL._AC_UF1000,1000_QL80_.jpg',drills:{beginner:[{name:'Cone dribble',dur:6,intensity:'low',focus:'control',instr:'Dribble through cones, focus on close control.'},{name:'Passing pairs',dur:8,intensity:'medium',focus:'passing',instr:'Short passes in pairs, focus on accuracy.'}],intermediate:[{name:'Small-sided game',dur:20,intensity:'high',focus:'game-play',instr:'5v5 small field to emphasize decision making.'}],advanced:[{name:'Tactical session',dur:40,intensity:'high',focus:'team tactics',instr:'Full-team drills with phased play.'}] }},
    {id:'cricket',title:'Cricket',desc:'Batting, bowling drills, fielding and matchcraft.',level:'Beginner',type:'outdoor',pop:88,img:'https://uploads.onecompiler.io/44cwzqjd6/44d3wgvqc/785276fb564cb137b9197cd77d8492a3.jpg',drills:{beginner:[{name:'Net batting',dur:15,intensity:'low',focus:'technique',instr:'Practice shots in nets with soft ball.'},{name:'Throwing accuracy',dur:8,intensity:'low',focus:'throwing',instr:'Short distance accurate throws.'}],intermediate:[{name:'Bowling target',dur:20,intensity:'medium',focus:'line & length',instr:'Hit target lines with accuracy.'}],advanced:[{name:'Match sim',dur:50,intensity:'high',focus:'game-situations',instr:'Simulated match overs.'}] }},
    {id:'badminton',title:'Badminton',desc:'Footwork, serves, netplay and match conditioning.',level:'Beginner',type:'indoor',pop:75,img:'https://uploads.onecompiler.io/44cwzqjd6/44d3wgvqc/images%20(1).jpg',drills:{beginner:[{name:'Footwork ladder',dur:6,intensity:'low',focus:'agility',instr:'Ladder patterns for court movement.'},{name:'Serve practice',dur:8,intensity:'low',focus:'serve',instr:'Practice low & high serves.'}],intermediate:[{name:'Rally drills',dur:18,intensity:'medium',focus:'consistency',instr:'Continuous rallying focusing on placement.'}],advanced:[{name:'Smash power',dur:20,intensity:'high',focus:'power',instr:'Smash drills against defender.'}] }},
    {id:'basketball',title:'Basketball',desc:'Shooting, dribbling and court awareness.',level:'Intermediate',type:'indoor',pop:80,img:'https://uploads.onecompiler.io/44cwzqjd6/44d3wgvqc/basketball-thrown-metal-hoop-stunning-sunset-backdrop-basketball-thrown-metal-hoop-stunning-sunset-backdrop-316571710.webp',drills:{beginner:[{name:'Form shooting',dur:10,intensity:'low',focus:'shooting',instr:'Close range shots focusing on form.'}],intermediate:[{name:'Pick & roll',dur:20,intensity:'medium',focus:'teamplay',instr:'Practice pick & roll options.'}],advanced:[{name:'Conditioned scrimmage',dur:30,intensity:'high',focus:'game-intensity',instr:'Scrimmage with constraints.'}] }},
    {id:'volleyball',title:'Volleyball',desc:'Serving, passing and team drills.',level:'Beginner',type:'indoor',pop:60,img:'https://uploads.onecompiler.io/44cwzqjd6/44d3wgvqc/260-volleyball-top-volley-official-size-weight-premium-japanese-original-imahddvunbjehfum.webp',drills:{beginner:[{name:'Passing pairs',dur:8,intensity:'low',focus:'passing',instr:'Controlled passing drills.'}],intermediate:[{name:'3-touch drill',dur:15,intensity:'medium',focus:'rallying',instr:'3 touch sequences focusing on transitions.'}],advanced:[{name:'Match play',dur:40,intensity:'high',focus:'teamplay',instr:'Competitive sets.'}] }},
    {id:'yoga',title:'Yoga & Stretch',desc:'Mobility and flexibility for athletes.',level:'All',type:'indoor',pop:66,img:'https://uploads.onecompiler.io/44cwzqjd6/44d3wgvqc/images%20(2).jpg',drills:{beginner:[{name:'Mobility flow',dur:8,intensity:'low',focus:'mobility',instr:'Gentle flow focusing on joint mobility.'}],intermediate:[{name:'Power yoga',dur:20,intensity:'medium',focus:'endurance',instr:'Vinyasa style session.'}] }},
  ];

  // --- Helpers ---
  function getUser(){ return auth.isAuthenticated()? auth.getCurrentUser() : null; }
  function saveUser(u){ auth.saveCurrentUser(u); }

  function debounce(fn, delay=200){ let timer; return (...args)=>{ clearTimeout(timer); timer=setTimeout(()=> fn(...args), delay); }; }

  // --- Render sports grid ---
  function renderSports(){
    const q = document.getElementById('sport-search').value.toLowerCase();
    const type = document.getElementById('filter-type').value;
    const diff = document.getElementById('filter-diff').value;
    const sort = document.getElementById('sort-by').value;
    const container = document.getElementById('categories'); container.innerHTML='';
    let filtered = SPORTS.filter(s=>{
      if (q && !(s.title.toLowerCase().includes(q)||s.desc.toLowerCase().includes(q))) return false;
      if (type!=='all' && s.type!==type) return false;
      if (diff!=='all' && !(s.level.toLowerCase()===diff||s.level.toLowerCase()==='all')) return false;
      return true;
    });

    // sort
    if (sort==='alpha') filtered.sort((a,b)=>a.title.localeCompare(b.title));
    else filtered.sort((a,b)=>b.pop-a.pop);

    const frag = document.createDocumentFragment();
    const u = getUser();
    filtered.forEach((s,idx)=>{
      const isFav = u && u.favoriteSports && u.favoriteSports.includes(s.id);
      const card = document.createElement('article'); card.className='card sport-card'; card.dataset.id=s.id;
      card.innerHTML=`
        <div class="img-wrap"><img src="${s.img}" alt="${s.title}" loading="lazy" /></div>
        <div class="card-body">
          <h3>${s.title} <span class="level-badge">${s.level}</span></h3>
          <div class="small muted desc">${s.desc}</div>
          <div class="meta-row" style="margin-top:10px">
            <a class="btn btn-sm" href="/pages/sport-detail.html?id=${s.id}">Details</a>
            <button class="btn btn-sm open" data-id="${s.id}">Quick View</button>
            <button class="btn ghost fav ${isFav?'favorited':''}" aria-pressed="${isFav?'true':'false'}" data-id="${s.id}">${isFav?'♥':'♡'}</button>
            <div style="margin-left:auto;text-align:right">
              <div class="small muted">${s.pop}% popular</div>
              <div class="pop-meter" aria-hidden="true"><div class="pop-fill" style="width:${s.pop}%"></div></div>
            </div>
          </div>
        </div>`;
      frag.appendChild(card);

      // fade-in stagger
      setTimeout(()=> card.classList.add('appear'), 40 + idx*60);
    });
    container.appendChild(frag);
  }

  // --- Favorites ---
  function renderFavorites(){
    const el = document.getElementById('favorite-sports-list'); const u=getUser();
    if(!u || !u.favoriteSports || !u.favoriteSports.length){ el.textContent='No favorite sports yet. Tap ♥ to add favorites.'; return; }
    const names = u.favoriteSports.map(id=> SPORTS.find(s=>s.id===id)?.title || id);
    el.textContent = names.join(', ');
  }

  function toggleFav(id, btn){
    if(!auth.isAuthenticated()){ if(confirm('Log in to save favorites?')) location.href='/signup.html'; return; }
    const u=getUser(); u.favoriteSports = u.favoriteSports || [];
    const idx = u.favoriteSports.indexOf(id);
    if(idx>=0){ u.favoriteSports.splice(idx,1); btn.textContent='♡'; btn.classList.remove('favorited'); btn.setAttribute('aria-pressed','false'); showToast('Removed from favorites'); }
    else { u.favoriteSports.push(id); btn.textContent='♥'; btn.classList.add('favorited'); btn.setAttribute('aria-pressed','true'); showToast('Added to favorites'); }
    saveUser(u); renderFavorites();
  }

  // --- Event delegation for dynamic buttons ---
  document.getElementById('categories').addEventListener('click', e=>{
    if(e.target.classList.contains('open')) openSportDetail(e.target.dataset.id);
    if(e.target.classList.contains('fav')) toggleFav(e.target.dataset.id, e.target);
  });

  // --- Drill modal with timer + pause/resume ---
  let drillInterval=null, drillSeconds=0, drillPaused=false;
  function openDrillModal(drill, sportId){
    const m=document.getElementById('drill-modal');
    m.querySelector('#drill-title').textContent=`${drill.name} — ${sportId}`;
    m.querySelector('#drill-instructions').textContent=drill.instr || '';
    const tEl = m.querySelector('#drill-timer'); tEl.textContent='0:00'; drillSeconds=0; drillPaused=false;
    const startBtn=m.querySelector('#drill-start-btn'); const completeBtn=m.querySelector('#drill-complete-btn');
    startBtn.disabled=false; completeBtn.disabled=true;
    m.classList.add('show'); m.setAttribute('aria-hidden','false');

    startBtn.onclick=()=>{
      startBtn.disabled=true; completeBtn.disabled=false;
      drillInterval=setInterval(()=>{
        if(!drillPaused){ drillSeconds++; const mm=Math.floor(drillSeconds/60); const ss=String(drillSeconds%60).padStart(2,'0'); tEl.textContent=`${mm}:${ss}`; }
      },1000);
    };
    completeBtn.onclick=()=>{
      clearInterval(drillInterval); markDrillComplete(sportId, drill, drillSeconds); closeDrillModal();
    };
    m.querySelector('.close').onclick=()=> closeDrillModal();
  }
  function closeDrillModal(){ const m=document.getElementById('drill-modal'); clearInterval(drillInterval); drillInterval=null; m.classList.remove('show'); m.setAttribute('aria-hidden','true'); }

  function markDrillComplete(sportId, drill, seconds){
    if(!auth.isAuthenticated()){ if(confirm('Log in to record drill completion?')) location.href='/signup.html'; return; }
    const u=getUser(); u.history=u.history||[];
    const mins=Math.round(seconds/60)||Math.max(1, Math.round(drill.dur||1));
    u.history.unshift({id:`drill-${Date.now()}`,sport:sportId,title:drill.name,duration:mins,date:new Date().toISOString()});
    if(u.history.length>200) u.history=u.history.slice(0,200);
    saveUser(u); showToast('Drill recorded — well done!'); updateStats();
  }

  function updateStats(){
    const u=getUser(); const h=u?.history||[]; const matches=h.length;
    function pct(filterFn){ return Math.min(100, Math.round((h.filter(filterFn).length/Math.max(1,matches))*100)); }
    document.getElementById('stat-matches').textContent=matches;
    document.getElementById('stat-speed').textContent=`${pct(d=>d.duration>=10)}%`;
    document.getElementById('stat-stamina').textContent=`${pct(d=>d.duration>=20)}%`;
    document.getElementById('stat-agility').textContent=`${pct(d=>d.duration<10)}%`;
  }

  // --- Hero animated phrases ---
  const hphr=document.getElementById('hero-sport-anim'); const phrases=['Speed','Agility','Power','Tactics']; let hpi=0;
  setInterval(()=>{ if(hphr){ hpi=(hpi+1)%phrases.length; hphr.textContent=phrases[hpi]; } },1800);

  // --- Filters ---
  document.getElementById('sport-search').addEventListener('input', debounce(renderSports));
  document.getElementById('filter-type').addEventListener('change', renderSports);
  document.getElementById('filter-diff').addEventListener('change', renderSports);
  document.getElementById('sort-by').addEventListener('change', renderSports);
  document.getElementById('reset-sports-filters').addEventListener('click', function(){
    document.getElementById('sport-search').value=''; document.getElementById('filter-type').value='all';
    document.getElementById('filter-diff').value='all'; document.getElementById('sort-by').value='popularity';
    renderSports();
  });

  // --- Sticky CTA for mobile ---
  let lastY=window.scrollY;
  const stickyCTA=document.getElementById('sports-sticky-cta');
  window.addEventListener('scroll', ()=>{
    if(!stickyCTA) return;
    stickyCTA.style.display=(window.innerWidth<700 && window.scrollY>200 && window.scrollY>lastY)?'block':'none';
    lastY=window.scrollY;
  });
  document.getElementById('sticky-start')?.addEventListener('click', ()=>{
    const first=document.querySelector('.sport-card .open'); if(first) first.click(); else showToast('Select a sport to start');
  });

  // --- Initial render ---
  renderSports(); renderFavorites(); updateStats();

  // expose for debugging
  window.sports={renderSports, openDrillModal, SPORTS};
});