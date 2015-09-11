/**
 * Module for a couple of simple programming tasks
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * Returns the number 24
 * @returns {Number}
 */
exports.add = function() {

    // Pre-defined variables. Do not change this definitions
    var a = 12;
    var b = "12";

    // Your code here - change the code under to make the test go green
    // The problem is to change så that variables a and b both become of data type "Number"
    return a + parseInt(b);
};

/**
 * Returns the string "I'm going to learn programming in 10 weeks"
 * @returns {String}
 */
exports.concater = function() {

    // Pre-defined variables. Do not change this definitions
    var message = "I'm going to learn programming in";
    var time = 10;
    var weeks = "weeks";

    // Your code here - of course you should use the above variables to make the string
    // to return

    return message + " " + time + " " + weeks;
};

/**
 * Returns the rounded integer (avrundade heltalet) as sum of two decimal numbers
 * @returns {Number}
 */
exports.round = function() {

    // Pre-defined variables. Do not change this definitions
    var a = 12.24;
    var b = 12.27;

    // Your code here should return 25
    // the variables should be used in the calculation
    return Math.round(a + b);

};

/**
 * This function takes a word as parameter and finds the middle character or, if the word have a even length,
 * the two middle characters
 * Ex. "car" should return the character "a"
 * Ex. "cars" should return the caracters "ar"
 * Ex. "rhinos" should return the characters "in"
 * @param {string} word - A word with 3 or more characters
 * @returns {string} - A string containing the middle character(s)
 */
exports.middleCharacter = function(word) {

    // this function will be called by the tests in /test/tiny-tunes/tiny-tunes-test.js
    // the variable/parameter "word" will be a different string each time so your
    // code should work for each call/test

    var length = word.length;

    // Math.floor make sure the helfLength is a Number with no decimal (charAt take care of this so no need really)
    var halfLength = Math.floor(length / 2);
    var result = word.charAt(halfLength);

    if (length % 2 === 0) {
        // if it even also add the other character before
        result = word.charAt(halfLength - 1) + result;
    }

    return result;

};

/**
 * This function finds and return a hash tag in a string. If no hash tag is provided
 * a empty string is returned.
 * Ex. "Hello! #cheers" will return "cheers"
 * Ex. "I'm doing great #success! will return "success!"
 * @param {string} tweet - The tweet that can include one (and only one) hash-tag
 * @returns {string} - The hashtag (excluding the #-caracter)
 */
exports.findHash = function(tweet) {

    // find the character # indexof return -1 if not found
    var index = tweet.indexOf("#");

    // if we found it slice it (not the hash (+1))
    if (index > -1) {
        // remove the # from the string
        return tweet.slice(index + 1);
    }

    return "";


    /*
    // Alt. solution that will work if the hashtag is in the middle
    // of the string. The original assumed it always was att the and of the
    // string. See solution above.
    var index = tweet.indexOf("#");

    // if we found it slice it (not the hash (+1))
    if (index > -1) {
        // found next " " to get hashtag if the hashtag is in the middle
        var secIndex = tweet.indexOf(" ", index);
        var result;
        // check if it is in the middle
        if(secIndex > -1) {
            // remove the # from the string and just slice to the " "
            result = tweet.slice(index + 1, secIndex);
        }
        else {
            // it must been at the end
            result = tweet.slice(index + 1);
        }
        return result;
    }

    return "";
    */

};

/**
 * This function returns a string holding all odd number from zero to the parameter "limit"
 * Ex. if limit is 10 it should return the string "13579" because the numbers 1, 3, 5, 7 and 9 are
 * odd numbers that we found up to the number 10 (limit)
 * Ex. if limit is 3 it should return "13"
 * @param {number} limit - A positive number
 * @returns {string}
 */
exports.getOdd = function(limit) {

    var result = "";

    // limit handle the loop
    var i;
    for (i = 1; i <= limit; i += 1) {

        // if its odd
        if (i % 2 === 1) {
            // add the number
            result += i;
        }
    }

    return result;

};

/**
 * Writes a greeting message to the console depending on what time
 * it is. The function use javascript to get the current time.
 *
 * If hour is between 8 and 12 the message should be "Good morning!"
 * If hour is between 12 and 18 the message should be "Good afternoon!"
 * If hour is between 18 and 24 the message should be "Good evening!"
 * If hour is between 24 and 8 the message should be "Good night!"
 *
 * @returns {Number}
 */
exports.greetings = function() {

    var hour = new Date().getHours();
    var message = "";

    if (hour >= 8 && hour < 12) {
        message = "Good morning!";
    } else if (hour >= 12 && hour <= 18) {
        message = "Good afternoon!";
    }else if (hour > 18 && hour <= 24) {
        message = "Good evening!";
    } else {
        message = "Good night!";
    }

    // no tests to this. Run "node app.js" to see the console.log
    console.log(message);
};

/**
 * This function takes a string and replaces all "-" with " "
 * using a simple for-loop
 * Ex. if phrase is "Hello-World!" the function should return "Hello World!"
 * @param {string} phrase - The phrase to control
 * @returns {string} - The string whit all "-"-characters replaced with " "
 */
exports.simpleReplaceWithForLoop = function(phrase) {

    var length = phrase.length;
    var result = "";
    var i;
    for (i = 0; i < length; i += 1) {
        var char = phrase.charAt(i);
        if (char === "-") {
            result += " ";

        } else {
            result += char;
        }
    }

    return result;

};

/**
 * This function takes a string and replaces all "-" with " "
 * using a simple while-loop
 * @param {string} phrase - The phrase to control
 * @returns {string} - The string with all "-"-characters replaced with " "
 */
exports.simpleReplaceWithWhileLoop = function(phrase) {

    var length = phrase.length;
    var result = "";
    var i = 0;

    while (i < length) {
        var char = phrase.charAt(i);
        i += 1;
        if (char === "-") {
            result += " ";
        } else {
            result += char;
        }
    }

    return result;

};

/**
 * This function creates a string that is equal to
 * "11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53" by using two nested for-loops!
 * * @returns {string} - That is 11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53
 */
exports.firstThree = function() {

    var result = "";
    var i;

    var pairs = 5;
    var number = 3;

    for (i = 1; i <= pairs; i += 1) {
        var j;
        for (j = 1; j <= number; j += 1) {
            // result must be a string
            result += i.toString() + j.toString();

            // no "_" after the last
            if (j !== number) {
                result += "-";
            }
        }

        if (i !== pairs) {
            result += ", ";
        }
    }

    return result;
};

/**
 * The rövarspråket(robber language) - https://sv.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
 * is a simple crypt algorithm. This function takes a phrase and translates it to
 * an encrypted string by after every consonant adding a "o" and that consonant again.
 * The return string will always be lowercase!
 * The function uses a switch-statement!
 * Ex. "fint" becomes "fofinontot" and "rövarspråket" becomes "rorövovarorsospoproråkoketot"
 * @param {string} phrase
 * @returns {string} - The encrypted string - in lower case
 */
exports.robberLanguageEncrypter = function(phrase) {

    // make sure we just have lower case
    var phraseCopy = phrase.toLowerCase();
    var length = phraseCopy.length;
    var result = "";
    var i;
    for (i = 0; i < length; i += 1) {
        var char = phraseCopy.charAt(i);
        switch (char) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "å":
            case "ä":
            case "ö":
                result += char;
                break;
            default:
                result += char + "o" + char;
                break;
        }
    }

    return result;
};

/**
 * This function takes 2-4 parameters described below.
 * The function check that all parameters är valid data type and
 * concats a valid URL of the parameters ex.
 * domain = "lnu.se"
 * page = "program/webbprogrammerare"
 * isSecure = true (sets https if true otherwise http)
 * port = 8080
 * => https://lnu.se:8080/program/webbprogrammerare
 *
 * @param {string} domain - The domain name in the URL
 * @param {string} path - The path in the URL
 * @param [isSecure = false] - if true the protocol is https otherwise http - optional value, default "http"
 * @param [port = ""] - The port number of the URL - optional parameter default value ""
 * @returns {string} - Returns the valid URL string. If the call missing parameters (the two fist) or
 * have bad data type the function returns the string "Incorrect parameters"
 */
exports.makeURL = function(domain, path, isSecure, port) {

    var errorMessage = "Incorrect parameters";
    if ((!domain || typeof domain !==  "string") || (!path || typeof path !== "string")) {
        return errorMessage;
    }

    // if isSecure is omitted set the default value to false
    isSecure = isSecure || false;

    // check the data value
    if (typeof isSecure !== "boolean") {
        return errorMessage;
    }

    // which protocol should be used
    var url = isSecure ? "https" : "http";

    url += "://" + domain;

    if (port) {
        if (typeof port !== "number") {
            return errorMessage;
        }

        url += ":" + port;
    }

    url += path + "/";

    return url;

};
