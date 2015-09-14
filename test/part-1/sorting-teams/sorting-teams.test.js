/**
 * @author thajo
 * @version 1.0.0
 */

"use strict";

var st = require("./../../../src/part-1/sorting-teams/sorting-teams");
var expect = require("chai").expect;

describe("SortingTeams.sortTeams()", function() {

    var obj = [
        {
            "name": "Tottenham Hotspur FC",
            "nickname": "Spurs",
            "points": 30
        },
        {
            "name": "Everton FC",
            "nickname": "The Toffees",
            "points": 15
        },
            {
                "name": "Liverpool FC",
                "nickname": "The Reds",
                "points": 6
            },

            {
                "name": "Manchester United",
                "nickname": "The Red devils",
                "points": 5
            },
        {
            "name": "Arsenal",
            "nickname": "The Gunners",
            "points": 2
        }
    ];

    it("SortingTeams.sortTeams() should return an array", function(done) {
        expect(st.sortTeams()).to.be.instanceof(Array);

        done();
    });

    it("SortingTeams.sortTeams() should return correct sorted", function(done) {
        expect(st.sortTeams()).to.eql(obj);
        done();
    });


});
