// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "flashdecks-ai.firebaseapp.com",
  projectId: "flashdecks-ai",
  storageBucket: "flashdecks-ai.appspot.com",
  messagingSenderId: "293551485666",
  appId: "1:293551485666:web:43b5ecadac1f9e77ea24bb",
  measurementId: "G-E8DJCM2FXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
