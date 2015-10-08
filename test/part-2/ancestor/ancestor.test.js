/**
 * @author thajo
 * @version 1.0.0
 */

"use strict";

var expect = require("chai").expect;
var Ancestor = require("../../../src/part-2/ancestors/ancestors");

describe("Ancestor", function() {

    describe("Prototype", function() {
        describe("toString method", function() {

            var a;

            it("should be defined as an own property", function() {
                expect(Ancestor.prototype.hasOwnProperty("toString")).to.equal(true);
            });

            it("should return empty string if called with empty object", function() {
                a = new Ancestor({});
                expect(a.toString()).eql("");
            });

            it("should return correct string - check parameter in debugger", function(done) {
                var obj = {
                    name: "A1",
                    children: []
                };

                a = new Ancestor(obj);
                expect(a.toString()).eql("A1");
                done();
            });

            it("should return correct string - check parameter in debugger", function(done) {
                var obj = {
                    name: "A1",
                    children: [
                        {
                            name: "A11",
                            children: []
                        },
                        {
                            name: "A12",
                            children: []
                        }
                    ]
                };
                a = new Ancestor(obj);
                expect(a.toString()).eql("A1\n\tA11\n\tA12");
                done();
            });

            it("should return correct string - check parameter in debugger", function(done) {
                var obj = {
                    name: "A1",
                    children: [
                        {
                            name: "A11",
                            children: [
                                {
                                    name: "A111",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "A21",
                            children: [
                                {
                                    name: "A211",
                                    children: [
                                        {
                                            name: "A2111",
                                            children: []
                                        },
                                        {
                                            name: "A2112",
                                            children: [
                                                {
                                                    name: "A21121",
                                                    children: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                };
                a = new Ancestor(obj);
                expect(a.toString()).eql("A1\n\tA11\n\t\tA111\n\tA21\n\t\tA211\n\t\t\tA2111\n\t\t\tA2112\n\t\t\t\tA21121");
                done();
            });
        });
    });
});
