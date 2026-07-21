// IF STATEMENTS
// if(condition){
// }
//if the condition is false then the code block is not executed
// const isUserLoggedIn=true
// if(isUserLoggedIn){

// }
// //comparision operator <, >, ==, <=, >=, !=, ===(Checks the data type), !==(Checks the negative sign)
// const temperature=41
// if(temperature == 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// const score = 200
// if(score>100){
//     const power1 = "You can Fly"
//     var   power2 = "You are invisible"
//     console.log(`User first Power: ${power1}`);
// }
// console.log(`user second powers ${power2} `); //not good due to scope memory leak

// //shorthand notation
 const balance =1000
//  if(balance>500) console.log("test"), //implicit scope
//  console.log("test2");
 
//nesting
// if(balance < 200){
//     console.log("less than 500");
// }else if (balance<750){
//     console.log("less than 750");
// }
// else if (balance<900){
//     console.log("less than 900");
// }
// else if (balance<1200){
//     console.log("less than 1200");
// }
 
const isUserLoggedIn = true
const debitCard = true
const loggesInFromGoogle= false
const loggedInFromEmail=true

if(isUserLoggedIn && debitCard){
    console.log("Allowed to buy courses");
}
if(loggesInFromGoogle || loggedInFromEmail ){
    console.log("User Logged in");
}