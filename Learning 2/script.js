"use strict";

/*
let hasDriversLicense = false;

const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

/*
function logger() {
  console.log("My name is Abhishek");
}

// Calling / invoking / running fucntion

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declartion
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Fucntion expression 
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
// Fucntion expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Fucntion
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Kunj"));
console.log(yearsUntilRetirement(1999, "Kanni"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const oragePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${oragePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 34));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    console.log(`${firstName} is ${age} years old and has already retired! 🥳`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1950, "Abhishek"));
*/

// const sum = (round1,round2,round3) => (round1+round2+round3)

/*
const calcAverage = (round1, round2, round3) => (round1 + round2 + round3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

console.log(
  `Team Dolphins average score is ${scoreDolphins}.Team Koalas average score is ${scoreKoalas}.`
);
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    return console.log(`No team wins`);
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
*/

/*
const friends = ["Micheal", "Jim", "Dwight"];
console.log(friends);
friends.push("Ryan");
console.log(friends);
*/

// Coding challenge
/*
const bill = [125, 555, 44];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [
  calcTip(bill[0]) + bill[0],
  calcTip(bill[1]) + bill[1],
  calcTip(bill[2]) + bill[2],
];

console.log(tip);
console.log(total);
*/

/*
const abhiArray = [
  "Abhishek",
  "Prajapati",
  2037 - 1999,
  "Engineer",
  ["Amey", "Kanishk", " prajval"],
];

const abhi = {
  firstName: "Abhishek",
  lastName: "Prajapati",
  age: 2037 - 1999,
  job: "Engineer",
  friends: ["Amey", "Kanishk", " prajval"],
};

console.log(abhi);

console.log(abhi.lastName);
console.log(abhi["lastName"]);

const nameKey = "Name";
console.log(abhi["first" + nameKey]);
console.log(abhi["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Abhishek? Choose between firstName,lastName,age, job, and friends"
);

if (abhi[interestedIn]) {
  console.log(abhi[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName,lastName,age, job, and friends."
  );
  
  // Challenege
  
  console.log(
    `${abhi.firstName} has ${abhi.friends.length} friends, and his best friend is called ${abhi.friends[0]}`
    );
    
}*/

const abhi = {
  firstName: "Abhishek",
  lastName: "Prajapati",
  age: 2037 - 1999,
  job: "Engineer",
  friends: ["Amey", "Kanishk", " prajval"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
};

console.log(abhi.calcAge(1992));
// console.log(abhi["calcAge"](1991));
