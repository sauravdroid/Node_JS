function greet(callback){
    console.log("Hello");
    var data = {
        name : 'Saurav Biswas'
    }
    callback(data);
}

function callback(){
    console.log(`Callback is being called ${data.name}`);
}

greet(function callback(data){
    console.log(`Callback is being called ${data.name}`);
});