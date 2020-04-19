(function init() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			$('#jumbo-btn').hide();
		} 
	}, function(error) {
		console.log(error);
	});
})();