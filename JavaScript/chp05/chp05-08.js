// Accessing & Changing A Text Node

// get second list item
var itemTwo = document.getElementById('two');

// get its text content
var elText = itemTwo.firstChild.nodeValue;

// change pine nuts to kale
elText = elText.replace('pine nuts', 'kale');

// update the list item
itemTwo.firstChild.nodeValue = elText;