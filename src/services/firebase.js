// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTGWL_qf4Sh1QtOKZZV-8-DkSAGJr9iGQ",
  authDomain: "fir-auth-2639f.firebaseapp.com",
  projectId: "fir-auth-2639f",
  storageBucket: "fir-auth-2639f.appspot.com",
  messagingSenderId: "226480333283",
  appId: "1:226480333283:web:59b8adec9001ab3d6080d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();