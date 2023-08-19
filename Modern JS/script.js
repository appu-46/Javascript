// Importing module
// import {addToCart, totalPrice as price, tq} from'./shoppingCart.js'

console.log('Importing Module');

// addToCart('bread', 6)

// console.log(price,tq);

// import * as ShoppingCart from './shoppingCart.js'

// ShoppingCart.addToCart('bread', 7)
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 8);

console.log(cart);
console.log(`Start fetching`);
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

const data = await res.json();

console.log(data);
console.log(`Something`);
