function Greetr(){
    this.greeting = "Hello World from Greet 4";
    this.greet = function(){
        console.log(this.greeting);
    };
}

module.exports = Greetr;