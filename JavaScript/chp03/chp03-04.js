//Creating Objects Using Constructor Syntax

//An empty object is created using the constructor function.
//The constructor function begins with naming the object, the using the new keyword to create the empty object.
var hotel = new Object();

//properties (key:value pairs) and a method are created separately by assigning them to the new hotel object, using dot notation (member operator).
hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};

// display object hotel name value as output to page, where requested matching id attribute 'hotelName'
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

// display room availability value as output to page from hotel objects checkAvailability() method (function), where requested matching id attribute is 'rooms'
var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
