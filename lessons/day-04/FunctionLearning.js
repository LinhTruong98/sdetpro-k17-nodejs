//DRY stand forr Don't Repeat Yourself -> gather the logiv and reuse
// Single Responsibility (Tính đơn nhiệm); Dễ đọc dễ hiểu dễ maintain
// Clean code 
// Hàm sinh ra để tránh trùng lặp, dùng ở nhiều nơi

// Note: Khi đặt tên phải có ý nghĩa, đặc tả được nội dung
/**
 * Basic naming convention for function
 * 1. Có nghĩa
 * 2. Bắt đầu là động từ, lowercase
 * 3. camelCase
 * 
 */
//Cách khai báo: 2 method
const readline = require('readline-sync');
let userInputNumber = getUserInputNum();
console.log(`User input number:${userInputNumber}`);

// Method 1: {Function Declaration} 
// |Hoisting: gọi 1 cái gì đó trước khi nó được định nghĩa
function getUserInputNum() {
let inputNum = readline.question("Your number:");
return Number(inputNum);    
}
// Method 2: {Function Expression} | No hoisting
const getUserInputNumFnExpression = function () {
 let inputNum = readline.question("Your number:");
return Number(inputNum);    
}   
    
