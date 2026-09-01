// Promise object represents the eventual completion (or faliure) of an asynchronous operation and its resulting value

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, Cryptography
    setTimeout(function(){
        console.log("Async Task is Complete");
        resolve()
    },1000)
})

//.then has direct connection with resolve
promiseOne.then(function(){
    console.log("Promise consumed");
    
})  

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Abhi", email: "abhirupkovid@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh", password:"123"})
        }
        else{
            reject('ERROR: Something is wrong')
        }
    },1000)
})

const username = PromiseFour.then((user) =>{
    console.log(user);
    return user.username
} ).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});
async function consumePromiseFive(){
   try{

       const response =  await promiseFive 
       console.log(response);
    }
    catch(error){
        console.log(error);        
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{

//         fetch('https://jsonplaceholder.typicode.com/users')
//         const data = respose.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(("E: ",error));
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response )=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log((error)))
