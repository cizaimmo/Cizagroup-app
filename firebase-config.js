// -----------------------------------------------------
//  CIZA GROUP — Firebase Configuration
//  Fichier central pour initialiser Firebase (Auth, etc.)
// -----------------------------------------------------

// Import Firebase modules (disponibles via CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// -----------------------------------------------------
//  Configuration Firebase (TES VRAIES DONNÉES)
// -----------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyBAiJHbBvRO6cDFpm6C-5mQk6SiTtzcI8o",
  authDomain: "cizagroup-app.firebaseapp.com",
  projectId: "cizagroup-app",
  storageBucket: "cizagroup-app.firebasestorage.app",
  messagingSenderId: "930936264084",
  appId: "1:930936264084:web:5395360e54bf17bf492b81",
  measurementId: "G-1KX6EN1KST"
};

// -----------------------------------------------------
//  Initialisation Firebase
// -----------------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// -----------------------------------------------------
//  Export des modules pour les autres fichiers HTML
// -----------------------------------------------------
export { auth };
