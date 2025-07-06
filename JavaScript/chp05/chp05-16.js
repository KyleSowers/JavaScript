// Chapter 5 Example

// adding items to the start and end of the list
var list = document.getElementsByTagName('ul')[0]; //get the <ul> element

// add new item to end of the list
var newItemLast = document.createElement('li'); // create an element
var newTextLast = document.createTextNode('cream'); // creat text node
newItemLast.appendChild(newTextLast); // add text node to element
list.appendChild(newItemLast); // add an element end of the list

// add new item start of the list
var newItemFirst = document.createElement('li'); // create an element
var newTextFirst = document.createTextNode('kale'); // create text node
newItemFirst.appendChild(newTextFirst); // add text node to element
list.insertBefore(newItemFirst, list.firstChild); // add an element to the list

// all <li> elements
var listItems = document.getElementsByTagName('li'); // all <li> elements

// add a class of cool to all list items
var i; // counter variable
for (i = 0; i < listItems.length; i++) { // loop through elements
    listItems[i].className = 'cool'; // change class to cool
}

// add number of items in the list to the heading
var heading = document.querySelector('h2'); // h2 element
var headingText = heading.firstChild.nodeValue; // h2 text
var totalItems = listItems.length; // no. of <li> elements
var newHeading = headingText + '    <span>( ' + totalItems + ' )</span>'; // content
heading.innerHTML = newHeading; // update h2
