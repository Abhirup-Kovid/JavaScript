class User {
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const code = new User ("Abhi", "abhi@gmail.com","1234")
console.log(code.encryptPassword());
console.log(code.changeUsername());

function User(username, email, apssword){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.password}abc`
}

const program = new User("program", "program@gmail.com", "123")
console.log(code.encryptPassword);
console.log(code.changeUsername);

