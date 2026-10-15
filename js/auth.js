
const auth = (function () {
  const USERS_KEY = 'users';
  const CURRENT_KEY = 'user'; 

  function _readUsers() { try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch { return []; } }
  function _writeUsers(u){ localStorage.setItem(USERS_KEY, JSON.stringify(u)); }

  function findUserByEmail(email){ if(!email) return null; return _readUsers().find(u=>u.email.toLowerCase()===email.toLowerCase()) || null; }

  function signup(user){
    if(!user || !user.email || !user.password) return {success:false,msg:'Invalid data'};
    if (findUserByEmail(user.email)) return {success:false,msg:'Email already registered'};
    const users = _readUsers();
    users.push(user);
    _writeUsers(users);
   
    localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
    return {success:true};
  }

  function login(email, password, remember){
    const user = findUserByEmail(email);
    if(!user) return {success:false, msg:'No account with this email'};
    if(user.password !== password) return {success:false, msg:'Incorrect password'};
    if (remember) localStorage.setItem(CURRENT_KEY, JSON.stringify(user)); else sessionStorage.setItem(CURRENT_KEY, JSON.stringify(user));
    return {success:true};
  }

  function logout(){ localStorage.removeItem(CURRENT_KEY); sessionStorage.removeItem(CURRENT_KEY); }

  function isAuthenticated(){ return !!getCurrentUser(); }

  function getCurrentUser(){ try { return JSON.parse(localStorage.getItem(CURRENT_KEY)) || JSON.parse(sessionStorage.getItem(CURRENT_KEY)) || null; } catch { return null; } }

  function saveCurrentUser(user){ if(!user) return; 
   
    const users = _readUsers();
    const idx = users.findIndex(u=>u.email && user.email && u.email.toLowerCase()===user.email.toLowerCase());
    if (idx >= 0) users[idx] = user; else users.push(user);
    _writeUsers(users);
  
    if (sessionStorage.getItem(CURRENT_KEY)) sessionStorage.setItem(CURRENT_KEY, JSON.stringify(user));
    localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
  }

  function requireAuth(redirectTo='../login.html'){
    if(!isAuthenticated()){ location.href = redirectTo; }
  }

 
  return { signup, login, logout, isAuthenticated, getCurrentUser, saveCurrentUser, requireAuth, findUserByEmail };
})();



