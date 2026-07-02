// values will be boolean 
console.log(2>3)
console.log(2<3)
console.log(2<=3)
console.log(2>=3)

// it is same with strings too
console.log("2">"1");
console.log("2">"3");

// comparision of different datatypes
console.log("2">1)
console.log("2">3);
console.log("2">=3);

console.log(null>0);
console.log(null>=0); //why true ?
//comaprison converts null to a number therefore null becomes 0 so true
console.log(null==0);

console.log(undefined>0);//false
console.log(undefined>=0);//false
console.log(undefined==0);//false

console.log(true<false);
console.log(false<true);

// === strict check => it even checks the datatype
console.log("2"==2); // true due to conversion
console.log("2"===2); // false due to no conversion

//Do avoid these types of conversion write clean and readable code
