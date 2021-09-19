import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
import { firebaseConfig } from '../firebase-config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const url = window.location.origin + "/yudi/";

/* GET ALL PROJECTS */
export async function getAllUsers() {
  try{
    const q = query(collection(db, "users"))
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  } catch(err) {
    console.log(err);
  }
}
