// Looping Through A NodeList

// stores NodeList in array
var hotItems = document.querySelectorAll('li.hot');

if (hotItems.length > 0) {      // if it contains items

    for (var i = 0; i < hotItems.length; i++) {         // loops through each item
        hotItems[i].className = 'cool';         // changes value of class attribute
    }
}