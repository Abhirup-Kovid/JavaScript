const userEmail = "A@Abhi.ai"
//When we assume that the string passed in the condition is a true value then it is called as the truthy value
//Empy string => false
//array => true
//RULE => Truthy and Falsy value
/**
 * Falsy Values ==> false, 0, -0, BigInt 0n, "", null, undefined, NaN
 * Truthy Values ==>  except falsy values, "0", "false", " ", [], {}, function(){}
 */
//how to check array 
// useremail.length===0
//array is empty

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Email not idetified");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log(("Object is empty"));
    
}

//false == 0 ->true
//false == "" ->true
// 0=="" ->true

// Nullish Coalescing Operator (??): null undefined
//It checks if the left-hand side is null or undefined.
//If yes → it returns the right-hand side (default).
// //If no → it returns the left-hand side.
// 🎯 Why it is used
// Provide safe defaults

// Prevents errors when values are missing (like API responses or user input).

// Example: If a config setting isn’t defined, you can fall back to a default.

// Avoid overwriting valid falsy values

// Unlike ||, it doesn’t replace 0, "", or false with defaults.

// This is important when those values are meaningful.

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

//Ternary Operator
//condition ? true : false;

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
 
