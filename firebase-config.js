// Importando os módulos necessários do Firebase via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8mRK6WzTVfN_iTVPcW319GKUaTSL8gwo",
  authDomain: "nexuscore-4c191.firebaseapp.com",
  projectId: "nexuscore-4c191",
  storageBucket: "nexuscore-4c191.firebasestorage.app",
  messagingSenderId: "439441997971",
  appId: "1:439441997971:web:86ea28a43a1bf0c2c38d66",
  measurementId: "G-7CWTYYP29H"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
