"use strict";

var Team = require("./../../../src/part-2/the-leauge/Team");
var expect = require("chai").expect;

describe("Team - Creation and public properties (file: Team.js)", function() {

    describe("Type", function() {
        it("should be instance of Team", function(done) {
            var team = new Team("test");
            expect(team).to.be.an.instanceOf(Team);
            done();
        });
    });

    describe("Construct", function() {
        it("should throw Error if no name provided to constructor", function(done) {
            var fnk = function(){new Team()};
            expect(fnk).to.throw(Error);
            done();
        });
    });

    describe("Property - name", function() {
        it("should have property name when provided", function(done) {
            var team = new Team("test");
            expect(team.name).eql("test");
            done();
        });
    });

    describe("Property - points", function() {
        it("should have property points set to value 0", function(done) {
            var team = new Team("test");
            expect(team.points).eql(0);
            done();
        });
    });

    describe("Method - toTableRow", function() {
       it("Should have a method toTableRow on the prototype", function(done) {

           expect(Team.prototype).to.have.property("toTableRow").that.is.a("Function");
           done();
       });
    });
});

describe("Team - toTableRow", function() {

    describe("toTableRow", function() {
        it("should return correct object string when called with no padding (default 25)", function(done) {
            var team = new Team("test");
            team.points = 25;
            var str = Array(26 - team.name.length).join(" ");
            str = team.name + str + team.points;
            expect(team.toTableRow()).eql(str);
            done();
        });
    });
});
