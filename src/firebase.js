import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMdEvCURS8b1WeEGXnxpqYdGP3zT58d4w",
  authDomain: "react-socmed-a1334.firebaseapp.com",
  projectId: "react-socmed-a1334",
  storageBucket: "react-socmed-a1334.appspot.com",
  messagingSenderId: "279681012449",
  appId: "1:279681012449:web:7efb4e1325042aa6129da0",
  measurementId: "G-SK5J93R7SM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
