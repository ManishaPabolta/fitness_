document.addEventListener('DOMContentLoaded', () => {

  /* ========= HELPER ========= */
  function c(id){ return document.getElementById(id); }

  /* ========= CALORIE CALCULATOR ========= */
  const calForm = c('cal-form');
  const calResult = c('cal-result');
  const personalNote = c('personal-note');

  calForm?.addEventListener('submit', e => {
    e.preventDefault();

    const weight = +c('c-weight').value;
    const height = +c('c-height').value;
    const age = +c('c-age').value;
    const gender = c('c-gender').value;
    const activity = c('c-activity').value;
    const goal = c('c-goal').value;

    let bmr = gender === 'Male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

    const mult = { Sedentary:1.2, Light:1.375, Moderate:1.55, Active:1.725 }[activity];
    let calories = bmr * mult;

    if (goal === 'Lose') calories -= 500;
    if (goal === 'Gain') calories += 500;

    const protein = Math.round(weight * 1.5);
    const fat = Math.round((calories * 0.25) / 9);
    const carbs = Math.round((calories - (protein*4 + fat*9)) / 4);

    calResult.innerHTML = `
      <p><strong>Calories/day:</strong> ${Math.round(calories)}</p>
      <p><strong>Macros:</strong> Protein ${protein}g | Fat ${fat}g | Carbs ${carbs}g</p>
    `;
    personalNote.textContent = 'Adjust portions weekly.';
  });

  /* ========= WATER TRACKER ========= */
  let water = 0;
  const waterVal = c('water-val');

  c('water-add')?.addEventListener('click', () => {
    water++;
    waterVal.textContent = `${water} glass${water > 1 ? 'es' : ''}`;
  });

  /* ========= DIET PLANS ========= */
  const samplePlans = [
    {
      name:'Veg Beginner',
      type:'Veg',
      meals:['Oatmeal','Salad','Paneer'],
      recipes:[{ name:'Oatmeal', cal:150 }]
    },
    {
      name:'Non-Veg Strength',
      type:'NonVeg',
      meals:['Eggs','Chicken'],
      recipes:[{ name:'Grilled Chicken', cal:300 }]
    }
  ];

  const plansList = c('sample-plans-list');
  const filterBtns = document.querySelectorAll('.diet-filters .chip');

  function renderPlans(filter='All'){
    if(!plansList) return;
    plansList.innerHTML = '';

    samplePlans
      .filter(p => filter === 'All' || p.type === filter)
      .forEach(p => {
        const card = document.createElement('div');
        card.className = 'card plan-card';

        card.innerHTML = `
          <h4>${p.name}</h4>
          <p>${p.meals.join(', ')}</p>
          <div class="plan-recipes" style="display:none"></div>
          <button class="btn small outline">Show Recipes</button>
        `;

        const btn = card.querySelector('button');
        const box = card.querySelector('.plan-recipes');

        btn.onclick = () => {
          const open = box.style.display === 'block';
          box.style.display = open ? 'none' : 'block';
          btn.textContent = open ? 'Show Recipes' : 'Hide Recipes';
          box.innerHTML = p.recipes.map(r =>
            `<p><strong>${r.name}</strong> – ${r.cal} cal</p>`
          ).join('');
        };

        plansList.appendChild(card);
      });
  }
  renderPlans();

  filterBtns.forEach(b => {
    b.onclick = () => {
      filterBtns.forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      renderPlans(b.dataset.filter);
    };
  });

  /* ========= NUTRITION CARDS ========= */
  const nutritionCards = [
    { title:'Protein', desc:'Muscle repair' },
    { title:'Fibre', desc:'Digestion' },
    { title:'Omega-3', desc:'Heart health' },
    { title:'Vitamin D', desc:'Bone health' }
  ];

  const nutritionBox = c('nutrition-cards');

  nutritionCards.forEach(n => {
    if(!nutritionBox) return;
    const card = document.createElement('div');
    card.className = 'card nutrition-card';
    card.innerHTML = `<h4>${n.title}</h4><p>${n.desc}</p>`;
    nutritionBox.appendChild(card);
  });

  /* ========= RECIPE GALLERY (ADD / EDIT / DELETE / VIEW) ========= */
  const form = c('recipe-form');
  const list = c('recipe-list');

  let recipes = [];
  let editIndex = null;

  form?.addEventListener('submit', e => {
    e.preventDefault();

    const name = c('r-name').value.trim();
    const cal = c('r-cal').value;
    const ings = c('r-ings').value;
    const file = c('r-img').files[0];

    const saveRecipe = (img=null) => {
      const data = { name, cal, ings, img };

      if (editIndex !== null) {
        recipes[editIndex] = data;
        editIndex = null;
      } else {
        recipes.push(data);
      }

      form.reset();
      renderRecipes();
    };

    if (file) {
      const reader = new FileReader();
      reader.onload = () => saveRecipe(reader.result);
      reader.readAsDataURL(file);
    } else {
      saveRecipe();
    }
  });

  function renderRecipes(){
    if(!list) return;
    list.innerHTML = '';

    recipes.forEach((r,i)=>{
      const card = document.createElement('div');
      card.className = 'recipe-card';

      card.innerHTML = `
        ${r.img ? `<img src="${r.img}" alt="">` : ''}
        <h4>${r.name}</h4>
        <p>${r.cal} kcal</p>
        <div class="card-actions">
          <button class="view">View</button>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;

      card.querySelector('.view').onclick = () =>
        alert(`Ingredients:\n${r.ings}`);

      card.querySelector('.delete').onclick = () => {
        recipes.splice(i,1);
        renderRecipes();
      };

      card.querySelector('.edit').onclick = () => {
        c('r-name').value = r.name;
        c('r-cal').value = r.cal;
        c('r-ings').value = r.ings;
        editIndex = i;
      };

      list.appendChild(card);
    });
  }

  /* ========= GROCERY LIST ========= */
  const gForm = c('g-form');
  const gList = c('g-list');
  let groceries = [];

  gForm?.addEventListener('submit', e => {
    e.preventDefault();
    const item = c('g-item').value.trim();
    if (!item) return;
    groceries.push(item);
    c('g-item').value = '';
    renderGroceries();
  });

  function renderGroceries(){
    if(!gList) return;
    gList.innerHTML = '';
    groceries.forEach((g,i)=>{
      const li = document.createElement('li');
      li.textContent = g;
      const btn = document.createElement('button');
      btn.textContent = '❌';
      btn.onclick = ()=>{ groceries.splice(i,1); renderGroceries(); };
      li.appendChild(btn);
      gList.appendChild(li);
    });
  }

});