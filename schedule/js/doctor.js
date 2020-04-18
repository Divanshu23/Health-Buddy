let avail = [];
let unavail = [];

let pastDates = true, availableDates = false, availableWeekDays = false

let calendar = new VanillaCalendar({
	selector: "#myCalendar",
	months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	shortWeekday: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
	onSelect: (data, elem) => {

		console.log(data, elem);

		//grabs database and confirms appointment
		// let conf = [];
		// let check = db.collection("patient").doc("appointment");

		// for (let i = 0; i < avail.length; i++) {
		//     for (let j = 0; j < check.length; j++) {
		//         if (avail[i] == check[j]) {
		//             conf.push(avail[i]);
		//         }
		//     }
		// }

		// //updates database
		// let information = {
		//     availability: avail,
		//     unavailability: unavail,
		//     confirmed: conf
		// }
		// db.collection("doctor").doc(availability).set(information);



	}
})