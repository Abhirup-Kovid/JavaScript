class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor (username, email, password){
        super(username)
        this.email= email
        this.password=password
    }

    addCourses(){
        console.log(`A new feature was added by ${this.username}`);

        
    }
}
const code = Teacher("code", "code@gamil.com", 123 )

code.addCourses()
const program  =  new User("program")
program.logMe()
console.log(program===code);
console.log(Teacher===code);
console.log(code instanceof Teacher);
