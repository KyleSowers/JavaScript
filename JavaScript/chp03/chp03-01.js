//A Basic Function

// declare/assign variable
var msg = "Sign up to receive our newsletter for 10% off!";
//basic function declaration
function updatemessage() {
    //function statements
    var el = document.getElementById("message");
    el.textContent = msg;
}
//call function
updatemessage();