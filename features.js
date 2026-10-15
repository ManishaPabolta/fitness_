const workouts = [
/* ================= CARDIO (14) ================= */
{
  id: 1,
  name: "Running",
  category: "Cardio",
  cover: "https://images.unsplash.com/photo-1546484959-fb8c2f66e1b8",
  desc: "Running strengthens the heart, burns calories, and improves stamina.",
  images: [
    "https://images.unsplash.com/photo-1546484959-fb8c2f66e1b8",
    "https://images.unsplash.com/photo-1502904550040-7534597429ae"
  ],
  steps: ["Warm up 5 min", "Run 20–30 min", "Cool down & stretch"]
},
{
  id: 2,
  name: "Skipping Rope",
  category: "Cardio",
  cover: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  desc: "Jump rope boosts endurance, coordination, and fat loss.",
  images: [
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e"
  ],
  steps: ["Jump lightly", "Keep core tight", "3 rounds of 2 min"]
},
{
  id: 3,
  name: "Cycling",
  category: "Cardio",
  cover: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  desc: "Cycling improves leg strength and cardiovascular fitness.",
  images: [
    "https://images.unsplash.com/photo-1517649763962-0c623066013b"
  ],
  steps: ["Adjust seat", "Pedal steadily", "20–40 min ride"]
},
{
  id: 4,
  name: "Jumping Jacks",
  category: "Cardio",
  cover: "https://images.unsplash.com/photo-1594737625785-cf53c62a8a17",
  desc: "Full-body cardio exercise that raises heart rate quickly.",
  images: [
    "https://images.unsplash.com/photo-1594737625785-cf53c62a8a17"
  ],
  steps: ["Jump feet out", "Hands overhead", "30–60 sec rounds"]
},
{
  id: 5,
  name: "Burpees",
  category: "Cardio",
  cover: "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0",
  desc: "Burns fat fast and improves explosive strength.",
  images: [
    "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0"
  ],
  steps: ["Squat → plank", "Push-up", "Jump high"]
},
{
  id: 6,
  name: "Mountain Climbers",
  category: "Cardio",
  cover: "https://images.unsplash.com/photo-1605296867424-35fc25c921f1",
  desc: "Strengthens core while increasing heart rate.",
  images: [
    "https://images.unsplash.com/photo-1605296867424-35fc25c921f1"
  ],
  steps: ["Plank position", "Knees to chest", "Fast pace"]
},
{
  id: 7,
  name: "High Knees",
  category: "Cardio",
  cover: "https://images.unsplash.com/photo-1594737625795-7bfa8e82c48a",
  desc: "Improves speed, agility and cardiovascular endurance.",
  images: [
    "https://images.unsplash.com/photo-1594737625795-7bfa8e82c48a"
  ],
  steps: ["Lift knees high", "Pump arms", "30 sec intervals"]
},
{
  id: 8,
  name: "Stair Climbing",
  category: "Cardio",
  cover: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77",
  desc: "Excellent cardio and leg workout.",
  images: [
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77"
  ],
  steps: ["Climb steadily", "Use arms", "10–15 min"]
},

/* ================= STRENGTH (14) ================= */
{
  id: 15,
  name: "Push Ups",
  category: "Strength",
  cover: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00",
  desc: "Builds chest, shoulders and arms.",
  images: [
    "https://images.unsplash.com/photo-1598971639058-fab3c3109a00"
  ],
  steps: ["Straight body", "Lower chest", "10–15 reps"]
},
{
  id: 16,
  name: "Squats",
  category: "Strength",
  cover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
  desc: "Strengthens legs, hips and glutes.",
  images: [
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155"
  ],
  steps: ["Feet shoulder-width", "Push hips back", "12–15 reps"]
},
{
  id: 17,
  name: "Lunges",
  category: "Strength",
  cover: "https://images.unsplash.com/photo-1594381898411-846e7d193883",
  desc: "Improves leg strength and balance.",
  images: [
    "https://images.unsplash.com/photo-1594381898411-846e7d193883"
  ],
  steps: ["Step forward", "Lower knee", "Alternate legs"]
},
{
  id: 18,
  name: "Plank",
  category: "Strength",
  cover: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8",
  desc: "Core strengthening exercise.",
  images: [
    "https://images.unsplash.com/photo-1562771379-eafdca7a02f8"
  ],
  steps: ["Elbows under shoulders", "Hold 30–60 sec"]
},
{
  id: 19,
  name: "Dumbbell Curls",
  category: "Strength",
  cover: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
  desc: "Builds biceps strength.",
  images: [
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
  ],
  steps: ["Curl slowly", "Squeeze biceps", "10–12 reps"]
},

/* ================= YOGA (12) ================= */
{
  id: 29,
  name: "Surya Namaskar",
  category: "Yoga",
  cover: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851",
  desc: "Improves flexibility, digestion and overall health.",
  images: [
    "https://images.unsplash.com/photo-1602192509154-0b900ee1f851"
  ],
  steps: ["12 yoga poses", "Sync breath", "5–10 rounds"]
},
{
  id: 30,
  name: "Tree Pose",
  category: "Yoga",
  cover: "https://images.unsplash.com/photo-1554311884-415bfda1f1f4",
  desc: "Enhances balance and focus.",
  images: [
    "https://images.unsplash.com/photo-1554311884-415bfda1f1f4"
  ],
  steps: ["Stand on one leg", "Hands overhead", "Hold 30 sec"]
},
{
  id: 31,
  name: "Cobra Pose",
  category: "Yoga",
  cover: "https://images.unsplash.com/photo-1593810451137-5dc55105dace",
  desc: "Strengthens spine and opens chest.",
  images: [
    "https://images.unsplash.com/photo-1593810451137-5dc55105dace"
  ],
  steps: ["Lie down", "Lift chest", "Hold 20 sec"]
},
{
  id: 32,
  name: "Child’s Pose",
  category: "Yoga",
  cover: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3",
  desc: "Relieves stress and relaxes the body.",
  images: [
    "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3"
  ],
  steps: ["Sit back on heels", "Stretch arms", "Relax"]
}
];
const list = document.getElementById("workoutList");
const modal = document.getElementById("workoutModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalGallery = document.getElementById("modalGallery");
const modalSteps = document.getElementById("modalSteps");
const closeBtn = document.getElementById("closeModal");

/* ========== RENDER WORKOUTS ========== */
function renderWorkouts(filter = "All") {
  if (!list) return;

  list.innerHTML = "";

  workouts
    .filter(w => filter === "All" || w.category === filter)
    .forEach(w => {
      const card = document.createElement("div");
      card.className = "workout-card";

      card.innerHTML = `
        <img src="${w.cover}" alt="${w.name}" loading="lazy">
        <h4>${w.name}</h4>
        <span class="small muted">${w.category}</span>
      `;

      card.addEventListener("click", () => openModal(w));
      list.appendChild(card);
    });
}

/* ========== OPEN MODAL ========== */
function openModal(workout) {
  if (!modal) return;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  modalTitle.textContent = workout.name;
  modalDesc.textContent = workout.desc;

  // Images
  modalGallery.innerHTML = "";
  workout.images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    image.loading = "lazy";
    modalGallery.appendChild(image);
  });

  // Steps
  modalSteps.innerHTML = "";
  workout.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    modalSteps.appendChild(li);
  });
}

/* ========== CLOSE MODAL ========== */
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

/* Close on outside click */
modal.addEventListener("click", e => {
  if (!e.target.closest(".modal-content")) {
    closeModal();
  }
});


/* ========== FILTER BUTTONS ========== */
document.querySelectorAll(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".chip.active")?.classList.remove("active");
    btn.classList.add("active");
    renderWorkouts(btn.dataset.filter);
  });
});

/* ========== INITIAL LOAD ========== */
document.addEventListener("DOMContentLoaded", () => {
  renderWorkouts("All");
});
