// Using DOM Event Handlers

function checkUsername() {
    var elMsg = document.getElementById("feedback");
    if (this.value.length < 5) {
        elMsg.textContent = "Username mustbe 5 characters of more";
    } else {
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById("username");
elUsername.onblur = checkUsername;