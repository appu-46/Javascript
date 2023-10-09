'use strict';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendinglimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendinglimits.jay = 200;
console.log(spendinglimits);
const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas';
  const clearUser = user.toLowerCase();

  return value <= getLimit(limits, clearUser)
    ? [...state, { value: -value, description, user: clearUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendinglimits, 'Pizza 🍕');
console.log('NewBudget:', newBudget1);
const newBudget2 = addExpense(
  newBudget1,
  spendinglimits,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendinglimits, 'Stuff', 'Jay');

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
  // for (const entry of budget)
  //   if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
const finalBudget = checkExpenses(newBudget3, spendinglimits);
console.log(finalBudget);

// Impure
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    // .map(entry => entry.description.slice(-2))
    // .join(' / ');
    .reduce((str, cur) => `${str} ${cur.description.slice(-2)}  / `, '');

  console.log(bigExpenses);
  // let output = '';
  // for (const el of newBudget3)
  //   output += el.value <= -bigLimit ? `${el.description.slice(-2)} / ` : ''; // Emojis are 2 chars

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(finalBudget, 500);
