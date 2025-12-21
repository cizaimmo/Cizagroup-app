<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "REMPLACE_API_KEY",
    authDomain: "cizagroup-app.firebaseapp.com",
    projectId: "cizagroup-app",
    storageBucket: "cizagroup-app.appspot.com",
    messagingSenderId: "REMPLACE_SENDER_ID",
    appId: "REMPLACE_APP_ID"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
</script>
