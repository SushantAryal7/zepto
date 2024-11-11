// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtqcrj2eg8jTT9idhNHxHrwawPqT7NAdI",
  authDomain: "zepto-12652.firebaseapp.com",
  projectId: "zepto-12652",
  storageBucket: "zepto-12652.firebasestorage.app",
  messagingSenderId: "68048821994",
  appId: "1:68048821994:web:48cd883df393b3e818c193",
  measurementId: "G-VSK5W6N8BD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
