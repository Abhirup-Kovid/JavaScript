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
