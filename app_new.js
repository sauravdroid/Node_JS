var greet = require('./greet');
var greet1 = require('./greet1');
var greet2 = require('./greet2').greet;
var greet3 = require('./greet3');
greet.english();
greet.spanish();
greet1();
greet2();
greet3.greet();
greet3.greeting = "Changed hello world from greet 3";
var greet3n = require('./greet3');
greet3n.greet();