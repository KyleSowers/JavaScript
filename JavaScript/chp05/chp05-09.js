// Accessing Text Only

var firstItem = document.getElementById('one'); // find first list item
var showTextContent = firstItem.textContent;        // get value of textContent
var showInnerText = firstItem.innerText;        // get value of innerText

// show the content of there two properties at the end of the list
var msg = '<p class="chp05-09-p">textContent: ' + showTextContent + '</p>';
    msg += '<p class="chp05-09-p">innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';      // update the first list item
console.log(firstItem);