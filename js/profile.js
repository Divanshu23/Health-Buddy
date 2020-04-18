//shows alert that info updated
document.getElementById("submit_btn").onclick = showUpdate;
    function showUpdate(){
    alert("Info details updated");
}

const name = document.getElementById("profile_name");
const email = document.getElementById("profile_email");

//retrieves name and email of user from database
db.collection("users").onSnapshot(function(querySnapshot){
    console.log(firebase.auth().currentUser.displayName)
    name.innerHTML = firebase.auth().currentUser.displayName;
    email.innerHTML = firebase.auth().currentUser.email;
})