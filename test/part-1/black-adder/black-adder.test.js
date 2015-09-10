"use strict";

var calc = require("../../../src/part-1/black-adder/black-adder");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {

    it("Should return 9 when called with 3, 6", function(done) {
        var sum = calc.add(3, 6);
        expect(sum).eql(9);
        done();
    });

    it("Should return 50 when called with five arguments a 10", function(done) {
        var sum = calc.add(10, 10, 10, 10, 10);
        expect(sum).eql(50);
        done();
    });

    it("Should return 5 when called with just one argument (5)", function(done) {
        var sum = calc.add(5);
        expect(sum).eql(5);
        done();
    });

    it("Should return 0 when called without argument", function(done) {
        var sum = calc.add();
        expect(sum).eql(0);
        done();
    });

    it("Should handle 0 as parameters", function(done) {
        var sum = calc.add(2, 3, 0);
        expect(sum).eql(5);
        done();
    });

    it("Should return 0 when called -1 and 1", function(done) {
        var sum = calc.add(1, -1);
        expect(sum).eql(0);
        done();
    });

    it("Should handle negative results", function(done) {
        var sum = calc.add(-1, -1, -1, -1);
        expect(sum).eql(-4);
        sum = calc.add(1, -1, -1);
        expect(sum).eql(-1);
        done();
    });
});

describe("Test the module with bad values", function() {

    it("Should return 12 when called with with three strings " +
        "that are text as numbers e.g. ('4', '4', '4')", function(done) {
        var sum = calc.add("4", "4", "4");
        expect(sum).eql(12);
        done();
    });

    it("Should return 'error' when called with a string", function(done) {
        var sum = calc.add(1, "hej hej", 1);
        expect(sum).eql("error");
        done();
    });

    it("Should return 'error' when called with a boolean", function(done) {
        var sum = calc.add(3, 3, true);
        expect(sum).eql("error");
        done();
    });

    it("Should return 6.5 when called with decimal number (as dot) as strings", function(done) {
        var sum = calc.add("3.5", 3);
        expect(sum).eql(6.5);
        done();
    });

    it("Should return correct when called with decimal number (with a comma) as strings", function(done) {
        var sum = calc.add(2.5, "3,5");
        expect(sum).eql(6);
        done();
    });

    /*
     it("Should return 'error' when called with Infinity/-Infinity", function(done) {
     var sum = calc.add(Infinity, 3);
     expect(sum).eql('error');
     sum = calc.add(-Infinity, 3);
     expect(sum).eql('error');
     done();
     });*/

});
