// ARRAYs
//Array in jS is object we can keep multiple items in single variable
//JS arrays are resizable
//no associative arrays => to access value we find using indexing 
// in JS when we do array-copy-operation it creates shallow copies 
//Shallow copy => it is the copy of an object whose porpeties share the same reference points
//Deep copy => a deep copy of an object is a copy whose properties do not share the same reference

//ways for the formation of thr arrays
const myArray =[0,1,2,3,4,5]
const myHeroes = ["Superman", "spiderman", "Thor"]
const myArray2 = new Array(1,2,3,4,5) 

console.log(myArray[0]);

//Array's Methods
myArray.push(6)
console.log(myArray);

myArray.pop()
console.log(myArray);

//shift/unshift
myArray.unshift(0)
console.log(myArray);
myArray.unshift(9) //this get inserted at the start, Problem=>each values has beenn shifted give load to the system
console.log(myArray);
myArray.shift()//removes the first element
console.log(myArray);

//includes()
console.log(myArray.includes(9));
console.log(myArray.includes(0));

//indexOf()
console.log(myArray.indexOf(9));
console.log(myArray.indexOf(3));

//join
const newArray = myArray.join()//this joins the new array with the older one 

console.log(myArray);
console.log(newArray);

//Slice/Splice
console.log("A ",myArray );//Original Array

const myn1=myArray.slice(1,3)//used Slice
console.log(myn1);
console.log("B ",myArray );

const myn2 = myArray.splice(1,3)//used Splice
console.log(myn2);
console.log("C ", myArray); // this removes the spliced elements from the array

const marvel_heroes=["Thor","Ironman","Spiderman"]
const dc_heroes=["Superman", "Flash","Batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

const newHeroes = marvel_heroes.concat(dc_heroes)
console.log(newHeroes);

//spread operator
const allheroes=[...marvel_heroes,...dc_heroes]
console.log(allheroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realusablearray = anotherArray.flat(Infinity)
console.log(anotherArray);
console.log(realusablearray);

//data scraping
console.log(Array.isArray("Abhirup"))
console.log(Array.from("Abhirup"));//this makes thr array
console.log(Array.from({name:"Abhirup"}));// here you have to tell that make from keys or values

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));




















