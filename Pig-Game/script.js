'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const init = function () {
  // Startihng conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEL.classList.add('hidden');

  current0EL.textContent = 0;
  current1EL.textContent = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  score[0] = 0;
  score[1] = 0;
  currentScore = 0;
  activePlayer = 0;
};
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// player1El.classList.remove('player--active');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  // console.log(dice);

  // 2. Display the dice image
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  score[activePlayer] += currentScore;

  console.log(score);

  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // score0El.textContent = currentScore;
  currentScore = 0;

  if (score[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    document.getElementById(
      `current--${activePlayer}`
    ).textContent = `🍗 Winner Winner Chicken Dinner 🍗`;

    diceEL.classList.add('hidden');
    // btnNew.classList.add('player--winner');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
