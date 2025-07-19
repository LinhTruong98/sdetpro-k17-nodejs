//Original
console.log(myVariable);
//let myVariable =1; in ra sẽ bị lỗi vì chưa gán giá trị trước
var myVariable =1;


//Hoisting: Hoisted by interpreter
var myVariable;
console.log(myVariable);
myVariable =1;

/**
 * Hoisting:
 * 1. Declaration part is hoisting
 * 2. Assingment is REMAINED
 * 
 * 
 * 
 */
