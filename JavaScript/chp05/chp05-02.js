// Selecting Elements Using ID Attributes

// Selects the elements by class name and stores the NodeList in a variable
var elements = document.getElementsByClassName('hot');

if (elements.length > 2) {      // if 3 or more are found

    var el = elements[2]        //select the third one from the NodeList
    el.className = 'cool';      // change the value of its class attribute
}
