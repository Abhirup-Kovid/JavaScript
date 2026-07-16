// NUMBERS
const score = 400;
console.log(score);//automatically becomes a number

const balance = new Number(100)// specifically has been defined or say has been casted to NUMBER
console.log(balance);

console.log(balance.toString());//converting to string we get more methods to use 
console.log(typeof balance);
console.log(balance.toFixed(2));//give the precision value upto 2

const otherNumber = 20.8966;
console.log(otherNumber.toPrecision(2));//gives the roundoff value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// for a huge number we can use locallString as it gives the easy way to look at it
//can be changed from US system to indian system by using 'en-IN'.

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// ***************************-----MATHS-----***************************
//Maths Library

console.log(Math);
//Object [Math] {} - what does this says?
//this is an object maths with many properties inside it {}

 console.log(Math.abs(-4.33));//absolute value
 console.log(Math.round(4.33));//round off value
 console.log(Math.ceil(4.3));
 console.log(Math.floor(4.3));
 console.log(Math.sqrt(4));
 console.log(Math.pow(2,2));
 console.log(Math.min(4,5,2,5,78,3,3));
 console.log(Math.max(4,5,3,7,9,2,8,1,0));

 console.log(Math.random());//gives the random value between 0 and 1
 console.log((Math.random()*10)+1);//value shifts from 0 to 10
 console.log(Math.floor((Math.random()*10)+1));
 
 
 const min = 10 
 const max = 20 

 //instead of multiply Math.random() via 10 we multipy it by this formula(max-min+1) which give the values in range we want also avoiding the zero case then add min that says we want minimum of this much
 console.log(Math.floor(Math.random() * (max - min + 1)) + min)
 
 
 
 
 
 
 
 





