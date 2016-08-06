var greet = require('./app2')
function returnHello(){
    console.log("Say Hello");
}

function sayHello(fn){
    fn();
}
sayHello(returnHello);
greet();