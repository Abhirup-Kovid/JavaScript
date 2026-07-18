//Objects in constructor

const tinderUser = new Object() // singleton object
// const tinderUser2 ={} //non singleton object

tinderUser.id="123acb"
tinderUser.name="Raven"
tinderUser.isLoggedin=false

//console.log(tinderUser);

const regularUser ={
    ramil:"random@gamil.coom",
    fullName:{
        usersFullname:{
            firstName:"Abhirup",
            lastName:"Kovid"
        }
    }
}
// console.log(regularUser.fullName?.usersFullname.firstName);

const Object1={1: "a", 2: "b"}
const Object2={3: "a", 4: "b"}
// const object3= { Object1 , Object2 }
// const Object3 =Object.assign({}, Object1, Object2)
                        // target ,source,source
const Object3 ={...Object1, ...Object2}
// console.log(Object3);

//from databases
const users = [
    {
        id : 1,
        email : "ak@gamil.com"
    },
    {
        id : 1,
        email : "ak@gamil.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));

