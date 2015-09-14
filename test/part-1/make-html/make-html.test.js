/**
 * @author thajo
 * @version 1.0.0
 */

"use strict";

var mh = require("../../../src/part-1/make-html/make-html");
var expect = require("chai").expect;

describe("Tests for makeStartTag", function() {



    it("makeHtml.startElement(\"h1\") should return \"<h1>\"", function(done) {
        expect(mh.makeStartTag("h1")).to.eql("<h1>");
        done();
    });

    it("makeHtml.startElement(\"p\") should return \"<p>\"", function(done) {
        expect(mh.makeStartTag("p")).to.eql("<p>");
        done();
    });

    it("makeHtml.startElement(\"p\") should return \"<div>\"", function(done) {
        expect(mh.makeStartTag("div")).to.eql("<div>");
        done();
    });



});

describe("Tests for makeEndTag", function() {



    it("makeHtml.makeEndTag(\"h1\") should return \"</h1>\"", function(done) {
        expect(mh.makeEndTag("h1")).to.eql("</h1>");
        done();
    });

    it("makeHtml.makeEndTag(\"p\") should return \"</p>\"", function(done) {
        expect(mh.makeEndTag("p")).to.eql("</p>");
        done();
    });

    it("makeHtml.makeEndTag(\"p\") should return \"</div>\"", function(done) {
        expect(mh.makeEndTag("div")).to.eql("</div>");
        done();
    });
});

describe("Tests for makeElement", function() {



    it("makeHtml.makeElement(\"h1\", \"This is my headline\") " +
        "should return \"<h1>This is my headline</h1>\"", function(done) {
        expect(mh.makeElement("h1", "This is my headline")).to.eql("<h1>This is my headline</h1>");
        done();
    });

    it("makeHtml.makeElement(\"p\", \"This is a paragraph\") " +
        "should return \"<p>This is a paragraph</p>\"", function(done) {
        expect(mh.makeElement("p", "This is a paragraph")).to.eql("<p>This is a paragraph</p>");
        done();
    });


});

describe("Tests for makeSnippet", function() {

    var arr = [
        {"h1": "This is a headline"},
        {"p": "This is a paragraph"},
        {"h2": "This is a sub headline"},
        {"p": "This is a paragraph"}
    ];
    var correct = "<h1>This is a headline</h1><p>This is a paragraph</p>" +
        "<h2>This is a sub headline</h2><p>This is a paragraph</p>";

    it("makeHtml.makeSnippet() should return a correct string ", function(done) {
        expect(mh.makeSnippet(arr)).to.eql(correct);
        done();
    });
});
