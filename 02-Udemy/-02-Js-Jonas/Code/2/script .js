// let js = "amazing";
// if (js === "amazing") alert("javascript is fun!");
// 48 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);
// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// //variable name convention
// let jonas_matilda = "JM";
// let $function = 27;
// let person = "jonas";
// let PI = 3.1415;
// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";
// let job1 = "programmer";
// let job2 = "teacher";
// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "jonas");
// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(typeof year);
// console.log(typeof null);

// let age = 30;
// age = 31;
// const birthYear = 1991;
// // birthYear = 1990;
// // const job;
// var job = "programmer";
// job = "teacher";
// lastName = "Schmedtmann";
// console.log(lastName);

//Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2**3 means 2 to the power of 3=2*2*2
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// Assignment operators
// let x = 10 + 5; //15
// x += 10; //x=x+10
// x *= 4; //x=x*4=100
// x++;
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageSarah > ageJonas); //>,<,<=,>=
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);
// let x, y;
// x = y = 25 - 10 - 5; //x=y=10,x=10
// console.log(x, y);
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old  " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
// console.log(`Just a regular string...`);
// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String
// multiple
// lines`);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving license🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23);

// //type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1; //"11"
// n = n - 1;
// console.log(n);

//5 falsy values: 0, "" , undefined, null , NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }
// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");
// const favourit = prompt("What's your favourite number?");
// console.log(favourit);
// console.log(typeof favourit);
// if (favourit === 23) {
//   //22===23-.FALSE
//   console.log("Cool! 23 is an amzaing number!");
// } else if (favourit === 7) {
//   console.log("7 is also acool nummder");
// } else if (favourit === 9) {
//   console.log(" 9 is also acool nummder");
// } else {
//   console.log("Number is not 23 or 7 or9");
// }
// if (favourit !== 23) console.log("Why not 23?");
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("sarah is able to driv!");
// // } else {
// //   console.log("Someone else should drive......");
// // }

// const isTired = true; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("sarah is able to driv!");
// } else {
//   console.log("Someone else should drive......");
// }

// const day = "monday";
// switch (day) {
//   case "monday": //day==="monday"
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not avalid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not avalid day!");
// }
