const readline = require("readline-sync");

let height = readline.question("Heigh:");
let weight = readline.question("Weigh:");
/*Nếu muốn chuyển đổi từ string sang number 
let heightstr = readline.question("Heigh:");
let weightstr = readline.question("Weigh:");
convert string to number 
let height = Number(heightstr);
let weight = Number(weightstr);
*/
let BMI = weight / (height * height);

if (BMI < 18.5) {
    console.log("Underweight: Hơi gầy");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal weight: Bình thường");

} else if
    (BMI >= 25 && BMI <= 29.9) {
    console.log("Overweight: Thừa cân");

} else {
    console.log("Obesity: béo phì");
}

