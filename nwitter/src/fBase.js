// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add the Firebase AUthentication JS SDK and initalize Firebase Authentication
import { getAuth } from "firebase/auth";
import { app as firebase } from "fBase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS43xJINvZHwCizUpp0mLQgqNqm9acDHw",
  authDomain: "nwitter-1c711.firebaseapp.com",
  projectId: "nwitter-1c711",
  storageBucket: "nwitter-1c711.appspot.com",
  messagingSenderId: "494102429102",
  appId: "1:494102429102:web:52c56279620c3a37ffdc3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export { app };