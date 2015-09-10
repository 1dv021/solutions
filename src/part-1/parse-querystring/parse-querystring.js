/**
 * Module for a simple querystring parser
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * The function takes a String parameter. It will be a URL (in most cases) with
 * random number of querystrings ex. http://lnu.se?key1=value1&key2=value2
 * The function should return an object in the form
 * {key1: value1, key2: value2}
 * If no querystrings are provided an empty object should be returned
 * If no value is provided an empty string should be the value eg.
 * http://lnu.se?key should return {key: ''}
 * @param {string} url
 * @returns {Object}
 */
exports.parse = function(url) {

    // find '?' (start of querystring), returns -1 if not found
    var index = url.indexOf("?");

    // just an URL with no querystring values at all
    if (index === -1) {
        return {};
    }

    // get the querystring, dont include the'?' by adding +1
    var queryString = url.substr(index + 1);

    // if the querystring is nothing (just ?)
    if (queryString === "") {
        return {};
    }

    // get key:value as array elements
    var arr = queryString.split("&");

    var obj = {};
    arr.forEach(function(current) {
        var tmpArr = current.split("=");
        var key = tmpArr[0];

        // if qs just '?key' the value should be a empty string
        var value = tmpArr[1] || "";
        obj[key] = value;
    });

    return obj;
};
