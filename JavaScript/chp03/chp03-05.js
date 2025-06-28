//Create & Access Objects Constructor Notation

// creates a template for creating new objects that represent hotel
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    }
}

// creates multiple Hotel objects with constructor notation
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

// variable holds concatenated objects properties, text & objects method, displays a concatenated result to page where id matches hotel1
var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

// variable holds concatenated object properties, text & objects method, displays a concatenated result to page where id matches hotel2
var details2 = parkHotel.name + ' rooms ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;