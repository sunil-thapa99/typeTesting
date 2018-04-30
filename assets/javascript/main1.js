var second = 00;
var minutes = 00;
var hours = 00;
var counter=0;
var time;
const testArea = document.getElementById('txt-area');
const original = document.getElementById('originalText').innerHTML;
function start(){
	var button = document.getElementById('starter');
	// Check if button is on start state or not
	if (button.innerHTML == "Start") {
		button.innerHTML = "Reset";
		// Start timer and enable text field to enter type letters
		time = setInterval(timer ,1000);
	}
	else{
		// Clear interval if button is reset
		testArea.value = '';
		second = 00;
		minutes = 00;
		hours = 00;	
		clearInterval(time);
		button.innerHTML = "Start";
	}
}
function leadingTimer(time){
	// Start with zero when time is single digit
	if (time<10) {
		time = '0' + time;
	}
	return time;
}
function timer(){
	// Create stopwatch 
	second++;
	if (second > 59) {
		second = 00;
		minutes++;
	}
	else if (minutes > 59) {
		minutes = 00;
		hours++;
	}
	else if (hours > 12) {
		hours = 00;
	}
	var text_area = document.getElementById('timer-counter');
	text_area.innerHTML = leadingTimer(hours) + ":" + leadingTimer(minutes) + ":" + leadingTimer(second);
}
function text(){
	let input = testArea.innerHTML;
	// Get each character of original text
	let originalText = original.substring(0, input.length);
	if (input == original) {
		// Stop timer if text is matched
		clearInterval(time);
		alert('You took ' + leadingTimer(hours) + ":" + leadingTimer(minutes) + ":" + leadingTimer(second));
	}
	else{
		if (input == originalText) {
			// Change border color to green when letters match 
			testArea.style.borderColor = "#67E1D4";
		}
		else{
			// Change border color to red when letters donot match
			testArea.style.borderColor = "#DA413D";
		}
	}
}
// Call function on each key is released
testArea.addEventListener("keyup", text, false);
// document.addEventListener('DOMContentLoaded', start);