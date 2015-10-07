// run tests with 'npm test'

var part1 = require("./lego-part1");
var part2 = require("./lego-part2");
var part3 = require("./lego-part3");


// Testing part 2
var lego2 = new part2.Lego();
lego2.render();
console.log(); // For spacing purposes only

var lego3 = new part2.Lego(1, 3, 2, "blue");
lego3.render();
console.log(); // For spacing purposes only

// Testing part 3
//var lego4 = new part3.Lego();
//lego4.render();
//console.log(); // For spacing purposes only
//
//var lego5 = new part3.Lego(1, 3, 2, "blue");
//lego5.render();
//console.log(); // For spacing purposes only

