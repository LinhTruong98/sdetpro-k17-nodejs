/*Count how many odd, even number(s) in an integer array
let intArr = [1, 2, 3, 4, 5];
Even numders: 2
Odd numbers: 3
*/
const readline = require('readline-sync');
let Evencount = 0;
let Oddcount = 0;
let myArray = [1, 2, 3, 4, 5];
for (let index = 0; index < myArray.length; index++) {
    let valueArray = myArray[index];
    if (valueArray % 2 === 0) {
        Evencount++;
        console.log(`Even number is: ${valueArray}`);
    }
    else {
        Oddcount++;
        console.log(`Odd number is: ${valueArray}`);
    }
}
console.log(`Total even number: ${Evencount}`);
console.log(`Total even number: ${Oddcount}`);



