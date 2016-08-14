var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt','utf8'); //Synchronous readFileSync
var readFileAsync = fs.readFile(__dirname + '/greet.txt','utf-8',function(err,data){
     console.log(data);
});

console.log(greet);
