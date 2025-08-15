// Using Mutation Events

var elList, addLink, newEl, newText, counter, listItems;        // declare variables

elList = document.getElementById('list');       // get list
addLink = document.querySelector('.addChp06-14');     // get add item button
counter = document.getElementById('counter');       // get item counter

function addItem(e) {       // declare function
    e.preventDefault();     // prevent link action
    newEl = document.createElement('li');       // new <li> element
    newText = document.createTextNode('New list item');     // new text node
    newEl.appendChild(newText);     // add text to <li>
    elList.appendChild(newEl);      // ad <li> to list
    updateCount();
}

function updateCount() {        // declare function
    listItems = list.getElementsByTagName('li').length;     // get total of <li>s
    counter.innerHTML = listItems;      // update counter
}

addLink.addEventListener('click', addItem, false);      // click on button
// elList.addEventListener('DOMNodeInserted', updateCount, false);      // DOM updated

updateCount();