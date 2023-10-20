

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAqp9mVkdlhNV2l6gb4mikxWGYd1TEJBa0",
    authDomain: "agenda-pacientes-2cd22.firebaseapp.com",
    projectId: "agenda-pacientes-2cd22",
    storageBucket: "agenda-pacientes-2cd22.appspot.com",
    messagingSenderId: "871997257295",
    appId: "1:871997257295:web:f2025759371a19f5cc9c3a",
    measurementId: "G-1Q1YHQRX8V"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();



export { db, firebaseConfig };