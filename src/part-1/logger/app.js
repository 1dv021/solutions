// run tests with 'npm test'

var simpleLogger = require("./simple-logger");
simpleLogger.write(0, "This is a info message");

var r = simpleLogger.read(0);

// Test the sum-function here

// Print the result to the terminal (console)
console.log(r);
