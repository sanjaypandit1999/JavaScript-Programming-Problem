const prompt = require('prompt-sync')();
const number = Number(prompt("Enter A Number :"));
for (let i = 0; i <= number; i++) {
    console.log("The Output is : " +Math.pow(2, i));
}