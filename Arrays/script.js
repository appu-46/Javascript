'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const dislayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayCurrentBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

displayCurrentBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    // .map(mov => mov)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income}€`;

  const outoging = movements
    .filter(mov => mov < 0)
    .map(mov => Math.abs(mov))
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${outoging}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

dislayMovements(account1.movements);
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });

  // return username;
};
createUsername(accounts);

// For debugging the above for loop
// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log('----------------SLICE----------------');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
console.log('----------------SPLICE----------------');
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE
console.log('----------------REVERSE----------------');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
console.log('----------------CONCAT----------------');
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log('----------------JOIN----------------');
console.log(letters.join('-'));

*/

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// console.log(arr[-1]); doesnt work in JS like it works in python
// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----FOR EACH---');

movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log('----FOR EACH MAP---');
currencies.forEach(function (key, value, map) {
  console.log(`${value}: ${key}`);
});

const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'EUR']);

currenciesUnique.forEach(function (key, value, set) {
  console.log(`${value}: ${key}`);
});

*/

/*
// CODING CHALLENEGE :

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

const JuliaDogs = Julia.slice(1, -1);
const KateDogs = Kate.slice(1, -1);

console.log(Julia, JuliaDogs, Kate, KateDogs);

const Doggo = function (PupperArray) {
  PupperArray.forEach(function (age, i) {
    const gig = age > 3 ? 'adult' : 'puppy 🐶';
    console.log(`Dog number ${i + 1} is a ${gig}, and is ${age} years old. `);
  });
};
Doggo(JuliaDogs);
Doggo(KateDogs);
*/

/*

const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);

console.log(movementsUSDfor);

const movementsUSDarrow = movements.map(mov => mov * euroToUsd);

console.log(movementsUSDarrow);

const movementsDesc = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDesc);
*/

/*
const user = 'Steven Thmoas Williams';

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });

  // return username;
};
createUsername(accounts);
console.log(accounts);
*/

/*
const deposit = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposit);
console.log(movements);

const depositFor = [];

for (const mov of movements) if (mov > 0) depositFor.push(mov);

console.log(depositFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawals);

console.log(movements);

// accumulator -> SNOWBALL

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i} : ${acc}`);
  console.log(`acc = ${acc}, cur = ${cur}, arr = ${arr}`);
  return acc + cur;
});

console.log(balance);

let balance2 = 0;

for (const mov of movements) balance2 += mov;

console.log(balance2);

*/

/*
// Three different functions

console.log('--------lengthy approach but code more readable----------');
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const CalchumanAge = function (arr) {
  let humanAgeArr = [];
  const humanAge = arr.forEach(function (dogAge) {
    if (dogAge <= 2) humanAgeArr.push(2 * dogAge);
    else humanAgeArr.push(16 + dogAge * 4);
  });
  // console.log(humanAge);
  return humanAgeArr;
};

console.log(CalchumanAge(data1));
console.log(CalchumanAge(data2));

const AdultDoggos = function (arr) {
  let humanAge = CalchumanAge(arr);

  humanAge = humanAge.filter(age => age > 18);
  return humanAge;
};

console.log(AdultDoggos(data1));
console.log(AdultDoggos(data2));

const CalcAverage = function (arr) {
  let humanAge = AdultDoggos(arr);
  // console.log(humanAge);
  const AverageAge = humanAge.reduce((acc, age) => acc + age) / humanAge.length;
  return AverageAge;
};

console.log(CalcAverage(data1));
console.log(CalcAverage(data2));

console.log('------------Single function for all------------');
// Single function for all executions

const oneFunctionForAll = function (arr) {
  const humanAge1 = arr.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge1);

  const AdultDogs = humanAge1.filter(age => age > 18);
  console.log(AdultDogs);

  const AverageAge1 =
    AdultDogs.reduce((acc, age) => acc + age) / AdultDogs.length;
  console.log(AverageAge1);
};

oneFunctionForAll(data1);
oneFunctionForAll(data2);

*/

/*

const eurToUSD = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/
