/* Conexión con Firebase, la nube de la farmacia (proyecto control-peso-farmacias).
   Estas claves no son secretas: toda app web de Firebase las lleva a la vista. La protección está en las reglas de Firestore. */

const firebaseConfig = {
  apiKey: "AIzaSyBsHkOXnyYM3mqbFHYg-D6G6Exy-jTfYmg",
  authDomain: "control-peso-farmacias.firebaseapp.com",
  projectId: "control-peso-farmacias",
  storageBucket: "control-peso-farmacias.firebasestorage.app",
  messagingSenderId: "1050068456014",
  appId: "1:1050068456014:web:0fa7945d571567c7f5291f"
};

window.FIREBASE_CONFIG = firebaseConfig;
