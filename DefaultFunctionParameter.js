'use strict';

// ** Outputs 1000.
// var getProduct = function(productId = 1000) {
//     console.log(productId);
// };
// getProduct();

// ** Using undefined results in the parameter default.
// var getProduct = function(productId = 1000, type = 'software') {
//     console.log(productId + ', ' + type);
// };
// getProduct(undefined, 'hardware');

// ** Using another parameter and calculation in total.
var getTotal = function(price, tax = price * 0.07) {
    console.log(price + tax);
};
getTotal(5.00);

// ** accessing other variables.
var baseTax = 0.07;
var getTotal = function(price, tax = price * 0.07) {
    console.log(price + tax);
};
getTotal(5.00);