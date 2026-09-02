let myName = "Abhirup     "

// console.log(myName.length);
// console.log(myName.truelength);

let myHeros = ["thor", "Spiderman"]

let heroPower  = {
    thor: "Hammer",
    spiderman: "Web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Abhirup = function(){
    console.log((`Abhirup is present in all objects`));
    
}

Array.prototype.heyAbhi= function(){
    console.log(`Abhirup says hello`);
}

heroPower.Abhirup()
heroPower.heyAbhi()
myHeros.Abhirup()



//inheritance

const user = {
    name: "Abhi",
    email: "abhi@gamil.com"
}

const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: true
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

teacher.__proto__= user



//modern syntax
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherusername = "Abhirupk"

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`${`True length is : ${this.trim().length}`}`);
} 


anotherusername.trueLength()
"AbhirupKovid".trueLength()
"Learning&Coding".trueLength()