// Execution Context
// The first thing is made by js is Global Excecution Context which is refred to this keyword
// every environment for Javascript has a different values for this 
// we are dealing with the node environment 
// value of the this keyword in the browser is window object 
// Javascript is the single threaded language

// Global Excecution Context and Functional Excecution Context and Eval Excecution Context
/**
 * 1. Memory creation Phase - memory has been created or allocated for the variable  we create
 * 2. Execution Phase - all process are done here
 *  let val1 = 10
 *  let val2 = 5
 *  function addNum(num1, num2){
 *    let total = num1 + num2
 *    return total
 *  }
 *  let result1 = addNum(val1,val2)
 *  let result2 = addNum(10,2)
 * 
 * step1) global execution
 * step2) creation phase or memory phase all variables memory is made
 * val1 -> undefined, val2->undefined, addNum->defination, result1->undefined, result2->undefined
 * 
 * step3) execution phase 
 * val1<-10, val2<-5, addNum=>makes its own excecutional context
 * (new environment+ exceution thread) is created for addNum as many times the function is called
 * val1->undefined, val2->undefined, total->undefined => Execution Context num1<-10, num2<-5, total<-15 
 * total is returned to global excecution context by the function's return
 * then the Executional context sandbox created for addNum is been deleted after it work has been done 
 * result1<-15
 * result2<- same process gets repeated
 * 
 */

