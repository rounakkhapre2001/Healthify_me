// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 👈 ADD this line
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG_-haRkMbtEuRqw5gKHLFUnxSVlrzMgY",
  authDomain: "healthifyme-d1a85.firebaseapp.com",
  projectId: "healthifyme-d1a85",
  storageBucket: "healthifyme-d1a85.appspot.com",
  messagingSenderId: "157018225735",
  appId: "1:157018225735:web:57122bef30eb617f254562",
  measurementId: "G-PBQF6XW0WK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
export const db = getFirestore(app); // 👈 Export Firestore