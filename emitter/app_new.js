'use strict';
var EventEmitter = require('events');
var util = require('util');
var Greetr1 = require('./greetr');
function Greetr(){
    EventEmitter.call(this);
    this.greeting = "Hello World,Welcome to this new world";
}
util.inherits(Greetr,EventEmitter); //Any class inheriting from Greetr will also have 
                                    //access to the properties of the EventEmitter

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ' : ' + data);
    this.emit('greet',data);
};

var greetr1 = new Greetr();
greetr1.on('greet',function(data){
    console.log(this.greeting);
});

greetr1.greet('Buku Biswas');
var greetr2 = new Greetr1();
greetr2.on('greet',function(data){
    console.log("Greetr 2 called");
});
greetr2.greet('Yoolo');