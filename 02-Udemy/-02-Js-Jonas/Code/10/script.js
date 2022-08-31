'use strict';
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  // Ess
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const jonas = {
  home: 'Jonas Schmedtmann',
  passport: 24516387667,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24516387667) {
    alert('Checked in');
  } else {
    alert('Wrong passport! ');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// const flightNum = flight;
// const passenger = jonas;
const newPassport = function (person) {
  Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
