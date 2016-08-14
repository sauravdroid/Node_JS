var Emitter = require('events');
var eventConfig = require('./config').events;
var emtr = new Emitter();
emtr.on(eventConfig.GREET,function(){
    console.log("Someone said hello");
});
emtr.on(eventConfig.GREET,function(){
    console.log("Hello Baby");
});
emtr.emit(eventConfig.GREET);

var person = {
    firstName: '',
    lastName: '',
    greet: function(){
        return this.firstName + ' ' + this.lastName;
    }
};

var john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Rhoden';
console.log(john.greet());

var jane = Object.create(person);
john.firstName = 'Jane';
john.lastName = 'Doe';
console.log(john.greet());
console.log(jane.greet());