"use strict";

// add the files
var Leauge = require("./leauge");
var Team = require("./team");

// create the Leauge-objekt
var t = new Leauge();

// add three teams
t.addTeam(new Team("Tottenham"));
t.addTeam(new Team("Arsenal"));
t.addTeam(new Team("Everton"));

// simulate the matches
t.playMatches();

// print the Table
console.log(t.getTableString(20));
