import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { firebaseConfig } from '../firebase/firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const url = window.location.origin + "/yudi/";
const popup = document.querySelector('div.popup-container');

/* LOGIN */
export async function loginUser(id) {
  try{
    popup.style.display = "block";
    // GET USER FROM JSON
    const rawUsers =  await fetch('./modules/login/users.json');
    const users = await rawUsers.json();
    const email = users[id].email;
    const password = users[id].password;
    // AUTHENTICATE USER
    const authResponse = await signInWithEmailAndPassword(auth, email, password);
    const loggedUser = authResponse.user;
    localStorage.setItem('uid', loggedUser.uid);
    localStorage.setItem('accessToken', loggedUser.accessToken);
    localStorage.setItem('refreshToken', loggedUser.stsTokenManager.refreshToken);
    localStorage.setItem('loggedIn', new Date());
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
    localStorage.removeItem('uid');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('loggedIn');
  } catch(err) {
    console.log(err);
  }
}

/* CHECK AUTHENTICATION */
