// Importing module
// import {addToCart, totalPrice as price, tq} from'./shoppingCart.js'

console.log('Importing Module');

import shoppingCart from './shoppingCart.js';
// addToCart('bread', 6)

// console.log(price,tq);

// import * as ShoppingCart from './shoppingCart.js'

// ShoppingCart.addToCart('bread', 7)
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 8);

// console.log(cart);

// console.log(`Start fetching`);
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

// const data = await res.json();

// console.log(data);
// console.log(`Something`);

// const getLastPost = (async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// })();

// const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

// clean code
// const lastPost2 = await getLastPost;
// console.log(lastPost2);

/*
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 235;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
    shippingCost,
  };
})();

shoppingCart2.addToCart(`apple`, 2);
shoppingCart2.addToCart(`pizza`, 2);
console.log(shoppingCart2);
*/

/*
// Export
export.addToCart =  function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
  );
};

// Import 
const { addToCart } = require ('./shoppingCart.js')

*/
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

// import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

import 'core-js/stable';
// olifilling async functions
import 'regenerator-runtime/runtime';
