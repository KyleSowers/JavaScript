// Previous & Next Sibling

// select the starting point and find its sibling
var startItem = document.getElementById('two');
var prevItem = startItem.previousElementSibling;
var nextItem = startItem.nextElementSibling;

// change the values of the sibling' class attributes
prevItem.className = 'complete';
nextItem.className = 'cool';