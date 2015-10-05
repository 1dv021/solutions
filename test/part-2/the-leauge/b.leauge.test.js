"use strict";

var Leauge = require("./../../../src/part-2/the-leauge/leauge");
var Team = require("./../../../src/part-2/the-leauge/team");
var expect = require("chai").expect;

describe("Leauge - Creation and public properties (file: Leauge.js)", function() {

    describe("Type", function() {
        it("should be instance of Leauge", function(done) {
            var l = new Leauge();
            expect(l).to.be.an.instanceOf(Leauge);
            done();
        });
    });


    describe("Property - teams", function() {
        it("should have property teams <Array> when created", function(done) {
            var l = new Leauge();
            expect(l.teams).eql([]);
            done();
        });
    });

    describe("Method - playMatches", function() {
        it("Should have a method playMatches on the prototype", function(done) {

            expect(Leauge.prototype).to.have.property("playMatches").that.is.a("Function");
            done();
        });
    });

    describe("Method - registerResult", function() {
        it("Should have a method registerResult on the prototype", function(done) {

            expect(Leauge.prototype).to.have.property("registerResult").that.is.a("Function");
            done();
        });
    });

    describe("Method - playMatch", function() {
        it("Should have a method playMatch on the prototype", function(done) {

            expect(Leauge.prototype).to.have.property("playMatch").that.is.a("Function");
            done();
        });
    });

    describe("Method - getTableString", function() {
        it("Should have a method getTableString on the prototype", function(done) {

            expect(Leauge.prototype).to.have.property("getTableString").that.is.a("Function");
            done();
        });
    });
});

describe("Leauge - addTeam", function() {

    describe("Add team", function () {
        it("should add team to the teams-array", function (done) {
            var l = new Leauge();
            expect(l.teams).eql([]);
            l.addTeam(new Team("Tottenham"));
            expect(l.teams.length).eql(1);
            done();
        });
    });

    describe("Add team", function () {
        it("should add team to the teams-array", function (done) {
            var l = new Leauge();
            expect(l.teams).eql([]);
            l.addTeam(new Team("Tottenham"));
            expect(l.teams.length).eql(1);
            done();
        });
    });
});

describe("Leauge - playMatch", function() {

    describe("play match", function () {
        it("should generate a object in the form { homeGoal: homeGoal, awayGoal: awayGoal }", function (done) {
            var l = new Leauge();

            var obj = l.playMatch();

            expect(obj.homeGoal).to.be.a("number");
            expect(obj.homeGoal).to.be.within(0, 6);
            expect(obj.awayGoal).to.be.a("number");
            expect(obj.awayGoal).to.be.within(0, 4);

            done();
        });
    });

    describe("play match", function () {
        it("should generate correct type in object", function(done) {
            var l = new Leauge();

            var obj = l.playMatch();

            expect(obj.homeGoal).to.be.a("number");
            expect(obj.awayGoal).to.be.a("number");

            done();
        });
    });

    describe("play match", function() {
        it("should generate correct random interval in object - default values", function(done) {

            var l = new Leauge();

            for (var i = 0; i < 1000; i += 1) {
                var obj = l.playMatch();
                expect(obj.homeGoal).to.be.within(0, 6);
                expect(obj.awayGoal).to.be.within(0, 4);
            }

            done();
        });
    });

    describe("play match", function() {
        it("should generate correct random interval in object - with arguments", function(done) {

            var l = new Leauge();

            for (var i = 0; i < 1000; i += 1) {
                var obj = l.playMatch(1, 1);
                expect(obj.homeGoal).to.be.within(0, 1);
                expect(obj.awayGoal).to.be.within(0, 1);
            }

            done();
        });
    });
});

describe("Leauge - registerResult", function() {

    describe("registerResult", function () {
        it("should update the score if home team win", function (done) {
            var l = new Leauge();
            var r = {homeGoal: 1, awayGoal: 0};
            var t1 = new Team("t1");
            var t2 = new Team("t2");

            l.registerResult(r, t1, t2);
            expect(t1.points).eql(3);
            expect(t2.points).eql(0);
            done();
        });
    });

    describe("registerResult", function () {
        it("should update the score if home team lose", function (done) {
            var l = new Leauge();
            var r = {homeGoal: 1, awayGoal: 2};
            var t1 = new Team("t1");
            var t2 = new Team("t2");

            l.registerResult(r, t1, t2);
            expect(t1.points).eql(0);
            expect(t2.points).eql(3);
            done();
        });
    });

    describe("registerResult", function() {
        it("should update the score if it's a draw", function (done) {
            var l = new Leauge();
            var r = {homeGoal: 1, awayGoal: 1};
            var t1 = new Team("t1");
            var t2 = new Team("t2");

            l.registerResult(r, t1, t2);
            expect(t1.points).eql(1);
            expect(t2.points).eql(1);
            done();
        });
    });
});

describe("Leauge - playMatches", function() {

    describe("playMatches", function() {
        it("should update teams score", function(done) {
            var l = new Leauge();
            var t1 = new Team("t1");
            var t2 = new Team("t2");
            t1 = l.addTeam(t1);
            t2 = l.addTeam(t2);

            l.playMatches();

            expect(t1.points > 0 || t2.points > 0).to.be.true;

            switch (t1.points) {
                case 0 :
                    expect(t2.points).eql(6);
                    break;
                case 1 :
                    expect(t2.points).eql(4);
                    break;
                case 3 :
                    expect(t2.points).eql(3);
                    break;
                case 4 :
                    expect(t2.points).eql(1);
                    break;
                case 6 :
                    expect(t2.points).eql(0);
                    break;
            }

            done();
        });
    });

    describe("playMatches", function () {
        it("should not play against self: 0 points", function(done) {
            var l = new Leauge();
            var t1 = new Team("t1");
            l.addTeam(t1);

            l.playMatches();

            expect(t1.points).eql(0);

            done();
        });
    });
});

describe("Leauge - getTableString", function() {

    describe("getTableString", function() {
        it("should return a string with whole table", function(done) {
            var l = new Leauge();
            var r = {homeGoal: 1, awayGoal: 1};
            var t1 = new Team("t1");
            var t2 = new Team("t2");
            t1 = l.addTeam(t1);
            t2 = l.addTeam(t2);
            l.registerResult(r, t1, t2);
            r = {homeGoal: 2, awayGoal: 1};
            l.registerResult(r, t1, t2);

            var space = Array(18).join(" ");

            var res = "t1" +space + "4\n" + "t2" +space + "1";

            expect(l.getTableString(20)).eql(res);

            done();
        });
    });

    describe("getTableString", function() {
        it("should return a string with whole table in correct order", function(done) {
            var l = new Leauge();
            var r = {homeGoal: 1, awayGoal: 2};
            var t1 = new Team("t1");
            var t2 = new Team("t2");
            t1 = l.addTeam(t1);
            t2 = l.addTeam(t2);
            l.registerResult(r, t1, t2);
            r = {homeGoal: 2, awayGoal: 2};
            l.registerResult(r, t1, t2);

            var space = Array(18).join(" ");

            var res = "t2" +space + "4\n" + "t1" +space + "1";

            expect(l.getTableString(20)).eql(res);

            done();
        });
    });

});

describe("Leauge - multiple leauge", function() {

    describe("multiple leauge", function() {
        it("should seperate team in diffrent leauges", function(done) {
            var l = new Leauge();

            var t1 = new Team("t1");
            var t2 = new Team("t2");

            var t11 = l.addTeam(t1);
            var t21 = l.addTeam(t2);
            var r = {homeGoal: 1, awayGoal: 1};
            l.registerResult(r, t11, t21);
            r = {homeGoal: 2, awayGoal: 1};
            l.registerResult(r, t11, t21);


            var l2 = new Leauge();
            var t111 = l2.addTeam(t1);
            var t222 = l2.addTeam(t2);
            r = {homeGoal: 2, awayGoal: 4};
            l2.registerResult(r, t111, t222);
            r = {homeGoal: 2, awayGoal: 4};
            l2.registerResult(r, t111, t222);

            var space = Array(18).join(" ");

            var res = "t1" +space + "4\n" + "t2" +space + "1";
            var res2 = "t2" +space + "6\n" + "t1" +space + "0";


            expect(l.getTableString(20)).eql(res);
            expect(l2.getTableString(20)).eql(res2);


            done();
        });
    });

});
