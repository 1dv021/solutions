"use strict";

var Ancestors = require("./ancestors");



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

var a = new Ancestors(obj);
console.log(a.toString());
