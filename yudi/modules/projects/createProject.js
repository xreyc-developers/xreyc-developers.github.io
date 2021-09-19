import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
import { firebaseConfig } from '../firebase/firebase-config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const url = window.location.origin + "/yudi/";

/* LOGIN */
export async function createProject() {
  try{
    const docRef = await addDoc(collection(db, "users"), [{
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    },{
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    }]);
    return docRef.id;
  } catch(err) {
    console.log(err);
  }
}
