/**
 * Module for a simple logger
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

// ########### pre defined code

// This is the logger array
var _log = [];

// This is the default code map codeMap[0] is 'info' o.s.v.
// It maps status code against status type
var _codeMap = [];
_codeMap.push("info");
_codeMap.push("warning");
_codeMap.push("debug");
_codeMap.push("fatal error");
_codeMap.push("system");

// ########### pre defined code ends

/**
 * This function writes to the log. If typeNumber is missing
 * it should save it as a 'info-message'/ the first in _codeMap
 * @param {string} message - the message to log
 * @param {Number} typeNumber - type of the message which is translated against the code map
 */
exports.write = function(message, typeNumber) {

    // use a helper function for translation
    var typeString = getTypeString(typeNumber);
    var obj = {};

    // set empty string if not provided (no test for this)
    obj[typeString] = message || "";
    _log.push(obj);
};

/**
 * This function reads from the log.
 * If typeNumber is provided only messages with that status should be shown
 * @param {Number} typeNumber - The type number to show
 * @returns {Array}
 */
exports.read = function(typeNumber) {
    // return all if no parameter is provided
    if (typeNumber === undefined) {
        return _log;
    }

    // Filter out the right values
    var resultArray = _log.filter(function(value) {

        // get the code in the object
        var code = getTypeNumber(Object.keys(value)[0]);

        // if it is the one the client want return true (and it will be filtered out)
        return code === typeNumber;
    });

    return resultArray;
};

/**
 * This function clears the log by removing all messages
 */
exports.clear = function() {
    // just redefine it as an empty array
    _log = [];
};

// ######### private Helper functions - No need to touch
// taken a typeNumber it returns the typeString eg. 0 returns 'info', 1 returns warning
function getTypeString(typeNumber) {
    // if typeNumber isn't found send back the first
    return _codeMap[typeNumber] || _codeMap[0];
}

// taken a type string it returns the status code eg. 'info' returns 0, 'xxx' returns 0
function getTypeNumber(typeString) {
    var length = _codeMap.length;

    // use a plain for-loop, forEach can't break/return;
    for (var i = 0; i < length; i++) {
        if (_codeMap[i] === typeString) {
            return i;
        }
    }

    // if status string isn't found return 0
    return 0;
}
