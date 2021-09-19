import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { firebaseConfig } from '../firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const url = window.location.origin + "/yudi/";
const popup = document.querySelector('div.popup-container');

/* LOGIN */
export async function loginUser(id) {
  try{
    popup.style.display = "block";
    // GET USER FROM JSON
    const rawUsers =  await fetch('./modules/firebase/login/users.json');
    const users = await rawUsers.json();
    const email = users[id].email;
    const password = users[id].password;
    // AUTHENTICATE USER
    const authResponse = await signInWithEmailAndPassword(auth, email, password);
    const loggedUser = authResponse.user;
    setTimeout(() => {
      popup.style.display = "none";
      window.location.replace(url + "pages/projects/");
    },2000)
  } catch(err) {
    console.log(err);
  }
}

/* LOGOUT */
export async function logoutUser() {
  try{
    auth.signOut();
  } catch(err) {
    console.log(err);
  }
}

/* CHECK AUTH */
export async function checkAuth() {
  try {
    auth.onAuthStateChanged(function(user) {
      if (!user) window.location.replace(url);
    });
  } catch(err) {
    console.log(err);
  }
}
