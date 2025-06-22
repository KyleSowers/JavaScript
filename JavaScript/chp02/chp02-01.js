var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById("cost");
el.textContent = '$' + total;

document.querySelectorAll(".button-link").forEach(function (btn) {
    btn.addEventListener("click", function() {
        var popupSelector = btn.getAttribute("data-popup");
        var popup = document.querySelector(popupSelector);
        if (popup) {
            popup.style.display = (popup.style.display === "block") ? "none" : "block";
        }
    });
});

