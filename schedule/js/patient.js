let pastDates = true, availableDates = false, availableWeekDays = false

let calendar = new VanillaCalendar({
	selector: "#myCalendar",
	months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	shortWeekday: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
	onSelect: (data, elem) => {

		console.log(data, elem);

		//grabs database and confirms appointment
		// let conf = [];

		// //updates database
		// let information = {
		//     appointment = conf;
		// }
		// db.collection("patient").doc(appointment).set(information);



	}
})
