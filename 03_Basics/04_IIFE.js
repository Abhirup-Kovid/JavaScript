// Immediately Invoked Function Expressions (IIFE)

// function code(){
//     console.log(`DB CONNECTED`);
// }
// code() // Immediately Invoked

//Many a time theres a problem with the Global scope's pollution so the globals scopes variable get remove we use IIFE
(function code(){ //this is a named IIFE
    console.log(`DB CONNECTED`);
})(); //right syntax //this works

( (name) => {
    console.log(`DB CONNECTED ${name}`);
    
})('Abhi') //why isnt this working even if ypu try to convert this to the normal function it wont work WHY?
//this is because this IIFE has got invoked but it doesnt know where to stop the Context so just use the semicolon