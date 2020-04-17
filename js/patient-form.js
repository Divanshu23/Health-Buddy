/*Initialize our connection to FireBase*/
(function initFireBase(){
	var firebaseConfig = {
		apiKey: "AIzaSyCnuH7MAWGCHxJjI6nprVOXFzHb-JoME_Y",
		authDomain: "health-buddy-53e8c.firebaseapp.com",
		databaseURL: "https://health-buddy-53e8c.firebaseio.com",
		projectId: "health-buddy-53e8c",
		storageBucket: "health-buddy-53e8c.appspot.com",
		messagingSenderId: "675400900634",
		appId: "1:675400900634:web:d5214388f1c7cafa00f1a3"
	};
	  
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
})();
