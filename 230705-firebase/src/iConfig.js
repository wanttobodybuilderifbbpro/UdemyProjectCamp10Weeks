// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
 } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx7eZno5AYhvIR83pfSgTRUL2ub0FFbm8",
  authDomain: "udemyprojectcamp10weeks.firebaseapp.com",
  projectId: "udemyprojectcamp10weeks",
  storageBucket: "udemyprojectcamp10weeks.appspot.com",
  messagingSenderId: "931329859830",
  appId: "1:931329859830:web:54b89a8dd52605691a8cd7",
  measurementId: "G-YLGC4FT5GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default auth;