var firebaseConfig = {
    apiKey: "AIzaSyCylyqh1VYPxnVJndIKQ5SoJ-3MXg5YbVc",
    authDomain: "health-buddy-c9e01.firebaseapp.com",
    databaseURL: "https://health-buddy-c9e01.firebaseio.com",
    projectId: "health-buddy-c9e01",
    storageBucket: "health-buddy-c9e01.appspot.com",
    messagingSenderId: "565599493401",
    appId: "1:565599493401:web:7a7ef3990dcef1fbfd7988",
    measurementId: "G-WBHNYHX6C3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();