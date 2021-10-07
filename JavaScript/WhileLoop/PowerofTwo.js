const prompt = require('prompt-sync')();
let number = prompt("Enter a number :");
let i = 0;
while (i <= number ) {
   let power = Math.pow(2,i);
   console.log("The Power Of 2 ^ " + i + " Is : "+power);
    i++;
} 