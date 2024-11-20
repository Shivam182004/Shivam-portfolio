import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGqoyhHxWyHZb6QsyzudcVntBVsiamVlc",
  authDomain: "shivportfolio-6255c.firebaseapp.com",
  projectId: "shivportfolio-6255c",
  storageBucket: "shivportfolio-6255c.appspot.com", // Fixed
  messagingSenderId: "815757149262",
  appId: "1:815757149262:web:22a00a2703b721836f6f1f",
  measurementId: "G-KLWR9HVRTT",
  databaseURL: "https://shivportfolio-6255c-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Realtime Database
export const firestore = getFirestore(app);
export const database = getDatabase(app);
