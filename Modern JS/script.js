// Importing module
// import {addToCart, totalPrice as price, tq} from'./shoppingCart.js'

// console.log('Importing Module');

// addToCart('bread', 6)

// console.log(price,tq);

// import * as ShoppingCart from './shoppingCart.js'

// ShoppingCart.addToCart('bread', 7)
// console.log(ShoppingCart.totalPrice);

import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

add('pizza', 2);
console.log(price);
