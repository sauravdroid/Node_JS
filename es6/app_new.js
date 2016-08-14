'use strict';
var util = require('util');
class Person1{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greetings(){
        console.log(`Greetings from Person1 and ${this.firstName} ${this.lastName}`);
    }
}
function Person(){
    this.firstName = 'Jane';
    this.lastName = 'Doe';
}
Person.prototype.greet=function(){
    console.log(this.firstName+' '+this.lastName);
}
function Policeman(){
    Person.call(this);
    this.badgeNo = '123456';
}
util.inherits(Policeman,Person);
var police = new Policeman();
var p1 = new Person1("Saurav","Biswas");
police.greet();
p1.greetings();


