// Chapter 3 Example
/* the script is placed inside an immediately invoked function expression which helps protect the scope of variables */
(function () {

    // PART ONE: CREATE HOTEL OBJECT & WRITE OUT THE OFFER DETAILS

    // create a hotel object using object literal syntax
    var hotel = {
        name: 'Park',
        roomRate: 240, // amount in dollars
        discount: 15, // percentage discount
        offerPrice: function () {
            return ('$' + this.roomRate * ((100 - this.discount) / 100));
        }
    }

    // write out the hotel name, standard rate, and the special rate
    var hotelName, roomRate, specialRate; // declare variables

    hotelName = document.getElementById('hotelName'); // get elements
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name; // write hotel name
    roomRate.textContent = hotel.roomRate; // write room rate
    specialRate.textContent = hotel.offerPrice(); // write offer price

    // PART TWO: CALCULATE & WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
    var expiryMsg; // message displayed to users
    var today; // today's date
    var elEnds; // the element that shows the message about the offer ending

    function offerExpires(today) {
        // declare variables within the function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        // add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        // create arrays to hold the names of days / months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'];
        // collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        // create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);


}());
