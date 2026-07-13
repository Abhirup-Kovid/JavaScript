const name= "Abhirup"
const repoCount = 50
//String Contatenation
console.log(name+repoCount+"Value");

//Instead use backticks
//this comes under Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//String object
const gameName = new String('Abhirup')
console.log(gameName)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());//remeber the original string is not changed
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('p'));

const myName="Abhirup-Kovid"
const newName=myName.substring(0,4)//4 is exclueded index

console.log(newName);
console.log(myName.slice(-7,4));//counts in reversing order

//in substring if we use the negative value to reverse it will disobey and will start count from the 0th index
//the negative index for the reversing is only used in the slicing method

const ActiveName="    WizzyRaven    a"
console.log(ActiveName);
console.log(ActiveName.trim());


//the webpage does not understand the spaces to it convers the spce to %20 for https://abhirup.com/abhirup  kovid
const url = "https://abhirup.com/abhirup%20kovid"
const newurl=url.replace('%20', '-')
console.log(newurl);
console.log(url.includes('abhi'))
console.log(myName.split('-'));






