var buf = new Buffer('HEllo','utf-8');
console.log(buf.toString());
console.log(buf.toJSON());
buf.write('wo');
console.log(buf.toString());

var buffer = new ArrayBuffer(8); //64 bits
var view = new Int32Array(buffer); //2 numbers
view[0] = 1;
view[1] = 15;
console.log(view);
