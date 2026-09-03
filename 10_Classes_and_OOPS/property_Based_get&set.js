function User (email, password){
    this.email=email
    this.password=password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this.email
        },

        set: function(value)
        {
            this.email = value
        }
    }
)


const code = new User("abhi@gmail.com", "code")

console.log(code.email);

}