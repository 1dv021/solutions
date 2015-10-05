"use strict";

/**
 * Creates the object
 * @constructor
 */
function Leauge() {
    this.teams = [];
}

function shallowCopy(orginal) {
    // First create an empty object with
    // same prototype of our original source
    var clone = Object.create(Object.getPrototypeOf(orginal)) ;

    var i, keys = Object.getOwnPropertyNames(orginal) ;
    for (i = 0 ; i < keys.length ; i += 1)
    {
        // copy each property into the clone
        Object.defineProperty(clone, keys[ i ],
            Object.getOwnPropertyDescriptor(orginal, keys[ i ])
        ) ;
    }

    return clone ;
}

/**
 * Clone the teamobject and adds it to the array of teams
 * @param {string} team
 * @returns {Team} - The cloned added Team object
 */
Leauge.prototype.addTeam = function(team) {
    var clone = shallowCopy(team);
    this.teams.push(clone);
    return clone;
};

/**
 * Simulate a match. Uses Math.random to draw home- and awayGoals
 * @param {Number} maxHomeGoal - The max number of home goals to include in the simulation
 * @param {Number} maxAwayGoal - The max number of away goals to include in the simulation
 * @returns {{homeGoal: number, awayGoal: number}}
 */
Leauge.prototype.playMatch = function(maxHomeGoal, maxAwayGoal) {
    maxHomeGoal = maxHomeGoal || 6;
    maxAwayGoal = maxAwayGoal || 4;

    var homeGoal = Math.floor(Math.random() * maxHomeGoal);
    var awayGoal = Math.floor(Math.random() * maxAwayGoal);
    return { homeGoal: homeGoal, awayGoal: awayGoal };
};

/**
 * Updates the teams point refering to the result. 3 points for a win, 1 for a draw, 0 for losing
 * @param {{homeGoal: number, awayGoal: number}} result - The result object including home- and awaygoals
 * @param {Team} homeTeam
 * @param {Team} awayTeam
 */
Leauge.prototype.registerResult = function(result, homeTeam, awayTeam) {
    if (result.homeGoal > result.awayGoal) {
        homeTeam.points += 3;
    } else if (result.homeGoal === result.awayGoal) {
        homeTeam.points += 1;
        awayTeam.points += 1;
    } else {
        awayTeam.points += 3;
    }
};

/**
 * Simulates ALL matches in the leauge. Each team meets two times (as home team and as away team)
 * The team can´ play against it self. Using the method playMatch and registerResult
 */
Leauge.prototype.playMatches = function() {
    for (var i = 0; i < this.teams.length; i += 1) {
        for (var j = this.teams.length - 1; j >= 0; j -= 1) {
            var homeTeam = this.teams[i];
            var awayTeam = this.teams[j];
            if (this.teams[i] !== this.teams[j]) {
                var result = this.playMatch();
                this.registerResult(result, homeTeam, awayTeam);
            }
        }
    }
};

/**
 * Creates a printable string with the table
 * @param {Number} padding - The number of characters befor the point (justify the table)
 * @returns {string}
 */
Leauge.prototype.getTableString = function(padding) {
    var str = "";

    this.teams.sort(function(a, b) {
        return b.points - a.points;
    }).forEach(function(current, index, arr) {
        str += current.toTableRow(padding);
        if (index !== arr.length - 1) {
            str += "\n";
        }
    });

    return str;
};

// exports the object for others tho use
module.exports = Leauge;
