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
// console.log(me);
// console.log(job);
// console.log(year);

/*
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
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1999);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const appu = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

appu.calcAge();

const juliet = {
  year: 2011,
};

juliet.calcAge = appu.calcAge;

juliet.calcAge();
*/

// var firstName = 'Matilda';

/*
const appu = {
  firstName: 'Appu',
  year: 1999,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // const self = this;
    // const isMellenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // isMellenial();
    // };

    const self = this;
    const isMellenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      // isMellenial();
    };
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

appu.greet();
appu.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => a + b;

*/
let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);
