const user = {
    username: "Abhirup",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        console.log("Got user details from database");
    }
}
console.log(user.username);

console.log(user.getUserDetails);


function User(username,loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn

    return this
}

const userOne = new user("Abhi", 12, true)
const userTwo = new user("AbhiK", 10, false)
console.log(userOne.constructor);
console.log(userTwo);

