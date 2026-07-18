//OBJECTS
//they can be declared in two ways AS literal or as a constructor
//singleton - when made with constructor only one is made
//objects literals

Object.create //constructor method to create an object => makes singleton

//object literal  {} - objects

const mySymbol =Symbol("key1")

const JSUser = {
    name: "Abhirup", //tracked as "name" : "Abhirup" as string
    "FUll name" : "Abhirup Kovid", //this value can never be access by using the dot operator
    mySymbol :"mykey1", //not the right way to use
    [mySymbol] : Symbol("mykeys1"),
    age : 21,
    location : ReadableStreamBYOBRequest,
    email : "google.com",
    isLoggedin : false,
    lastloginDays : ["Monday","Saturday"]
} 

console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser["FUll name"]);
console.log(typeof JSUser.mySymbol); //as we it shows they is of string type instead of object
console.log(typeof JSUser[mySymbol]);

JSUser.email="abhirupKovid@gamil.com"; //changing the values
//Object.freeze(JSUser) //now we cannot change anything in the Object
console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JSUSER");
    
}
JSUser.greetingtwo = function(){
    console.log(`Hello JSUSER, ${this.name}`);
    
}
// console.log(JSUser.greeting);
console.log(JSUser.greeting());
console.log(JSUser.greetingtwo());




