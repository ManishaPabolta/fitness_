
document.addEventListener('DOMContentLoaded', function () {
 
  const tagline = document.getElementById('tagline');
  const phrases = ['Build strength.','Eat smart.','Train consistently.','Join community.'];
  let tIdx = 0;
  if (tagline) setInterval(()=>{ tIdx = (tIdx+1)%phrases.length; tagline.textContent = phrases[tIdx]; }, 2500);

 
  const counters = document.querySelectorAll('.counter');
  function animateCounters(){ counters.forEach(c => {
    const target = +c.dataset.target || 0; const start = 0; const duration = 1200; let startTime = null;
    function step(ts){ if (!startTime) startTime = ts; const progress = Math.min((ts-startTime)/duration,1); c.textContent = Math.floor(progress * (target-start) + start); if (progress<1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }); }
 
  let countersDone=false; window.addEventListener('scroll', function(){ if (countersDone) return; const el=document.querySelector('.counters'); if (!el) return; const r=el.getBoundingClientRect(); if (r.top < window.innerHeight-100){ animateCounters(); countersDone=true; } });

  const timeline = document.getElementById('timeline'); if (timeline){ timeline.querySelectorAll('li').forEach(li => { li.addEventListener('click', ()=>{ timeline.querySelectorAll('li').forEach(x=>x.classList.remove('active')); li.classList.add('active'); }); }); }


  const play = document.getElementById('play-intro'); if (play) play.addEventListener('click', ()=>{ alert('Intro video placeholder — implement video player here.'); });

 
  const details = document.querySelectorAll('.faq-item');
  details.forEach(d => {
    const s = d.querySelector('summary');
    if (s) s.setAttribute('role','button');
    d.addEventListener('toggle', () => {
      if (d.open) {
        details.forEach(o => { if (o !== d) o.open = false; });
        if (s) s.setAttribute('aria-expanded','true');
      } else { if (s) s.setAttribute('aria-expanded','false'); }
    });
  });

  
  document.addEventListener('keydown', function (e){ if (e.key === 'Enter' && document.activeElement && document.activeElement.matches('#timeline li')){ document.activeElement.click(); } });
});