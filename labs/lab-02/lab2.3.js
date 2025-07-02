const readline = require("readline-sync");
let height = readline.question("Heigh:");
let weight = readline.question("Weigh:");
let BMI = weight / (height * height);

if (BMI < 18.5) {
    console.log("Underweight: Hơi gầy");
    console.log('Bạn nên ăn nhiều thêm 1 xíu để tăng cân cho đẹp');

} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal weight: Bình thường");
    console.log('Như này là vừa rồi nhé, duy trì cân nặng nha');

} else if
    (BMI >= 25 && BMI <= 29.9) {
    console.log("Overweight: Thừa cân");
    console.log('Gắng thể dục thể thao để giảm cân xíu nha, iuuu');

} else {
    console.log("Obesity: béo phì");
    console.log('Không tốt cho sức khỏe, bạn giảm cân nha ');

}