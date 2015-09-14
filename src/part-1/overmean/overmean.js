/**
 * Module for overmean
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * This function takes an Array with objects in the form
 * {name: "Stina", points: 32}
 * Which is representing a score on a test. The functions work is to
 * calculate the mean (medelvärde) point and return an array with just the names
 * of those students that has higher or equal points to the mean point
 * @param {Array<object>} students
 * @returns {Array<string>}
 */
exports.overmean = function(students) {

    if (!Array.isArray(students)) {
        throw TypeError("The argument is not an array.");
    }

    if (students.length === 0) {
        throw Error("The argument can not be an empty array.");
    }

    // Calculate the mean
    var mean = students.reduce(function(current, next) {
        return current + next.points;
    }, 0) / students.length;


    // first get the one with points over or equal to the mean point (filter)
    // then just return the names (map)
    var result = students.filter(function(current) {
        return current.points >= mean;
    }).map(function(current) {
        return current.name;
    });

    return result;
};

