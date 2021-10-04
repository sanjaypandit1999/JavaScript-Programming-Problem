
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const RandomDiceNumber = () => getRandomNumber(1, 6);

const firstDiceNamer = RandomDiceNumber();
const secondDiceNumber = RandomDiceNumber();

console.log("First Random Dice Number Is :" +firstDiceNamer)

console.log("Second Random Dice Number Is :" +secondDiceNumber)

var sum = firstDiceNamer + secondDiceNumber;

console.log("Two random dice number sum is : " +sum)