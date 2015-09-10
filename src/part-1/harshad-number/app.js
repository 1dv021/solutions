/**
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

var Harshad = require("./harshad");

console.log(Harshad.isValid(10));  // true
console.log(Harshad.isValid(24));  // true
console.log(Harshad.isValid(198)); // true

console.log(Harshad.isValid(17));   // false
console.log(Harshad.isValid(349));  //false
console.log(Harshad.isValid(2197)); //false

console.log(Harshad.getNext(14)); // 18

console.log(Harshad.getSequence(3, 160)); // [ 162, 171, 180 ]
console.log(Harshad.getSequence(15)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24 ]
