//Creating a Date Object

// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Create a variable to hold the year this year
var year = today.getFullYear();

// Create a variable called el to hold the element whose id attribute has a value of footer and write the year into that element
var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>'