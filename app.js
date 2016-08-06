var person = {
    firstName : "Saurav",
    lastName : "Biswas",
    printName: function(){
        console.log(this.firstName+"  "+this.lastName);
    }
}
person.printName();
console.log(person['firstName']);

function Person(){
    this.firstName = "Umaima";
    this.lastName = "Rahman";
    this.printName = function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
Person.prototype.loveYou = function(){
    console.log("I Love You So Much");
}
var p = new Person();
p.firstName = "Saurav";
p.printName();
p.loveYou();
console.log(p.__proto__);