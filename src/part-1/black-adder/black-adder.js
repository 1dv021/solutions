/**
 * Module for a simple calculator
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

exports.add = function() {
    var length = arguments.length;
    var result = 0;

    var i;
    for (i = 0; i < length; i += 1) {
        // get all arguments
        var value = arguments[i];

        if (typeof value === "string") {
            value = value.replace(",", ".");
            value = parseFloat(value);
        }

        if (!checkNumber(value)) {
            return "error";
        }

        result += value;
    }

    return result;
};

function checkNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
