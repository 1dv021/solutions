"use strict";

var ra = require("../../../src/part-1/reduce-array-part2/reduce-array");
var expect = require("chai").expect;

describe("Test the getTotal function", function() {

    it("Should return 9 when called with [{nr: 4}, {nr : 5}]", function(done) {
        var sum = ra.getTotal([{nr: 4}, {nr: 5}]);
        expect(sum).eql(9);
        done();
    });

    it("Should return 9 when called with [{nr: 3}, {nr : 3}, {nr: 3}]", function(done) {
        var sum = ra.getTotal([{nr: 3}, {nr : 3}, {nr: 3}]);
        expect(sum).eql(9);
        done();
    });


});
