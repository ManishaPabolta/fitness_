/* dashboard.js - client-side challenge participation and dashboard enhancements */
(function(){
  const CHALLENGE_ID = 'weekly-burn-1000';
  const CHALLENGE = { id: CHALLENGE_ID, name: 'Weekly Burn Challenge', goal: 'Burn 1000 kcal in 7 days' };

  function getUsers(){ try { return JSON.parse(localStorage.getItem('users')) || []; } catch { return []; } }
  function getCurrentUser(){ return auth.isAuthenticated() ? auth.getCurrentUser() : null; }

  function userJoined(u, id){ if(!u) return false; return (u.challenges || []).some(c => c.id === id && c.joined); }

  function joinChallenge(id){ if(!auth.isAuthenticated()){ if (confirm('You need an account to join challenges. Signup now?')) location.href='/signup.html'; return; } const u = auth.getCurrentUser(); u.challenges = u.challenges || []; if (!u.challenges.find(c=>c.id===id)){ u.challenges.push({ id, name: CHALLENGE.name, joinedAt: new Date().toISOString(), daysCompleted: {} }); auth.saveCurrentUser(u); showToast('Joined ' + CHALLENGE.name); } else showToast('Already joined'); renderChallenges(); renderDashboardSummary(); }

  function leaveChallenge(id){ if(!auth.isAuthenticated()) return; const u = auth.getCurrentUser(); u.challenges = (u.challenges||[]).filter(c=>c.id!==id); auth.saveCurrentUser(u); showToast('Left challenge'); renderChallenges(); renderDashboardSummary(); }

  function completeToday(id){ if(!auth.isAuthenticated()){ if (confirm('Login to record participation')) location.href='/login.html'; return; } const u = auth.getCurrentUser(); const ch = (u.challenges||[]).find(c=>c.id===id); if(!ch){ showToast('You must join the challenge first'); return; } const today = new Date().toISOString().slice(0,10); ch.daysCompleted = ch.daysCompleted || {}; if (ch.daysCompleted[today]) { showToast('You already marked today'); return; } ch.daysCompleted[today]=true; auth.saveCurrentUser(u); showToast('Marked today as completed'); renderChallenges(); renderDashboardSummary(); }

  function countParticipants(id){ return getUsers().filter(u => (u.challenges||[]).some(c=>c.id===id)).length; }

  function renderChallenges(){ const el = document.getElementById('challenges'); if(!el) return; el.innerHTML='';
   
    const card = document.createElement('article'); card.className='card challenge-card';
    const participants = countParticipants(CHALLENGE_ID);
    const u = getCurrentUser(); const joined = userJoined(u, CHALLENGE_ID);
    card.innerHTML = `
      <h3>${CHALLENGE.name}</h3>
      <div class="small muted">Goal: ${CHALLENGE.goal}</div>
      <div style="margin-top:8px;display:flex;gap:8px;align-items:center">
        <button class="btn" id="challenge-join">${joined? 'Joined': 'Join'}</button>
        <button class="btn ghost" id="challenge-leave" ${joined? '':'disabled'}>Leave</button>
        <button class="btn ghost" id="challenge-today" ${joined? '':'disabled'}>Mark today</button>
        <div style="margin-left:auto" class="small muted">Participants: <strong id="challenge-count">${participants}</strong></div>
      </div>
    `;
    el.appendChild(card);

    card.querySelector('#challenge-join').addEventListener('click', ()=> joinChallenge(CHALLENGE_ID));
    const leaveBtn = card.querySelector('#challenge-leave'); if (leaveBtn) leaveBtn.addEventListener('click', ()=> leaveChallenge(CHALLENGE_ID));
    const todayBtn = card.querySelector('#challenge-today'); if (todayBtn) todayBtn.addEventListener('click', ()=> completeToday(CHALLENGE_ID));

    if (u && u.challenges){ const ch = u.challenges.find(c=>c.id===CHALLENGE_ID); if (ch){ const days = Object.keys(ch.daysCompleted||{}).length; const progress = Math.min(100, Math.round((days/7)*100)); const progressBar = document.createElement('div'); progressBar.className='challenge-progress'; progressBar.innerHTML = `<div class="progress-fill" style="width:${progress}%"></div><div class="small muted" style="margin-top:8px">Progress: ${days} days completed ( ${progress}% )</div>`; el.appendChild(progressBar); } }
  }

  function renderDashboardSummary(){ 
    const u = getCurrentUser(); if (!u) return; const participants = countParticipants(CHALLENGE_ID); const countEl = document.getElementById('challenge-count'); if (countEl) countEl.textContent = participants; }

  function showToast(txt){ const t = document.getElementById('toast'); if(!t){ alert(txt); return; } t.textContent = txt; t.classList.add('show'); setTimeout(()=> t.classList.remove('show'),2200); }

  
  window.dashboard = { renderChallenges, joinChallenge, leaveChallenge, completeToday, renderDashboardSummary };

 
  document.addEventListener('DOMContentLoaded', function(){ if (document.getElementById('challenges')){ renderChallenges(); renderDashboardSummary(); } });
})();''