/**
 * Module for reduce array 2
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * Takes an Array with objects as {nr: <Number>} and sum up all the nr to a total sum
 * @param {Array.<Object>} data An array with objects in the form {nr: <Number>}
 * @returns {Number} The total sum of all nr-values in the objects
 */
exports.getTotal = function(data) {

    // Important to set a start value and just treat previousValue as a Number
    // otherwise we get NaN.
    var totalSum = data.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue.nr;
    }, 0);

    return totalSum;
};
