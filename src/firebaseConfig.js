// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXZggVTyYaoakx-0bxOQv5BQZKfsRnTyo",
  authDomain: "linkedin-clo-a66b1.firebaseapp.com",
  projectId: "linkedin-clo-a66b1",
  storageBucket: "linkedin-clo-a66b1.appspot.com",
  messagingSenderId: "786807505340",
  appId: "1:786807505340:web:5817f3734ed5d059e46bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };