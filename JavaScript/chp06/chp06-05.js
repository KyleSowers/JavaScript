// Fallback For Using Event Listeners In IE8

var elUsername = document.getElementById('username');  // get username input
var elMsg = document.getElementById('feedback');  // get feedback element

function checkUsername(minlength) {  // declare function
    if (elUsername.value.length < 5) { // if username is too short
        elMsg.innerHTML = 'Username must be ' + minlength + ' characters or more';  // set message
    } else {  // otherwise
        elMsg.innerHTML = '';  // clear message
    }
}

if (elUsername.addEventListener) {  // if event listener supported
    elUsername.addEventListener('blur', function() {  // when username loses focus
        checkUsername(5);  // call checkUsername()
    }, false);  // capture during bubble phase
} else {  // otherwise
    elUsername.attachEvent('onblur', function () {  // IE fallback: onblur
        checkUsername(5);  // call checkUsername()
    });
}