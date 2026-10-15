# Fitness (Multi-page HTML/CSS/JS)

Local multi-page static site scaffold with LocalStorage-based authentication and profile. Features included:

- Signup / Login / Logout
- Password show/hide, form validation, duplicate email check
- Remember me & auto-login
- LocalStorage `users` list + current user saved as `user` (JSON)
- Protected pages: `pages/dashboard.html`, `pages/profile.html`
- Profile: view/edit, photo upload (base64), BMI, completion %
- Header injected on every page, dynamic auth links
- Placeholder pages: Workouts, Sports, Diet, About, Contact, FAQ, Settings

How to test:
1. Open `signup.html` in your browser and create an account.
2. Visit `pages/dashboard.html` or `pages/profile.html` (they are protected, will redirect if not logged-in).
3. Use browser DevTools > Application > Local Storage to inspect `users` and `user` keys.

Next steps: implement workout & diet logic, charts, trackers, advanced UI and accessibility tweaks.
