import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
import { firebaseConfig } from '../firebase/firebase-config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const url = window.location.origin + "/yudi/";

/* GET ALL PROJECTS */
export async function getAllProjects() {
  try{
    const q = query(collection(db, "projects"))
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  } catch(err) {
    console.log(err);
  }
}
