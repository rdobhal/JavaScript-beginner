"use strict";

const restaurant = {
  name: "Italian",
  location: "Italy",
  Categories: ["Italian", "Organic", "Indian"],
  startMenu: ["Garlic", "Bread", " Salad", "coffee"],
  mainMenu: ["Pizza", "Pasta", "macroni"],
  openingHours: {
    mon: {
      open: 12,
      close: 11,
    },
    tue: {
      open: 13,
      close: 11,
    },
    wed: {
      open: 11,
      close: 12,
    },
    thu: {
      open: 0,
      close: 24,
    },
  },

  Order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (obj) {
    // console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
};

restaurant.orderDelivery({
  time: "11.30",
  address: "Home",
});

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// //console.log(x, y, z);

// let [main, , second] = restaurant.Categories;
//console.log(first, second);

// let temp = first;
// first = second;
// second = temp;

// console.log(first, second);

// [main, second] = [second, main];
// console.log(restaurant.Order(2, 1));

// const [i, , j] = [2, 4, [1, 2]];
// console.log(i, j);

//Object destructuring
// const { name, openingHours, Categories } = restaurant;
// console.log(name, openingHours, Categories);

// let { name: restaurantName, openingHours: hrs } = restaurant;
// console.log(restaurantName, hrs);

// const {
//   mon: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// const arr = [7, 5, 6];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// const newArr = [1, 2, ...arr];
// console.log(newArr[2]);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "hola"];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //joim 2 arrays
// const addNewMenu = [...restaurant.mainMenu, ...restaurant.startMenu];
// console.log(addNewMenu);

//Iterables are arrays,strings,maps,sets but objects not
// const str = "jonas";
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(...str);
// const ingredients = [
//   prompt("Let's create a pasta! Ingredient 1?"),
//   prompt("Let's create a pasta! Ingredient 2?"),
//   prompt("Let's create a pasta! Ingredient 3?"),
// ];

// restaurant.orderPasta(...ingredients);

//rest parameters on left hand side
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

const [Pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];
// startMenu: ["Garlic", "Bread", " Salad", "coffee"],
//   mainMenu: ["Pizza", "Pasta", "macroni"],
//console.log(Pizza, risotto, otherfood);

//Objects
// const { mon, ...otherdays } = restaurant.openingHours;
// // console.log(mon, otherdays);
// const add = function (...num) {
//   //console.log(num);
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 5, 8, 7);
// add(2, 2, 2, 2, 2, 2, 2, 22, 2);

// const x = [23, 5, 7];
// add(...x);

// Short circuiting
// console.log("-------OR--------");
// console.log(3 || "jonas");
// console.log("" || "jonas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 11;
// console.log(guests2);

// console.log("------AND-------");
// console.log(0 && "jonas");
// console.log(7 && "jonas");
// console.log();
//console.log("-----Bubble sort------");
// const arr = [20, 21, 23, 4, 56, 7];
// function swap(arr, initialValue, lastValue) {
//   if (initialValue == lastValue) return;
//   let temp = arr[initialValue];
//   arr[initialValue] = arr[lastValue];
//   arr[lastValue] = temp;
// }

// let unsortedPartitionIndex = arr.length - 1;
// for (
//   let i = unsortedPartitionIndex;
//   unsortedPartitionIndex > 0;
//   unsortedPartitionIndex--
// ) {
//   for (let i = 0; i < unsortedPartitionIndex; i++) {
//     if (arr[i] > arr[i + 1]) swap(arr, i, i + 1);
//   }
// }
// //console.log(arr);
// const games = {
//   team1: "France",
//   team2: "Italy",
//   players: [
//     ["heya", "somnu", "gonu", "hjkg"],
//     ["hgery", "ujhdd", "jihf", "ddddd"],
//   ],
//   score: "4:0",
//   scored: ["hrisdd", "rfdszf", "dfdasd", "dsed"],
//   date: "Nov 9th, 2021",
//   odds: {
//     team1: 1.22,
//     x: 2.22,
//     team2: 6.6,
//   },
// };
// //1.
// for (const [key, players] of games.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${players}`);
// }
// //2.
// let mean = 0;
// for (const i of Object.values(games.odds)) {
//   mean = mean + i;
// }
// let avg = mean / 3;
// console.log(avg);

// //3.
// for (const [team, odd] of Object.entries(games.odds)) {
//   console.log(team, odd);
// }
// // //1.
// const [players1, players2] = games.players;
// console.log(players1, players2);
// //console.log(players1);
// //2.//rest
// const [gk, ...fieldplayers] = players1;
// console.log(gk, fieldplayers);
// //3.//spread
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4.
// const players1Final = ["Thiago", "Countinho", "Perisic", ...players1];
// console.log(players1Final);
// // //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = games;
// console.log(team1, draw, team2);
// //6.
// const printGoals = function (...players) {
//   console.log(`${players.length}`);
// };

// printGoals("hjjfhd", "uhjkfdh");
// printGoals("lkjhdfsfj", " hdfhsdhf", "jdfjk");
// printGoals(...games.scored);

// // //for-of loop
// const menu = [...restaurant.startMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// //coding chanllenge 2
// const gameEvents = new Map([
//   [17, "GOAL"],
//   [36, "SUBSTITUTION"],
//   [47, "GOAL"],
//   [61, "SUBSTITUTION"],
//   [64, "YELLOW CARD"],
//   [69, "RED CARD"],
//   [70, "SUBSTITUTION"],
// ]);
// console.log(gameEvents);
// //1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //2.
// gameEvents.delete(64);
// console.log(gameEvents);
// //3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// const airline = "Tap Air Portugal";
// const plane = "A320";

//
//const airline = "TAP Air Portugal";
//const plane = "A320";

//Fix the capitalization in passenger name
// const passenger = "JoNas";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// const email = "hello@jonas.io";
// const loginEmail = "  Hello@jonas.Io\n";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// //console.log(trimmedEmail);

// const normalisedEmail = lowerEmail.toLowerCase().trim();
// console.log(normalisedEmail);
// console.log(email == normalisedEmail);

// //replacing
// const priceGB = "288,87₤";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// const annoucement = "All passengers come to door 23. boarding door 23!";
// console.log(annoucement.replace("door", "gate"));

// //regx use for target all the occurances of door
// console.log(annoucement.replace(/door/g, "gate"));
// //replaaace method is case senstive

// //boolean
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.startsWith("A320"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo"));
// {
//   console.log("valid");
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   //const baggage = items.toLowerCase();
//   const baggage = items;
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("not allowed");
//   } else {
//     console.log("allowed");
//   }
// };

// checkBaggage("I have a laptop, knife");
// checkBaggage("socks and camera");
// checkBaggage("SNACKS AND A GUN");

// //Split and join
// console.log("a+very+nice+home".split("+"));
// console.log("Jonas Schmedtmann".split(" "));

// const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// let capitalizeName = function (fullName) {
//   const names = fullName.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(" "));
// };
// capitalizeName("jessica ann smith davis");
// capitalizeName("jonas schmedtmann");

// const maskCreditCard = function (number) {
//   const str = String(number);
//   // const str = number + ''

//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(12456379895653));
// console.log(maskCreditCard("45467675444343545"));

// //repeat

// const message2 = "Bad weather.....All departures delayed....";
// console.log(message2.repeat(5));

// const planesInline = function (n) {
//   console.log(`There are ${n} planes in line ${"😢".repeat(n)}`);
// };
// planesInline(5);
// planesInline(3);
// planesInline(8);

//MDN ---> all differnt dtring methods

//coding challenge 4
const convertToCamelCase = function (fullName) {
  for (const n of fullName) {
    const [first, second] = n.toLowerCase().trim().split("_");
    const output = `${first} `;
  }
};
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
console.log(flights.split("+"));
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = ` ${type.replaceAll("_", " ")} ${from
    .slice(0, 3)
    .toUpperCase()} ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ":",
    "h"
  )})`.padStart(36);
  console.log(output);
}
