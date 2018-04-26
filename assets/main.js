var second = 00;
var minutes = 00;
var hours = 00;
var counter=0;
var time;
function start(){
	var txt = document.getElementById('txt-area');
	var button = document.getElementById('starter');
	if (button.innerHTML == "Start") {
		button.innerHTML = "Reset";
		time = setInterval(timer ,1000);
		txt.disabled = false;
	}
	else{
		clearInterval(time);
		second = 00;
		minutes = 00;
		hours = 00;	
		button.innerHTML = "Start";
		txt.disabled = true;
	}
}
function timer(){
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
	text_area.innerHTML = hours + ":" + minutes + ":" + second;
}
function text(){
	var input = document.getElementById('txt-area').value;
	document.getElementById('typed').innerHTML = input;
}
// document.addEventListener('DOMContentLoaded', start);