/**
 * Module for reduce array
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * Takes an Array Numbers and returns the sum of all numbers in the array
 * @param {Array.<Number>} data An array with numbers
 * @returns {Number} The total sum of numbers in the array
 */
exports.getTotal = function(data) {

    // Important to set a start value and just treat previousValue as a Number
    // otherwise we get NaN.
    var totalSum = data.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

    return totalSum;
};
