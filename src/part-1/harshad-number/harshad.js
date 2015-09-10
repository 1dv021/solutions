/**
 * Namespace for Harshad numbers.
 *
 * @namespace Harshad
 * @author Mats Loock
 * @version 1.0.0
 */
var Harshad = (function() {
    "use strict";

    return {
        /**
         * Returns true when the given number is a valid Harshad number.
         *
         * @param {Number} number The given number.
         * @returns {Boolean}
         * @function Harshad.isValid
         */
        isValid: function(number) {

            var strNumber = number.toString();
            var numArray = strNumber.split("").map(Number);

            var result = numArray.reduce(function(prev, current) {
                return prev + current;
            }, 0);

            return number % result === 0;

        },

        /**
         * Gets the next Harshad number after the given number.
         *
         * @param {Number} number The given number.
         * @returns {Number}
         * @function Harshad.getNext
         */
        getNext: function(number) {

            // TODO: Write your code here! This is the second function to implement.

            do {
                number += 1;
            } while (!this.isValid(number));

            return number;
        },

        /**
         * Returns a sequence of Harshad numbers, starting after a given number.
         *
         * @param {Number} count The number of consecutive Harshad numbers to return.
         * @param {Number} [start = 0] The number after which the sequence should start; defaults to 0.
         * @returns {Array.<Number>}
         * @function Harshad.getSequence
         */
        getSequence: function(count, start) {

            start = start || 0;
            var resArray = [];
            var i;

            for (i = 0; i < count; i += 1) {
                var tmp = this.getNext(start);
                resArray.push(tmp);
                start = tmp;
            }

            return resArray;

        }
    };
}());

module.exports = Harshad;
