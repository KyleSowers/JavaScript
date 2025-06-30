var table = 3;              // unit of table
var operator = 'addition';   // type of calculation (defaults to addition)
var i = 1;                 // set counter to 1
var msg = '';               // message

if (operator === 'addition') {
    while (i < 11) {               // while the counter is less than 11
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />'; // calculation
        i++;                       // add 1 to the counter
    }
} else {                           // otherwise
    while (i < 11) {               // while the counter is less than 11
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />'; // calculation
        i++;                       // add 1 to the counter
    }
}

// write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;