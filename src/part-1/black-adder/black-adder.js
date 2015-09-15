/**
 * Module for a simple calculator
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

exports.add = function() {
    // length of arguments
    var length = arguments.length;

    // hold the result through the loop
    var result = 0;

    var i;
    for (i = 0; i < length; i += 1) {
        // get all arguments
        var value = arguments[i];

        // if it is a string replace "," with "."
        if (typeof value === "string") {
            value = value.replace(",", ".");
        }

        // parse all to float
        value = parseFloat(value);

        // At this point we can check if it should return a error
        if (isNaN(value)) {
            return "error";
        }

        // add the value (will be a Number) to the result
        result += value;
    }

    return result;
};
