/**
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

var Harshad = require("./../../../src/part-1/harshad-number/harshad");
var expect = require("chai").expect;

describe("Harshad.isValid", function() {
    "use strict";

    it("Harshad.isValid(10); should return true", function(done) {
        expect(Harshad.isValid(10)).to.be.true;
        done();
    });

    it("Harshad.isValid(24); should return true", function(done) {
        expect(Harshad.isValid(24)).to.be.true;
        done();
    });

    it("Harshad.isValid(198); should return true", function(done) {
        expect(Harshad.isValid(198)).to.be.true;
        done();
    });

    it("Harshad.isValid(17); should return false", function(done) {
        expect(Harshad.isValid(17)).to.be.false;
        done();
    });

    it("Harshad.isValid(349); should return false", function(done) {
        expect(Harshad.isValid(349)).to.be.false;
        done();
    });

    it("Harshad.isValid(1197); should return false", function(done) {
        expect(Harshad.isValid(1197)).to.be.false;
        done();
    });
});

describe("Harshad.getNext", function() {
    "use strict";

    it("Harshad.getNext(14); should return 18", function(done) {
        expect(Harshad.getNext(14)).to.equal(18);
        done();
    });

    it("Harshad.getNext(65); should return 70", function(done) {
        expect(Harshad.getNext(65)).to.equal(70);
        done();
    });
});

describe("Harshad.getSequence", function() {
    "use strict";

    it("Harshad.getSequnce(4, 1200); should return [1204, 1206, 1212, 1215]", function(done) {
        expect(Harshad.getSequence(4, 1200)).to.eql([1204, 1206, 1212, 1215]);
        done();
    });

    it("Harshad.getSequnce(3); should return [1, 2, 3]", function(done) {
        expect(Harshad.getSequence(3)).to.eql([1, 2, 3]);
        done();
    });
});
