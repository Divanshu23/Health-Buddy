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
	var dayEqual = (date1.getDay() == date2.getDay());
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