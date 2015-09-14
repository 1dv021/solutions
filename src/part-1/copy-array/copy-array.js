/**
 * Module for copy array
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * The function takes an Array, makes a copy if it and adds the number parameter at the end
 * The original array should be untouched
 *
 * @param {Array.<Number>} data - An array with numbers
 * @param {Number} number - A number to add at the end
 * @throws {TypeError} First argument must be an array, second argument must be a Number.
 * @throws {Error} First argument can not be an empty array.
 * @returns {Array}
 */
exports.addToCopy = function(data, number) {

    if (!Array.isArray(data) || typeof number !== "number") {
        throw new TypeError("The argument(s) are not correct.");
    }

    if (data.length === 0) {
        throw new Error("The argument can not be an empty array.");
    }

    // copy the array
    var copy = data.slice();

    // add the number
    copy.push(number);

    // return the array
    return copy;
};
