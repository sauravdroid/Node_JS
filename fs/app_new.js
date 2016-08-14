var fs = require('fs');
var zlib = require('zlib');
var readable = fs.createReadStream(__dirname + '/greet.txt',{encoding : 'utf8',highwaterMark : 32 * 1024}); //Size of the
//buffer
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
/*readable.on('data',function(chunk){
    console.log(chunk.length);
    writable.write(chunk);
});*/
readable.pipe(writable); // returns the destination
