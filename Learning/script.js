/*let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

console.log("Jonas");

console.log(23);

let firstname = "bablu";

console.log(firstname);
console.log(firstname);
console.log(firstname);
*/

/*
let JavaScriptIsFun = false;
console.log(JavaScriptIsFun);

let year;
console.log(typeof year)

console.log(typeof JavaScriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "rthrjryjtr");
console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 19990;

// const job;

var job = "programmer";
job = "teacher";

lastname = "Prajapati";
console.log(lastname);
*/

/*
const now = 2037;

const ageJonas = now - 1991;
const ageKani = now - 2018;

console.log(ageJonas, ageKani);

console.log(ageJonas * 2, ageKani / 10, 2 ** 3);

const firstName = "Abhishek";
const lastName = "Prajapati";

console.log(firstName + " " + lastName);

let x = 69 + 69;
x += 10;
console.log(x);

console.log(ageJonas < ageKani);

const isFullAge = ageKani >= 18;

*/
/*
const now = 2037;

const ageJonas = now - 1991;
const ageKani = now - 2018;

console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageKani) / 2;
console.log(ageJonas, ageKani, averageAge);
*/

/*
const heightMark = 1.69;
const heightJohn = 1.95;

const weightMark = 78;
const weightJohn = 92;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
*/

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Abhishek"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 00;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("Get a Job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
const age = "18";

if (age === 18) console.log("You just become an adult :D (strict)");

if (age == 18) console.log("You just become an adult :D (loose)");
*/

/*
const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someome else should drive...");
// }

const isTried = true; // C

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someome else should drive...");
}
*/

/*
const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else {
  console.log("Not a valid day!");
}
*/
/*
const age = 23;
age >= 18
? console.log("I like to drink wine 🍷")
: console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

console.log(`I like to drink ${drink}`);
*/
const bill = 430;

const tip = bill >= 300 && bill <= 50 ? bill * 0.15 : bill * 0.2;

console.log(bill, tip);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the final value ${bill + tip}.`
);
