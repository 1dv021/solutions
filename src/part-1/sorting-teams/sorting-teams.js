/**
 * Namespace for Sorting Teams assignment
 *
 * @namespace SortingTeams
 * @author thajo
 * @version 1.0.0
 */
var SortingTeams = (function() {
    "use strict";

    // let node.js help us with reading from filesystem
    var path = require("path");
    var fileSystem = require("fs");

    return {
        /**
         * Read data from a json-file.
         * @returns { Array.<{name: String, nickname: String, points: Number}> }
         */
        readTeamsFromFile: function() {
            // DO NOT CHANGE
            return JSON.parse(fileSystem.readFileSync(path.join(__dirname, "teams.json")));
        },

        /**
         * Call readTeamsFromFile to get the array with objects
         * Sorts the teams in the array according to points. Highest points first
         * Returns the sorted array
         * @returns { Array.<{name: String, nickname: String, points: Number}> }
         */
        sortTeams: function() {
            // TODO: Write your code here! Use the debugger to check what readTeamsFromFile returns
            var teams = this.readTeamsFromFile().teams;

            var result = teams.sort(function(a, b) {
                return b.points - a.points;
            });

            return result;
        }

    };
}());

module.exports = SortingTeams;
