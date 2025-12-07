import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNtB3CPk8UnpsAakI2mmGNE36GGDnTDLQ",
  authDomain: "clone-ef1c0.firebaseapp.com",
  projectId: "clone-ef1c0",
  storageBucket: "clone-ef1c0.firebasestorage.app",
  messagingSenderId: "489644169708",
  appId: "1:489644169708:web:4640488be9ca04382a08c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);
