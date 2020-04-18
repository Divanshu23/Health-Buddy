// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAP3RkHJ76THG3ClTlKkfZeNuDZPaw1QV0",
    authDomain: "chat-815c2.firebaseapp.com",
    databaseURL: "https://chat-815c2.firebaseio.com",
    projectId: "chat-815c2",
    storageBucket: "chat-815c2.appspot.com",
    messagingSenderId: "555740866927",
    appId: "1:555740866927:web:875252c5f9ebadac74a09a",
    measurementId: "G-9R1BQDHB37"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.database().ref();


// Update the database
function writeData() {
    var message = document.getElementById("message-input").value;
    db.push().set({
        userMessage: message,
    });
    document.getElementById("message-input").value = "";
}

// Grab from the database and displays it
function readData() {

    db.on("child_added", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            // Grabs the data and put it into the messenger div
            var childData = childSnapshot.val();
            let newMessage = document.createElement("p");
            newMessage.innerHTML = childData + "";
            document.getElementById("message-container").appendChild(newMessage);
        });
    });


}

readData();
console.log("restarted");
