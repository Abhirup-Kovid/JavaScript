//Types of DataTypes
// Primitive and Non Primitive
//Primitive --> String, Number, Boolean, Symbol, Bigint, null, undefined
//Non Primitive(Reference) --> Arrays, Objects, Functions

const score = 100
const scoreVal = 100.3
const  isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
console.log(id === anotherId);
const bigNumber = 34756942798732874009428n

//Arrays
const heros = ["Superman", "Spiderman", "Thor"]
// Objects
let myObj = {
    name: "Abhi",
    age: 21
}
//Funtions
const myFunction = function(){
    console.log("Hi Abhi");
}

console.log(myFunction);// Object Function


// Stack
//in all primitive data types the stack memory is used 
//Heap
//in all non primitive that are the reference dataTypes the Heap memory is used 

//
let myYtName = "AbhirupKovid"
let anotherName = myYtName
anotherName = "Abhirup"

//
let user1= {
    email :"abhirup@gmail.com",
    upi : "Abhi@ybl"
}
let user2=user1
user2.email = "kovid@gmail.com"

console.log(user1.email);
console.log(user2.email);

//why same?
//they both are refrenced to the same memory in heap 



