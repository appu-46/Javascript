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
