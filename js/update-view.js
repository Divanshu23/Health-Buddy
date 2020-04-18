/*Initialize our connection to FireBase*/
var db;

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
	db = firebase.firestore();
})();

function displayPatientData(dataObject){
	//Extract the array of statuses from the data Object
	var status = dataObject.statuses;
	
	//Render each status
}

/*Fetches all the patient's statuses from the FireBase*/
function initPatientData(patientId){
	var data = db.collection("patient-updates").doc(patientId);
	
	//Read the patient's updates
	data.get().then(function(doc){
		//If the patient's document doesn't exist then there is no data to display
		if(doc.exists){
			displayPatientData(doc.data());
		}
		else{
			console.log("Patient data doesn't exist");
		}
	})
	.catch(function(err){
		console.log(err);
	});
}