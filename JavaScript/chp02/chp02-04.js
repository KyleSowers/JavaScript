var inStock;
var shipping;

inStock = true;
shipping = false;

var elStock = document.getElementById("stock");
elStock.className = inStock ? "true" : "false";
var elShip = document.getElementById("shipping");
elShip.className = shipping ? "true" : "false";