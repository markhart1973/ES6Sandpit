'use strict';

// ** Arrow function results in a function type.
// var getPrice = () => 5.99;
// console.log(typeof getPrice);

// ** Arrow function with one parameter.
// var getPrice = count => count * 4.00;
// console.log(getPrice(2));

// ** Arrow function with two parameters.
// var getPrice = (count, tax) => count * 4.00 * (1 + tax);
// console.log(getPrice(2, 0.07));

// ** In ES5, 'this' is set to the object on which the function is called i.e. invoice.
// var invoice = {
//     number: 123,
//     process: function() {
//         console.log(this);
//     }
// };
// invoice.process();

// ** In ES6, 'this' is set to the top level context. For a browser, this would be Window.
// var invoice = {
//     number: 123,
//     process: () => console.log(this)
// };
// invoice.process();

// ** Here, because this arrow function is returned from within a function, 'this' is returned
// to being the local context i.e. invoice.
// var invoice = {
//     number: 123,
//     process: function() {
//         return () => console.log(this.number);
//     }
// };
// invoice.process()();

// ** Arrow functions also ignore attempts to be bound.
// var invoice = {
//     number: 123,
//     process: function() {
//         return () => console.log(this.number);
//     }
// };
// var newInvoice = {
//     number: 456
// };
// invoice.process().bind(newInvoice);

// ** Arrow functions also ignore attempts for call as well.
// var invoice = {
//     number: 123,
//     process: function() {
//         return () => console.log(this.number);
//     }
// };
// var newInvoice = {
//     number: 456
// };
// invoice.process().call(newInvoice);

// ** Arrow functions do not have access to a prototype.
var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty('process'));