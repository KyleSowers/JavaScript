// Check for an Attribute and Get Its Value

// get the first list item
var firstItem = document.getElementById('one');

// if it has a class attribute
if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('class'); // get the attribute

    // add the value of the attribute after the list
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p class="chp05-p">The first item has a class name: ' + attr + "</p>";
}