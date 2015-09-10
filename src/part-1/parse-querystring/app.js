// Get the module "parse-querystring". using ./ to indicate that it is placed in this subdirectory
// run app with 'npm start'
// run tests with 'npm test'

var simpleURL = require("./parse-querystring");
var result = simpleURL.parse("http://lnu.se?key1=value1&key2=value2");

// Test the sum-function here
//var result2 = simpleURL.parse("http://lnu.se?");
//var result3 = simpleURL.parse("http://lnu.se?key");
//var result4 = simpleURL.parse("http://lnu.se?key=");
//console.log(result2);
//console.log(result3);
//console.log(result4);

// Print the result to the terminal (console)
console.log(result);
