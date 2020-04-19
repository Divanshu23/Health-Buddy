     //---------------------------------------------------------------------
     // Your web app's Firebase configuration (9 lines of code)
     // Replace the configuration with YOUR project's API information
     // copied from the firebase console (settings) of your project.
     //---------------------------------------------------------------------
     var firebaseConfig = {
        apiKey: "AIzaSyCWag0kYZd9LEGqlSGste7Zg3IgMrEVTeA",
        authDomain: "calendar-c17d8.firebaseapp.com",
        databaseURL: "https://calendar-c17d8.firebaseio.com",
        projectId: "calendar-c17d8",
        storageBucket: "calendar-c17d8.appspot.com",
        messagingSenderId: "57704341886",
        appId: "1:57704341886:web:d8a1091635ca2e6894d32f"
     };
     //------------------------------------------------
     // Initialize Firebase and Firestore reference
     // Do not delete!
     //------------------------------------------------
     firebase.initializeApp(firebaseConfig);
     const db = firebase.firestore();