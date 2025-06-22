var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById("cost");
el.textContent = '$' + total;

document.querySelector('.button-link-js').addEventListener("click", function () {
    var popup = document.getElementById("js-popup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
});