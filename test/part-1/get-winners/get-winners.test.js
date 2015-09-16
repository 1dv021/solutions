"use strict";

var w = require("../../../src/part-1/get-winners/winners");
var expect = require("chai").expect;


describe("Test the getFrequencyInArray function", function() {

    it("getFrequencyInArray - Should return correct object", function(done) {
        var obj =
            {
                mats: 1,
                john: 3,
                johan: 2,
                jacob: 2
            };
        var result = w.getFrequencyInArray(["Mats", "john", "John", "john", "johan", "jacob", "Jacob", "Johan"])
        expect(result).eql(obj);
        done();
    });


    it("getFrequencyInArray - Should return correct object", function(done) {
        var obj =
            {
                mats: 1,
                john: 3,
                johan: 3,
                jacob: 2
            };
        var result = w.getFrequencyInArray(["Mats", "john", "johan", "John", "john", "johan", "jacob", "Jacob", "Johan"])
        expect(result).eql(obj);
        done();
    });
});
//

describe("Test the getHighestValuesInFrequency function", function() {
    it("getHighestValuesInFrequency - Should return correct array", function(done) {

        var obj = {
                mats: 1,
                john: 3,
                johan: 2,
                jacob: 2
            };

        var res = ['john'];
        var result = w.getHighestValuesInFrequency(obj);
        expect(result).eql(res);
        done();
    });

    it("getHighestValuesInFrequency - Should return correct array when two or more have same value", function(done) {
        var obj = {
            mats:  1,
            john: 3,
            johan: 3,
            jacob: 2
        };

        var res = ['john', 'johan'];
        var result = w.getHighestValuesInFrequency(obj);
        expect(result).eql(res);
        done();
    });
});

describe("Test the sortStringsAscending function", function() {



    it("sortStringsAscending - Should return correct array", function(done) {
        var arr = ['john', 'mats', 'johan', 'jacob'];
        var result = w.sortStringsAscending(arr);
        expect(result).eql(['jacob', 'johan', 'john', 'mats']);
        done();
    });

});


describe("Test the getWinner function", function() {

    it("getWinner - Should return ['john'] when called with " +
        "['Mats', 'john', 'John', 'johan', 'jacob', 'john', 'jacob']", function(done) {
        var result = w.getWinners(['Mats', 'john', 'John', 'johan', 'jacob', 'john', 'jacob'])
        expect(result).eql(['john']);
        done();
    });


    it("getWinner - return ['jacob', 'johan', 'john'] when called with " +
        "['Mats', 'Johan', 'John', 'johan', 'jacob', 'john', 'jacob']", function(done) {
        var result = w.getWinners(['Mats', 'Johan', 'John', 'johan', 'jacob', 'john', 'jacob'])
        expect(result).eql(['jacob', 'johan', 'john']);
        done();
    });


});
