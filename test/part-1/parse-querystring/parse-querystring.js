var qsParser = require("../../../src/part-1/parse-querystring/parse-querystring");
var expect = require("chai").expect;

describe("Test the function parse", function() {
    "use strict";

    it("parse('http://lnu.se?key1=value1&key2=value2'); should return { key1: \"value1\", key2: \"value2\" }", function(done) {
        var obj = { key1: "value1", key2: "value2" };
        expect(qsParser.parse("http://lnu.se?key1=value1&key2=value2")).to.eql(obj);
        done();
    });

    it("parse('http://lnu.se?key1=value1'); should return { key1: \"value1\"}", function(done) {
        var obj = { key1: "value1"};
        expect(qsParser.parse("http://lnu.se?key1=value1")).to.eql(obj);
        done();
    });

    it("parse('http://lnu.se'); should return {}", function(done) {
        var obj = {};
        expect(qsParser.parse("http://lnu.se")).to.eql(obj);
        done();
    });

    it("parse('http://lnu.se?key'); should return {key : ''}", function(done) {
        var obj = {key: ""};
        expect(qsParser.parse("http://lnu.se?key")).to.eql(obj);
        done();
    });

    it("parse('http://lnu.se?'); should return {}", function(done) {
        var obj = {};
        expect(qsParser.parse("http://lnu.se?")).to.eql(obj);
        done();
    });

    it("parse('http://lnu.se?key='); should return {}", function(done) {
        var obj = {key: ""};
        expect(qsParser.parse("http://lnu.se?key=")).to.eql(obj);
        done();
    });

    it("parse('http://lnu.se?key1=value1&key2='); " +
        "should return { key1: 'value1' }", function(done) {
        var obj = { key1: "value1", key2: "" };
        expect(qsParser.parse("http://lnu.se?key1=value1&key2=")).to.eql(obj);
        done();
    });
});
