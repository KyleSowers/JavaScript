// HTML Event Handler Attributes (DO NOT USE)

function checkUsername() { //declare function
    var elMsg = document.getElementById('feedback'); // get feedback element
    var elUsername = document.getElementById('username'); // get username input
    if (elUsername.value.length < 5) { //if the username is too short
        elMsg.textContent = 'Username must be 5 characters or more'; // set msg
    } else { // otherwise
        elMsg.textContent = ''; // clear message
    }
}