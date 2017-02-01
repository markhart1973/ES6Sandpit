'use strict';

// ** let keyword **

// ** No hoisting takes place when using the new let keyword. This throws an error.
// console.log(productId);
// let productId = 12;

// ** When pre-declared, it will behave as ES5 and will undefined.
// let productId = 12;
// console.log(productId);

// ** Block scope.

// This will output 12.
// let productId = 12;
// {
//     let productId = 2000;
// }
// console.log(productId);

// This will output an error.
// {
//     let productId = 2000;
// }
// console.log(productId);

// Scoping includes brackets and for example, for loops. Output here is 42.
// let productId = 42;
// for (let productId =0; productId < 10; productId++)
// {
// }
// console.log(productId);


// ** const keyword **

// ** When using const, the variable must be initialised. This throws an error.
// const MARKUP_PCT;
// console.log(MARKUP_PCT);

// ** A constant cannot be 
const MARKUP_PCT = 100;
MARKUP_PCT = 50;
console.log(MARKUP_PCT);

// ** Block scoping applied to const as well.