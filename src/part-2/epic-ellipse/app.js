/**
 * @fileOverview Trying out some ellipses.
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

try {
    var Ellipse = require("./Ellipse");
    var ellipse = new Ellipse(13.8, 42.7);

    console.log(ellipse.toString()); // { a: 13.8, b: 42.7, area: 1851.2, circumference: 199.4 }

    ellipse.a = 63;
    ellipse.b = 18.4;
    console.log(ellipse.toString()); // { a: 63, b: 18.4, area: 3641.7, circumference: 291.6 }

    ellipse.a = 78.9;
    ellipse.b = 68.4;
    console.log(ellipse.toString()); // { a: 78.9, b: 68.4, area: 16954.4, circumference: 463.9 }
} catch (e) {
    console.log("\n========================================");
    console.log("ERROR: Failed to create an epic ellipse!");
    console.log("========================================\n");
}
