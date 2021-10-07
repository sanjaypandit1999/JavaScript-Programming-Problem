const prompt = require('prompt-sync')();
function isPalindrome(number1, number2) {
    let reversedNumber = 0;
    while (number1 > 0) {
        let remainder = number1 % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number1 = Math.floor(number1 / 10);
    }
    if (reversedNumber == number2)
        return true;
    else
        return false;
}
let firstNumber = Number(prompt("Enter first number : "));
let secondNumber = Number(prompt("Enter second number : "));
if (isPalindrome(firstNumber, secondNumber))
    console.log("Two numbers are Palindromes");
else
    console.log("Two numbers are not Palindromes");