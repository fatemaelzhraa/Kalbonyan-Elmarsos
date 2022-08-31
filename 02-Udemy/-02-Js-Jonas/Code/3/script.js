// function logger() {
//   console.log("My name is Jonas");
// }

// //calling/running/invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
/////////////////////////////////////////////
// Function declaration
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);
// // Function expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);
////////////////////////////////////////////
// ARROW FUNCTION

// const calcAge3 = (birthYeah) => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

//Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const year = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(year[0]),
//   calcAge(year[1]),
//   calcAge(year[year.length - 1]),
// ];
// console.log(ages);
//add
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);
// //remov
// friends.pop();
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));
// console.log(friends.indexOf(23));
// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Steven", "Peter"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);
// const interestedIn = prompt(
//   "What do you want to know about Jonas?Choose between firstName,lastName,age,job,and friends"
// );
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request!Choose between firstName,lastName,age,job,and friends "
//   );
// }
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// //challenge
// //"Jonas has 3 friends ,and his best friend is called Michael"
// console.log(
//   `${jonas.firstName}has ${jonas.friends.length},and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Steven", "Peter"],
//   hasDriversLicense: true,
// calcAge: function () {
//   console.log(this);
//   return 2037 - this.birthYeah;
// },
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.birthYeah;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}
//     -year old ${jonas.job},and he has ${
//       this.hasDriversLicense ? "a" : "no"
//     } driver's license.`;
//   },
// };
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// //challenge
// //"Jonas is a 46-year old teacher , and he has a driver's license"
// console.log(jonas.getSummary());
// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   1991,
//   "teacher",
//   ["Michael", "Steven", "Peter"],
//   true,
// ];
// const types = [];

// // jonas[5] does NOT exist
// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
//   //  Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   1991,
//   "teacher",
//   ["Michael", "Steven", "Peter"],
// ];
// // 0,1,....,4
// // 4,3,....,0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------------Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}🏋️‍♀️`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep}🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
