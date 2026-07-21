const user = {
    username: "Abhirup",
    price: 999,

    welcomeMessage : function(){
        //this keyword makes the refrence to the current context
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="Kovid"
// user.welcomeMessage()

// console.log(this); //{}

//what do we get when we just call this inside the function
// function code(){
//     console.log(this);
// }
// code()

//this is use only in Objects


// const arrow= function(){
//     let username ="Abhirup Kovid"
//     console.log(this.username);//undefined
// }


//Arrow functions do not have their own this. They inherit this from the surrounding scope (lexical binding).
// const arrow = () => {
//     let username ="Abhirup Kovid"
//     console.log(this);    
//     console.log(this.username);//undefined
// }
// arrow()


//implicit return 
// const addtwoNum = (num1,num2) => ( num1+num2 )
// console.log(addtwoNum(3,4));
// const addtwoNum = () => ({username : "abhi"}) // for an object it shows undefined then wrap it in these ()
// console.log(addtwoNum());
//if wrapped in curly braces then has to be write te return function 

