// let a = 10
// const b = 20
// var c= 30

// //SCOPE
// if(true) {
    
//     let a = 60
//     const b = 50
//     var d= 40
//     c=90
//     //any code here will be limited to these curly braces 
//     //But var is the varible which can be used at any scope
//     //alse if written dynamically it will be used outside the scope
// }

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


function one(){
    const username="Abhirup"

    function two(){
        const website="Youtube"
        console.log(username);
    }
    // console.log(website)
    two( )
}
// one()

if(true){
    const username ="Abhi"
    if(username === "Abhi"){
        const website = " Youtube"
        // console.log(username+website);
    }
    // console.log(website);
    
}
// console.log(username);


//+++++++++++++ Functions types and variable holdings ++++++++++++++++++++

console.log(addone(5));// can be wrttien for the function of this type
function addone(num){
    return num+1
}
// addone(5)
 
console.log(addtwo(5)); //cannot be written for the function of this exprression type 
const addtwo=function(num){
    return num+2
}
// addtwo(5)

