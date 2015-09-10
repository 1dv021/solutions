var simpleLogger = require("../../../src/part-1/logger/logger");
var expect = require("chai").expect;
var assert = require("chai").assert;

describe("Test the application", function() {
    "use strict";

    it("Should return an empty array when clear is called", function(done) {
        simpleLogger.clear();
        var result = simpleLogger.read();
        assert(Array.isArray(result), "Did not return an Array!");
        expect(result).eql([]);
        done();
    });

    it("Should return a correct log message (info)", function(done) {
        simpleLogger.clear();
        simpleLogger.write("Testmessage", 0);

        var result = simpleLogger.read();
        assert(Array.isArray(result), "Did not return an Array!");
        expect(result.length).eql(1);
        expect(result[0]).eql({'info': 'Testmessage'});
        done();
    });

    it("Should return a correct log message (warning)", function(done) {
        simpleLogger.clear();
        simpleLogger.write("Testmessage", 1);

        var result = simpleLogger.read();
        assert(Array.isArray(result), "Did not return an Array!");
        expect(result.length).eql(1);
        expect(result[0]).eql({'warning': 'Testmessage'});
        done();
    });

    it("Should return all correct log message when read is called without parameter", function(done) {
        simpleLogger.clear();

        simpleLogger.write("Testmessage", 0);
        simpleLogger.write("Testmessage", 1);
        simpleLogger.write("Testmessage", 3);

        var result = simpleLogger.read();
        assert(Array.isArray(result), "Did not return an Array!");
        expect(result.length).eql(3);
        var arr = [
            {"info": "Testmessage"},
            {"warning": "Testmessage"},
            {"fatal error": "Testmessage"}
        ];
        expect(result).eql(arr);
        done();
    });

    it("Should save as 'info'-message if no type is provided as argument to write", function(done) {
        simpleLogger.clear();

        simpleLogger.write("Testmessage");

        var result = simpleLogger.read();
        assert(Array.isArray(result), "Did not return an Array!");
        expect(result.length).eql(1);
        var arr = [
            {info: "Testmessage"}
        ];
        expect(result).eql(arr);
        done();
    });

    it("Should only get 'info'-messages if that type is provided to the read-function", function(done) {
        simpleLogger.clear();

        simpleLogger.write("Info 1", 0);
        simpleLogger.write("Info 2", 0);
        simpleLogger.write("Warning 1", 1);
        simpleLogger.write("Info 3", 0);
        simpleLogger.write("Warning 2", 1);


        var result = simpleLogger.read(0);
        assert(Array.isArray(result), "Did not return an Array!");
        expect(result.length).eql(3);
        var arr = [
            {info: "Info 1"},
            {info: "Info 2"},
            {info: "Info 3"}
        ];
        expect(result).eql(arr);
        done();
    });

    it("Should only get 'warning'-messages if that type is provided to the read-function", function(done) {
        simpleLogger.clear();

        simpleLogger.write("Info 1", 0);
        simpleLogger.write("Info 2", 0);
        simpleLogger.write("Warning 1", 1);
        simpleLogger.write("Info 3", 0);
        simpleLogger.write("Warning 2", 1);

        var result = simpleLogger.read(1);
        assert(Array.isArray(result), "Did not return an Array!");
        expect(result.length).eql(2);
        var arr = [
            {warning: "Warning 1"},
            {warning: "Warning 2"}
        ];
        expect(result).eql(arr);
        done();
    });

    it("Should set 'info' to a write call whit unsupported number", function(done) {
        simpleLogger.clear();
        simpleLogger.write("Info 1", 32);
        simpleLogger.write("Info 2", -4);
        simpleLogger.write("Info 3", "blaj");
        var result = simpleLogger.read();
        assert(Array.isArray(result), "Did not return an Array!");
        expect(result.length).eql(3);
        var arr = [
            {info: "Info 1"},
            {info: "Info 2"},
            {info: "Info 3"}
        ];
        expect(result).eql(arr);
        done();
    });
});
