"use strict";

var ca = require("../../../src/part-1/copy-array/copy-array");
var expect = require("chai").expect;

describe("Test error handling", function() {

    it("Should throw a TypeError if no parameter is provided", function(done) {
        expect(function(){ca.addToCopy();}).to.throw(TypeError);
        done();
    });

    it("Should throw a TypeError if second parameter is not provided", function(done) {
        expect(function(){ca.addToCopy([1]);}).to.throw(TypeError);
        done();
    });

    it("Should throw a TypeError if other data type then Array is provided", function(done) {
        expect(function(){ca.addToCopy("this is wrong", 1);}).to.throw(TypeError);
        done();
    });

    it("Should throw a TypeError when second parameter isn't a number", function(done) {
        expect(function(){ca.addToCopy([], "this is wrong");}).to.throw(TypeError);
        done();
    });

    it("Should throw a Error when empty Array is provided", function(done) {
        expect(function(){ca.addToCopy([], 1);}).to.throw(Error);
        done();
    });
});

describe("Test that the reference is untouched", function() {

    it("Should NOT return the same Array as provided as parameter - " +
        "Don't forget to make a copy of the array parameter", function(done) {
        var arr = [1, 2, 3];

        var res = ca.addToCopy(arr, 4);
        expect(arr).to.not.eql(res);
        done();
    });
});

describe("Test that the new array having the provided number", function() {

    it("Should return a new copy with the number at the end", function(done) {
        var arr = [1, 2, 3];

        var res = ca.addToCopy(arr, 4);
        expect(res).to.eql([1, 2, 3, 4]);
        done();
    });

    it("Small array - Should return a new copy with the number at the end", function(done) {
        var arr = [1];

        var res = ca.addToCopy(arr, 4);
        expect(res).to.eql([1, 4]);
        done();
    });



});
