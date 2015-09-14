/**
 * Namespace for Sorting Array assignment
 *
 * @namespace SortingArrays
 * @author thajo
 * @version 1.0.0
 */
var SortingArrays = (function() {
    "use strict";


    function errorHandling(data) {
        if (!Array.isArray(data)) {
            return new TypeError("The argument is not an array.");
        }

        if (data.length === 0) {
            return new Error("The argument can not be an empty array.");
        }
    }

    return {
        /**
         * Takes an Array and sort it in descending (fallande) order
         * @param {Array} data - The unsorted array
         * @throws {TypeError} Argument must be an array.
         * @throws {Error} Argument can not be an empty array.
         * @returns {Array} - The sorted array
         */
        sortDescending: function(data) {
            var err = errorHandling(data);
            if (err) {
                throw err;
            }

            // lets do it the WP-way!
            return data.slice().sort(function(a, b) {
                return b - a;
            });

        },

        /**
         * Takes an Array and sort it in ascending (stigande) order
         * @param {Array} data - The unsorted array
         * @throws {TypeError} Argument must be an array.
         * @throws {Error} Argument can not be an empty array.
         * @returns {Array} - The sorted array
         */
        sortAscending: function(data) {
            var copy = data.slice();

            var err = errorHandling(copy);
            if (err) {
                throw err;
            }

            // Lets do it the bubblesort (boring) way!
            var length = copy.length;
            var swapped;
            do {
                swapped = false;
                length = length - 1;
                for (var i = 0; i < length; i++) {
                    if (copy[i] > copy[i + 1]) {
                        var tmp = copy[i];
                        copy[i] = copy[i + 1];
                        copy[i + 1] = tmp;
                        swapped = true;
                    }
                }

            } while (swapped);

            return copy;
        }
    };

}());

module.exports = SortingArrays;
