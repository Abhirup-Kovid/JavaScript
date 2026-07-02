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



