// firebase-config.js
const firebaseConfig = {
  apiKey: "TA_VRAIE_API_KEY",
  authDomain: "TON_PROJET.firebaseapp.com",
  projectId: "TON_PROJET",
  appId: "TON_APP_ID"
};

// Initialisation unique
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
