/**
 * Module for the type Ellipse.
 *
 * @author TODO: Write your name here!
 * @version 1.0.0
 */

"use strict";

function Ellipse(a, b) {
    this.a = a;
    this.b = b;

}

Ellipse.prototype.area = function(){
    return Math.PI * this.a * this.b;

};

Ellipse.prototype.circumference = function(){
    return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b);

};

Ellipse.prototype.toString = function(){
    return "{ a: " + this.a + ", b: " + this.b + ", area: " + this.area().toFixed(1) + ", circumference: " + this.circumference().toFixed(1) + " }";

};



// Exports
module.exports = Ellipse;
