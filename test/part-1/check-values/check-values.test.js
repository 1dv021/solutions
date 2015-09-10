var vc = require("../../../src/part-1/check-values/check-values");
var expect = require("chai").expect;

describe("Test the module", function() {
    "use strict";

    it("Should return a string 'You send me a number' " +
        "when check is called with a number", function(done) {
        var result = vc.check(12);
        expect(result).eql("You send me a number");
        done();
    });

    it("Should return a string 'You send me a boolean' " +
        "when check is called with a boolean", function(done) {
        var result = vc.check(true);
        expect(result).eql("You send me a boolean");
        done();
    });

    it("Should return a string 'You send me a string' " +
        "when check is called with a string", function(done) {
        var result = vc.check("this is a string");
        expect(result).eql("You send me a string");
        done();
    });

    it("Should return a string 'You send me an undefined value' " +
        "when check is called with no parameter", function(done) {
        var result = vc.check();
        expect(result).eql("You send me an undefined value");
        done();
    });

    it("Should return a string 'You send me a function' " +
        "when check is called with a function", function(done) {
        var result = vc.check(function() {});
        expect(result).eql("You send me a function");
        done();
    });

    it("Should return a string 'You send me null' " +
        "when check is called with null", function(done) {
        var result = vc.check(null);
        expect(result).eql("You send me null");
        done();
    });

    it("Should return a string 'You send me an array' " +
        "when check is called with an array", function(done) {
        var result = vc.check([]);
        expect(result).eql("You send me an array");
        done();
    });

    it("Should return a string 'You send me an object' " +
        "when check is called with an object", function(done) {
        var result = vc.check({});
        expect(result).eql("You send me an object");
        done();
    });

});
