/**
 * @fileOverview Trying out some scrappy cars.
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

try {
    var CarA = require("./CarA");

    var carA = new CarA("Bettan");

    console.log(carA.start());
    console.log(carA.accelerate(30));
    console.log(carA.turnLeft());
    console.log(carA.turnRight());
    console.log(carA.accelerate(60));
    console.log(carA.turnRight());
    console.log(carA.accelerate(-10));
    console.log(carA.stop());
} catch (e) {
    console.log("\n========================================");
    console.log("ERROR: Failed to drive the scrappy CarA!");
    console.log("========================================\n");
}
