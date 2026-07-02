let score = "33abc"

console.log(typeof score);

//Class typeCasting {Class are with capital letters Number,String,Boolean}
let valueInNumber = Number(score)

//what if the score is 33abc //try it out
console.log(typeof valueInNumber);
//why does it gives number instead score is 33abc

//checkout
console.log(valueInNumber) //it gives  NaN

//what if the value of score is null
let score2=null
let valueInNumber2=Number(score2)
console.log(valueInNumber2);// it give as 0

//what if the score is undefined
let score3=undefined
let valueInNumber3=Number(score3)
console.log(valueInNumber3);// it gives a NaN

//what if the value of score is Boolean type
let score4=true
let valueInNumber4=Number(score4)
console.log(valueInNumber4);//it gives a 1 
//if the score4 value is false obviously it would have given 0

//what if there is string which cannot be converted to the number
let score5="Abhi"
let valueInNumber5=Number(score5)
console.log(valueInNumber5);// it gives a NaN

/*
things to remember if the value of string is NaN 
which means not a Number but the type of NaN is Number
*/

let isLoggedIn="Abhi"
let booleanisLoggedIn=Boolean(isLoggedIn)
console.log(booleanisLoggedIn)// it gives a true 

//what if the value is 1
let isLoggedIn1=1
let booleanisLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanisLoggedIn1)//it gives a true
//and obviously on being 0 it gives a false

//what if the value is a empty string
let isLoggedIn2=""
let booleanisLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanisLoggedIn2)// it gives a false

//what if the value is a string with only space
let isLoggedIn3=" "
let booleanisLoggedIn3=Boolean(isLoggedIn3)
console.log(booleanisLoggedIn3)// it gives a true 

//What happens when we change to strings
let someNumber=33
let stringNumber=String(someNumber)
console.log(someNumber);

let someNumber1=undefined
let stringNumber1=String(someNumber1)
console.log(someNumber1);


