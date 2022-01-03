'use strict';
// const bookings = [];
// const createBooking = function (flightNumber, numPassangers = 1, price = 199) {
//   const booking = {
//     flightNumber,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
//createBooking('LH230', 2, 800);

const flight = 'LH123';
const jonas = {
  fullName: 'Jonas Sch',
  passport: 12574564654,
};
const checkIn = function (flightNum, passanger) {
  // flightNum = 'LH1212';
  passanger.fullName = 'Mr. ' + passanger.fullName;
  if (passanger.passport === 12574564654) {
    alert('CheckedIN');
  } else {
    alert('Invalid');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
