var scores = [24, 32, 17]; // array of scores
var arrayLength = scores.length; // items in array
var roundNumber = 0; // current round
var msg = ''; // message
var i; // counter

// loop through the items in the array
for (i = 0; i < arrayLength; i++) {

    // arrays are zero-based (so 0 is round 1)
    // add 1 to the current round
    roundNumber = (i + 1);

    // write the current round number to message
    msg += 'Round ' + roundNumber + ': ';

    // get the score from the scores array
    msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;