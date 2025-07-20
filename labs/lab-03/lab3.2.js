/*Finding maximum value/minimum value from an integer array
let intArr = [1, 2, 3, 4, 5];
Minimum: 1
Maximum: 5
*/
const readline = require('readline-sync');

let myArray = [1, 2, 3, 4, 5];
let max = myArray[0];//myArray[index,value,array]
let min = myArray[0];
for (let index = 0; index < myArray.length; index++) {
let num1= myArray[index];
    if (num1> max ) {
     max = num1;   
    }
    if (num1<min) {
      min = num1;  
    } }
        console.log(`Max is: ${max}`);

   console.log(`Min is: ${min}`);
