'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Kunj';
      const str = `Oh you are a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Appu';

calcAge(1991);
*/
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Appu';
let job = 'Developer';
const year = 1999;

// Functions
function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

let numProducts = 10;

function deleteShoppingCart() {
  console.log('All items deleted!!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
