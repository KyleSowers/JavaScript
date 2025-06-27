// create object using the previous activities literal notation, representing a different hotel object than the last, like a different page of the same travel website
var hotel = {
    // key:value pairs... separated by commas except last pair
    name: "Park", // string values use quotes like when assigning variables
    rooms: 120,
    booked: 77,
    checkAvailability: function() {
        // "." as a member operator, states key (rooms & booked) are members of keyword "this" object (hotel)
        return this.rooms - this.booked;
    }
};

// display object hotel name value as output to page, where requested matching id attribute 'hotelName'
var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

// display room availability value as output to page from hotel objects checkAvailability() method (function), where requested matching id attribute is 'rooms'
var elRooms = document.getElementById("rooms");
elRooms.textContent = hotel.checkAvailability();