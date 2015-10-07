/**
 * Module for the type CarA.
 *
 * @author TODO: Write your name here!
 * @version 1.0.0
 */

"use strict";

/**
 * Creates a new instance of CarA.
 * @param {String} petName The pet name of the car.
 * @constructor
 */
function CarA(petName) {
    this.petName = petName || "Skrotbilen";
    this.speed = 0;
}

/**
 * Changes the speed of the car.
 * @param {Number} deltaSpeed The change of the speed of the car.
 * @returns {String}
 */
CarA.prototype.accelerate = function(deltaSpeed){

    var str = "";
    var oldSpeed = this.speed;

    if(typeof deltaSpeed !== "number" || deltaSpeed === 0){
        return this.petName + "s hastighet är oförändrad!";
    }

    this.speed = this.speed + deltaSpeed;

    str += this.petName + "s hastighet ";

    str += (deltaSpeed < 0) ? "minskar" : "ökar";

    str +=  " från " + oldSpeed + " km/h till " + this.speed + " km/h.";

    return str;

};

/**
 * Changes the cars' direction by turning it to the left.
 * @returns {String}
 */
CarA.prototype.turnLeft = function() {
    return this.petName + " svänger vänster.";
};

/**
 * Changes the cars' direction by turning it to the right.
 * @returns {String}
 */
CarA.prototype.turnRight = function() {
    return this.petName + " svänger höger.";
};

/**
 * Starts the car.
 * @returns {String}
 */
CarA.prototype.start = function() {
    return this.petName + " startar.";
};

/**
 * Stops the car.
 * @returns {String}
 */
CarA.prototype.stop = function() {
    this.speed = 0;
    return this.petName + " stannar.";
};

// Exports
module.exports = CarA;
