var bugsy = require("../../../src/part-1/bugsy/bugsy");
var helper = require("../../../src/part-1/bugsy/helper");
var expect = require("chai").expect;



describe("Test the function findGangster", function() {
    "use strict";

    beforeEach(function() {
        helper.clear();
    });

    it("getGangster(\"AC\"); should return \"Al Capone\"", function(done) {
        expect(bugsy.getGangster("AC")).to.eql("Al Capone");
        done();
    });

    it("getGangster(\"SSC\"); should return \"Stephanie St. Clare\"", function(done) {
        expect(bugsy.getGangster("SSC")).to.eql("Stephanie St. Clare");
        done();
    });

    it("getGangster(\"FN\"); should return \"Frank Nitti\"", function(done) {
        expect(bugsy.getGangster("FN")).to.eql("Frank Nitti");
        done();
    });

    it("getGangster(\"ÖÖ\"); should return \"No suspect found!\"", function(done) {
        expect(bugsy.getGangster("ÖÖ")).to.eql("No suspect found!");
        done();
    });

});
