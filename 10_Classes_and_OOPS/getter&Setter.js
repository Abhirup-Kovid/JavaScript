class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email=email;
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const abhi = new User("abhi@gmail.com", "btech")
console.log(abhi.password);
