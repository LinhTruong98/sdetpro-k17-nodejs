/*Merge 2 SORTED integer array into one SORTED array
Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]

Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]*/

const array01 =[1, 12, 16, 28, 34];
array01.push(1, 13, 16, 27, 99);
console.log(`Array is: ${array01}`);
const array = array01;
let number = array;
number.sort(sortNumberASC);
console.log(`Sort array from min to max is: [${number}]`);

function sortNumberASC(num1,num2){
    return num1-num2;
}
 
