//DATES
//in javascript months start with 0
let myDate = new Date()
console.log(myDate); //  this format of date is not readable so we need to convert

console.log(myDate.toString());//better than before
console.log(myDate.toDateString());//Readable
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());


let myCreatedDate2 = new Date(2023, 0, 23, 5 ,3, 23)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now() //polls, quizes returns current time in milliseconds
console.log(myTimeStamp);

console.log(myCreatedDate3.getTime());//retun=ens the time from epoch

console.log(Math.floor(Date.now()/1000));//converting date into seconds

//this is how you directly get the date information
let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday: "long"
})



