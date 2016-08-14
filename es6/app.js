var name = 'John Doe';
var greet = 'Hello '+name;
var greet2 = `Hello ${name}`;
console.log(greet2);

var app = {
    name: 'Jane Doe',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
};
app.greet();
app.greet.call({ name:'Buku Doe' }); //Can change properties even though it is not in the function parameter.
app.greet.apply ({ name:'Buku Doe' });