import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { firebaseConfig } from '../firebase/firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const url = window.location.origin + "/yudi/";

export function loginUser(id) {
  fetch('./modules/login/users.json')
    .then((data) => {
      return data.json();
    })
    .then((users) => {
      const email = users[id].email;
      const password = users[id].password;
      // LOGIN USER
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const loggedUser = userCredential.user;
          localStorage.setItem('uid', loggedUser.uid);
          localStorage.setItem('accessToken', loggedUser.accessToken);
          localStorage.setItem('refreshToken', loggedUser.stsTokenManager.refreshToken);
          localStorage.setItem('loggedIn', new Date());
          window.location.replace(url + "pages/projects/");
        })
        .catch((error) => {
          console.log(error.message);
        });

    })  // LOGIN USER
    .catch((err) => {
      console.log("Something went wrong.");
    })
}
