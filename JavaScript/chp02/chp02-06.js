var inStock;
var shipping;

inStock = true;
shipping = false;

/* Some other processes may go here and, as a result, the script might change these values */

inStock = false;
shipping = true;

var elStock = document.getElementById("stock");
elStock.className = inStock ? "true" : "false";
var elShip = document.getElementById("shipping");
elShip.className = shipping ? "true" : "false";