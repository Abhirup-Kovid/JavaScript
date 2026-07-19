// console.log("A");
// console.log("B");
// console.log("H");
// console.log("I");

function sayMyName(){
console.log("A");
console.log("B");
console.log("H");
console.log("I");
}
sayMyName() //reference ()=>excecute


function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}
addTwoNumbers(3,4)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

const result = addTwoNumbers(3,5) // we get here 8 which has been stored in result
console.log(result); // then on printing result why do we get undefined?
//this why it means to use return as our functin isnt returning anything now


function addTwoNumbers(num1, num2){
    let result=num1+num2
    return result
}

function loginUserMessage(userName="Abhirup Kovid"){
    // userName === undefined
    if(!userName){ //!userName here means undefined
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Abhirup"))
console.log(loginUserMessage()) //undefined

function calculateCartPrice(val1,val2, ...num1){ // ... => these are the rest and spread operator they are the rest operator here , acoording to there usecase there names change 
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"abhi",
    price:"999"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)
handleObject({
    username:"Sam",
    price:990
})

const myarray = [200,400,5000]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myarray));
console.log(returnSecondValue([200,400,5000]));

