'use strict';
var EventEmitter = require('events');
module.exports = class Greetr1 extends EventEmitter{
    constructor(){
        super();
        this.greeting = "Hello Baby";
    }
    greet(data){
        console.log(this.greeting + ' : ' + data);
         this.emit('greet',data);
    }
} 
