// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmlIvH7zzbysCBhLAhgUPtlgneLzRSSls",
  authDomain: "fir-conceptual-c77c0.firebaseapp.com",
  projectId: "fir-conceptual-c77c0",
  storageBucket: "fir-conceptual-c77c0.firebasestorage.app",
  messagingSenderId: "608316587713",
  appId: "1:608316587713:web:8bd7dbd198e31b31069e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth