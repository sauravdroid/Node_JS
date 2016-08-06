var firstName = "Jane";

(function (lastName){
    firstName = "John";
    console.log(firstName + "  " +lastName);
}("Biswas"));
console.log(firstName);

var greet = function(){
    console.log("Greet");
}
module.exports = greet;