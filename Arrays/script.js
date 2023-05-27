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
const movementsdemo = [200, 450, -400, 3000, -650, -130, 70, 1300];
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

const dislayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayCurrentBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// displayCurrentBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    // .map(mov => mov)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income}€`;

  const outoging = acc.movements
    .filter(mov => mov < 0)
    .map(mov => Math.abs(mov))
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${outoging}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

// dislayMovements(account1.movements);
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

const updateUI = function (acc) {
  // Dislay movments
  dislayMovements(acc.movements);
  // Display balance
  displayCurrentBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// For debugging the above for loop
// console.log(containerMovements.innerHTML);

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    // Diplay UI and message
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    // Clear the login fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  } else {
    console.log(`transfer invalid`);
  }

  // console.log(amount, receiverAcc);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log(`Incorrect username or pin entered.`);
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(currentAccount.movements);
  dislayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
///////////////////////////LECTURES

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

/*

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

/*
console.log(movementsdemo);

// Equality
console.log(movementsdemo.includes(1300));

// Some codition (any)
console.log(movementsdemo.some(mov => mov === 1300));

// Every condition
console.log(movementsdemo.every(mov => mov === 1300));

// Seperate callback

const deposit = mov => mov < 0;

console.log(movementsdemo.some(deposit));
console.log(movementsdemo.every(deposit));
console.log(movementsdemo.filter(deposit));

*/
/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());
console.log(owners);

console.log(movementsdemo);
// movementsdemo.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movementsdemo.sort((a, b) => a - b);
console.log(movementsdemo);

*/
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

const overallBalance = accounts
.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov);

console.log(overallBalance);
*/

/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5));
// x.fill(1);

x.fill(1, 3, 5);
x.fill(1);
arr.fill(23, 2, 6);

console.log(arr);
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 7);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
*/

///////////////////////////
// Array exercise :
//this is a nice title => This Is A Nice Title

/*
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleString = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  // camelString.map(title => title);

  return titleString;
};

console.log(convertTitleCase('this is a nice title'));

*/

// CODING CHALLENGE
// TEST DATA :
const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob'],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ['Matilda'],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John'],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ['Michael'],
  },
];
// console.log(typeof dogs[0].weight);

const calcRecommendedFoodPortion = function (dogs) {
  dogs.forEach(function (dog) {
    dog.recommendedPortion = Math.trunc(dog.weight ** 0.75 * 28);
  });
};
calcRecommendedFoodPortion(dogs);
// console.log(recommendedFood);
// let eatenTooMuch = [];
// let eatenTooLess = [];

// return recommendedFood;
const doggoEatingEnough = function (dogs) {
  dogs.forEach(function (dog) {
    if (
      dog.curFood >= 0.9 * dog.recommendedPortion &&
      dog.curFood <= 1.1 * dog.recommendedPortion
    ) {
      console.log(`${dog.owners}'s dog is eating okay`);
    }
    if (dog.curFood <= 0.9 * dog.recommendedPortion) {
      // eatenTooLess.push(dog.owners);
      console.log(`${dog.owners}'s dog is eating too little`);
    }
    if (dog.curFood >= 1.1 * dog.recommendedPortion) {
      // eatenTooMuch.push(dog.owners);
      console.log(`${dog.owners}'s dog is eating too much`);
    }
  });
};
// doggoEatingEnough(dogs);

// Filter method, should have used this
const eatenTooMuch = dogs
  .filter(dog => dog.curFood >= 1.1 * dog.recommendedPortion)
  .flatMap(dog => dog.owners);

console.log(eatenTooMuch);

const eatenTooLess = dogs
  .filter(dog => dog.curFood <= 0.9 * dog.recommendedPortion)
  .flatMap(dog => dog.owners);
console.log(eatenTooLess);

console.log(dogs);

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

// const findIndexOwner = function (dogs, owner) {
//   dogs.forEach(function (dog) {
//     const targetIndex = dog.owners.findIndex(owners => (owners = owner));
//     return targetIndex;
//   });
// };
console.log(sarahDog);
