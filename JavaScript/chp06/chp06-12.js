// Which Key Was Pressed

var el;     // declare variable

function charCount(e) {     // declare function
    var textEntered, charDisplay, counter, lastKey;     // declare function variables
    textEntered = document.getElementById('messageChp06-12').value;     // user's text
    charDisplay = document.getElementById('charactersLeft');        // counter element
    counter = (180 - (textEntered.length));     // number of characters left
    charDisplay.textContent = counter;      // show characters left

    lastKey = document.getElementById('lastKey');       // get last key entered
    lastKey.textContent = "Last key in ASCII code: " + e.keyCode;       // create msg
}

el = document.getElementById('messageChp06-12');        // get msg element
el.addEventListener('keypress', charCount, false);      // keypress event