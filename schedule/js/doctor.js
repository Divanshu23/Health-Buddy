let avail = [];

let pastDates = true, availableDates = false, availableWeekDays = false

let calendar = new VanillaCalendar({
	selector: "#myCalendar",
	months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	shortWeekday: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
	onSelect: calendarClick
});

/*Checks whether the date has been selected or not*/
function getSelectedStatus(elem){
	return elem.classList.contains('vanilla-calendar-date--confirmed');
}

/*Checks whether two dates are equal
ie. the day, month, and year are the same*/
function datesEqual(date1, date2){
	var dayEqual = (date1.getDate() == date2.getDate());
	var monthEqual = (date1.getMonth() == date2.getMonth());
	var yearEqual = (date1.getYear() == date2.getYear());
	
	return (dayEqual && monthEqual && yearEqual);
}

/*Checks if the date has been selected or deselected
and updates the availability array accordingly*/
function calendarClick(data, elem){
	var selected = getSelectedStatus(elem);
	var date = new Date(data.date);
	
	if(selected){
		avail.push(date);
	}
	else {
		//Go through the list of availabilities and remove the selected date
		for(let i=0; i<avail.length; i++){
			if(datesEqual(avail[i], date)){
				avail.splice(i, 1);
			}
		}
	}	
}

/*TODO: get the doctor's id from the login session*/
function getDoctorId(){
	return "doctor";
}

/*Sends the availability info to FireBase*/
function updateAvail(){
	var docId = getDoctorId();
	var docDB = db.collection(docId).doc("availability");
	var availObject = {"availability": avail};
	
	docDB.set(availObject).catch(function(err){console.log(err)});
}

/*Connects to the database and reads the availbility*/
function readAvail(callback){
	var docId = getDoctorId();
	var docDB = db.collection(docId).doc("availability");
	
	//Read the availabilities
	docDB.get().then(function(doc){
		let data = doc.data();
		avail = data.availability;
		
		//Convert each timestep to a date
		for(let i=0; i<avail.length; i++)
			avail[i] = avail[i].toDate();
		
		callback(avail);
	})
	.catch(function(err){console.log(err)});
}

/*Highlights the available days in the calendar
using the availability array*/
function initCal(){		
	//Look through the calendar and if any dates are available then select
	$(".vanilla-calendar-body").children().each( function(index) {
		for(let i=0; i<avail.length; i++){
			if(datesEqual(new Date($(this).attr("data-calendar-date")), avail[i])){
				$(this).addClass("vanilla-calendar-date--confirmed");
			}
		}
	});
}

(function onLoad(){
	readAvail(initCal);
})();