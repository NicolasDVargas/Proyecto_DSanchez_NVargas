
var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
var container = document.getElementById('container');

if (signUpButton) {
	alert("i esta");
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
} else{
	alert("no entra");
}

if (signInButton) {
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
}