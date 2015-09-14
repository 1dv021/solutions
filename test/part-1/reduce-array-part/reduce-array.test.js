"use strict";

var ra = require("../../../src/part-1/reduce-array/reduce-array");
var expect = require("chai").expect;

describe("Test the getTotal function", function() {

    it("Should return 20 when called with [4, 5, 6, 5]", function(done) {
        var sum = ra.getTotal([4, 5, 6, 5]);
        expect(sum).eql(20);
        done();
    });

    it("Should return 20 when called with [4, 5, -6, 5, 12]", function(done) {
        var sum = ra.getTotal([4, 5, -6, 5, 12]);
        expect(sum).eql(20);
        done();
    });

    it("Should return 1 when called with [1]", function(done) {
        var sum = ra.getTotal([1]);
        expect(sum).eql(1);
        done();
    });

    it("Should return 0 when called with []", function(done) {
        var sum = ra.getTotal([]);
        expect(sum).eql(0);
        done();
    });
});
