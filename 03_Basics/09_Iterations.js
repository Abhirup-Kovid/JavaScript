// FOR LOOP
const array = [1,2,3,4,5]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

//BREAK and Continue
for (let i = 0; i < array.length; i++) {
    if(array[i]==3){
        continue;
    }
    if(array[i]==4) break;
    console.log(array[i]);
}

// WHILE LOOP
// while (condition) {
    
// }

let count=0;
while (2==2){
    count++;
    if (count==100){
        console.log(`Executed ${count} times`);
        break
    }
    console.log("HIIIIII");
}

//DO WHILE LOOP
// do {
    
// } while (condition);
//for browser
// do {
//     console.log("Choose a number between 1 and 10");
//     let luckyNumber = parseInt(prompt("Enter your guess:"));
//     let computerNumber = Math.floor(Math.random() * 10) + 1;

//     console.log("Computer chose:", computerNumber);

//     if (luckyNumber === computerNumber) {
//         console.log("You guessed it right!");
//         break;
//     } else {
//         console.log("Wrong guess, try again!");
//     }
// } while (true);

//ARRAY Specific Loop
// for of LOOP
const arr =[1,2,3,4,5]

for (const num of arr) {
       console.log(num);
       
}
const greetings = "Hello world"
for (const greet of greetings) {
    console.log(greet);
    
}

// MAPS - unique values
const map =new Map()
map.set('IN','INDIA')
map.set('IN','INDIA')
map.set('USA', 'United States OF America')
map.set('FR', 'FRANCE')
console.log(map);

for (const [key, value] of map) {
    console.log(key, '-', value);
    
}

const myObj = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'

}

//objects are not iteratble
// for (const [key, value] of myObj) {
//     console.log(key, '-', value);
    
// }

//FORIN loop
const myobject  = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    Swift: 'Swift by apple'
}
for (const key in myobject) {   
    console.log(myobject[key]);
    
}

const programming = ["js", "rb", 'cpp', 'java' ]
for (const key in programming) {
    console.log(programming[key]);
} 


//FOR EACH LOOP
console.log("FOR EACH LOOP");
programming.forEach(element => {
    console.log(element );    
});

//ARROW FUNCTION
console.log("ARROW FUNCTION");
programming.forEach( (item) => {
    console.log(item); 
})

//Using a Function

console.log("Using Function");
function printMe(item){
    console.log(item);
}
programming.forEach(printMe)

//What it contains 
programming.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})

//Array of Objects
console.log("Array of Objects");

const myCoding = [
    {
        languageName: "Java",
        languageFileName: ".java"
    },
    {
        languageName: "python",
        languageFileName: ".py"
    },
    {
        languageName: "Javascript",
        languageFileName: ".js"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})
