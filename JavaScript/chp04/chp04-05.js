var score = 75; //score
var msg; // message

// if statement checks the value of users score
if (score >= 50) { // if the score is 50 or higher
    msg = 'Congratulations!';
    msg += ' Proceed to the next round.';
}

// write the message into the page
var el = document.getElementById('answer');
el.textContent = msg;