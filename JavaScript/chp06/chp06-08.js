// Load

function setup() {                                          // declare function
    var textInput;                                                // create variable
    textInput = document.getElementById('username');    // get username input
    textInput.focus();                                            // give username focus
}

window.addEventListener('load', setup, false);      // when page loaded call setup

