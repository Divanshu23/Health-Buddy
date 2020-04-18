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

function formatDate(date){
	return Intl.DateTimeFormat("en-ca").format(date);
}

function makeStatusCard(date, typeOfUpdate, updateDetails){
	var card = `<div class="card">
		<h5 class="card-title">Date</h5>
		<p>${date}</p>
		<h5 class="card-title">Type of Update</h5>
		<p>${typeOfUpdate}</p>
		<h5 class="card-title">Update Details</h5>
		<p>${updateDetails}</p>
	</div>`
	
	return card;
}

/*Given a status object containing a date,
type of report and details, create a card containing the info 
and display it*/
function renderStatus(statusObject){
	//Extract all the data fields
	var date = statusObject.timeOfUpdate.toDate();
	var typeOfUpdate = statusObject.typeOfUpdate;
	var updateDetails = statusObject.details;

	//Fix the date formatting for readability
	var date = formatDate(date);
	
	//Make the card and append it
	var card = makeStatusCard(date, typeOfUpdate, updateDetails);
	$("#statusContainer").append(card);
}

function displayPatientData(dataObject){
	//Extract the array of statuses from the data Object
	var statusArray = dataObject.statuses;
	
	//Render each status
	for(var i=0; i<statusArray.length; i++){
		renderStatus(statusArray[i]);
	}
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