'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);

//1. New {} is created
//2. function is called , this = {}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas);
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 4, 6, 7, 3, 4, 5]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

console.dir(x => x + 1);

*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h.`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h.`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1, car2);

car1.accelerate();
car2.brake();
car2.accelerate();

console.log(car1, car2);
*/

//  Class expression
//  const PersonCl = class {}

// class decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  greet() {
    console.log(`Hey ${this._fullName}`);
  }
}

const jessica = new PersonCl('Jessica Davis', 1999);
console.log(jessica);
jessica.calcAge();
jessica.greet();

// 1. Class are not hoisted
// 2. Classes are first-class citizen
// 3. CLasses are executed in strict mode

const walter = new PersonCl('Walter White', 1992);

walter.calcAge();

const account = {
  owner: 'Jonas',
  movements: [200, 354, 566, 1223],

  get latest() {
    return this.movements.slice(-1).pop();
  },
};

console.log(account.latest);

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h.`);
  }

  get speedUS() {
    return this.speed / 1.6;
    // console.log(`'${make}' is going at ${this.speed/=1.6} mi/h`);
  }

  set speedUS(speed) {
    speed = this.speed * 1.6;
  }
}

const car1 = new Car('Ford', 120);
