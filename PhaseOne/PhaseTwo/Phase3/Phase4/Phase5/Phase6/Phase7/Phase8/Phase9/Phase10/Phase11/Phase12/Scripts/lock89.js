const button = document.getElementById("guess-button");
const number = document.getElementById("guess-text");
const passcode = "0508";

button.addEventListener("click", guessNumber);

function guessNumber(){
	const guess = number.value;

	if(guess == passcode){
		window.location.href = "unlockBox.html";
	}
	else{
		
	}
	
}

