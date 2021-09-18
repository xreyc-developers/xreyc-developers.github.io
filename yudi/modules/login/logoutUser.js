import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { firebaseConfig } from '../firebase/firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

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
          const userLogged = userCredential.user;
          console.log(userLogged);
        })
        .catch((error) => {
          console.log(error.message);
        });

    })  // LOGIN USER
    .catch((err) => {
      console.log("Something went wrong.");
    })
}
