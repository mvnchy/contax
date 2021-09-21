// firebase / firestore

// libraries  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// database info
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAdt3ZvJe8GEDxW5YVc2uKkrx3g67tXgZI",
  authDomain: "contax-2b7ab.firebaseapp.com",
  projectId: "contax-2b7ab",
  storageBucket: "contax-2b7ab.appspot.com",
  messagingSenderId: "512745151185",
  appId: "1:512745151185:web:29133d8b91e5ad9f8a83f0"
});

// firestore init
const db = getFirestore();

