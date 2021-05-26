import { firebase } from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyA8W0Re0P9p365GK_iqxcdUFqEQe__ASOQ",
  authDomain: "app-academia-nextjs.firebaseapp.com",
  projectId: "app-academia-nextjs",
  storageBucket: "app-academia-nextjs.appspot.com",
  messagingSenderId: "210290388510",
  appId: "1:210290388510:web:7e36ff393a0bcfa5ab480f",
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app;

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
