const readline = require('readline-sync');
let number = readline.question('Number:');

if (number % 2 === 0) {
    console.log('Chia hết cho 2 và là số chẵn');
}
else {
    console.log('Không chia hết cho 2 và là số lẻ');

}

