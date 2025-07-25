// Using Event Listeners With The Event Object

function checkLength(e, minLength) {  // declare function
    var el, elMsg;  // declare variables
    if (!e) {  // if event object doesn't exist
        e = window.event;  // use IE fallback
    }
    el = e.target || e.srcElement;  // get target of event
    elMsg = el.nextSibling;  // get its next sibling

    if (el.value.length < minLength) {  // if length is too short set msg
        elMsg.innerHTML = 'Username must be ' + minLength + " characters or more"; // set msg
    } else {  // otherwise
        elMsg.innerHTML = '';  // clear message
    }
}

var elUsername = document.getElementById('username');  // get username input
if (elUsername.addEventListener) {  // if event listener supported
    elUsername.addEventListener('blur', function(e) {  // on blur event
        checkLength(e, 5);  // call checkLength()
    }, false);  // capture bubble phase
} else {  // otherwise
    elUsername.attachEvent('onblur', function(e) {  // IE fallback: onblur
        checkLength(e, 5);  // call checkLength()
    });
}