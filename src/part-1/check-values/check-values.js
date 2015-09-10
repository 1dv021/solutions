/**
 * Module for a simple value checker
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * Sends back a string with a message depending on what the parameters
 * data type.
 * See the tests at /test/part-1/check-values/ for more information how to respond
 * @param {*} value - The variable to exam
 * @returns {string} - A message that tells what the data type is (according to javascript).
 * See readme
 */
exports.check = function(value) {
    var startMessage = "You send me ";

    var type = typeof value;

    if (type === "undefined") {
        startMessage += "an undefined value";
    } else if (type === "function") {
        startMessage += "a function";
    } else if (type === "string") {
        startMessage += "a string";
    } else if (type === "number") {
        startMessage += "a number";
    } else if (type === "boolean") {
        startMessage += "a boolean";
    } else if (type === "object") {
        if (value === null) {
            startMessage += "null";
        } else if (Array.isArray(value)) {
            startMessage += "an array";
        } else {
            startMessage += "an object";
        }
    }

    return startMessage;
};
