var pass = 50; // pass mark
var score = 75; // current score
var msg; // message

// select message to write based on score
if (score >= pass) {
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!';
}

// write msg into page
var el = document.getElementById('answer');
el.textContent = msg;