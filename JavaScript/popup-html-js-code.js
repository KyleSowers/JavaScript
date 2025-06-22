document.querySelectorAll(".button-link").forEach(function (btn) {
    btn.addEventListener("click", function() {
        var popupSelector = btn.getAttribute("data-popup");
        var popup = document.querySelector(popupSelector);
        if (popup) {
            popup.style.display = (popup.style.display === "block") ? "none" : "block";
        }
    });
});