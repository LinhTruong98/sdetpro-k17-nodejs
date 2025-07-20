/**
 Sort an integer array from min to max
 Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
 */

let number = [12, 34, 1, 16, 28];
number.sort(sortNumberASC);
console.log(`Sort from min to max is: [${number}]`);
function sortNumberASC(num1,num2){
    return num1-num2;
}
