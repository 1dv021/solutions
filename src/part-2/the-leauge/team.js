"use strict";

/**
 *
 * @param {string} name - name of the team
 * @constructor
 */
function Team(name) {
    if (name === undefined) {
        throw new Error("Missing parameter 'name'");
    }

    this.name = name;
    this.points = 0;
}

/**
 * Returning a string with the name and points
 * @param {Number} padding - the number of characters to pad in the points
 * @returns {string}
 */
Team.prototype.toTableRow = function(padding) {
    padding = padding || 25;
    var length = this.name.length;
    var diff = padding - length;
    padding = new Array(diff+1).join(" ");
    return this.name + padding + this.points;
};

// exports the object
module.exports = Team;
