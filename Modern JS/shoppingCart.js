// Importing module 
console.log('Eporting module')

const shoppingCart = 10;
const cart = [];

export const addToCart = function(product, quantity){
    cart.push({ product, quantity})
    console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23

export { totalPrice, totalQuantity as tq}