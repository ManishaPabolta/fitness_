/* charts.js - dashboard charts using Chart.js */
function renderCharts(){
  const user = auth.getCurrentUser(); if(!user) return;


  const weightData = (user.weightProgress && user.weightProgress.slice(-12)) || (user.history ? user.history.filter(h=>h.weight).slice(0,12).map(h=>({date:h.date,weight:h.weight})) : []);
  const wLabels = weightData.map(w=> new Date(w.date).toLocaleDateString());
  const wVals = weightData.map(w=> w.weight);

  const wCtx = document.getElementById('weightChart');
  if (wCtx && wLabels.length) {
    new Chart(wCtx, { type:'line', data:{ labels:wLabels, datasets:[{label:'Weight (kg)',data:wVals, borderColor:'#4caf50', backgroundColor:'rgba(76,175,80,0.15)', tension:0.3}] }, options:{ responsive:true, plugins:{legend:{display:false}} } });
  }

  const weekDays = 7; const counts = {}; for (let i=0;i<weekDays;i++){ const d = new Date(); d.setDate(d.getDate()- (weekDays-1-i)); counts[d.toISOString().slice(0,10)] = 0; }
  (user.history||[]).forEach(h=>{ const d = (new Date(h.date)).toISOString().slice(0,10); if (counts.hasOwnProperty(d)) counts[d] = counts[d] + 1; });
  const labels = Object.keys(counts).map(d=> new Date(d).toLocaleDateString()); const values = Object.values(counts);
  const w2 = document.getElementById('workoutChart'); if (w2) {
    new Chart(w2, { type:'bar', data:{ labels:labels, datasets:[{label:'Workouts',data:values, backgroundColor:'#2196f3'}] }, options:{ responsive:true, plugins:{legend:{display:false}} } });
  }
}
