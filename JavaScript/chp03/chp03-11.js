//Matho Object to Create Random Numbers

// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor((Math.random() * 10) + 1);

// Create a variable called el to hold the element whose id attribute has a value of info and write the message into that element
var el = document.getElementById('info');
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';