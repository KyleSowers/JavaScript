// Using Event Delegation

function getTarget(e) {     // declare a function
    if (!e) {               // if there is no event object
        e = window.event;   // use old IE event object
    }
    return e.target || e.srcElement;    // get the target of event
}

function itemDone(e) {      // declare function
    // remove item from list
    var target, elParent, elGrandparent;    // declare variables
    target = getTarget(e);      // get the item clicked link
    elParent = target.parentNode;   // get its list item
    elGrandparent = target.parentNode.parentNode;   // get its list
    elGrandparent.removeChild(elParent);    // remove list item from list

    // prevent the link from taking you elsewhere
    if (e.preventDefault) {     // if preventDefault() works
        e.preventDefault();     // use preventDefault()
    } else {                    //otherwise
        e.returnValue = false;  // use old IE version
    }
}

// set up event listeners to call itemDone() on click
var el = document.getElementById('shoppingList');   // get shopping list
if (el.addEventListener) {      // if event listeners work
    el.addEventListener('click', function (e) { // add listener on click
        itemDone(e);            // calls itemDone()
    }, false);          // use bubbling phase for flow
} else {                        // otherwise
    el.attachEvent('onclick', function (e) {        // use old IE model: onclick
        itemDone(e);            // call itemDone()
    });
}