const BETLOST = 0;
let start = 100;
let winCount = 0;
let Bets = 0;
while (start > 0 && start < 200) {
    let bet = Math.floor(Math.random() * 10) % 2;
    if (bet == BETLOST)
        start--;
    else{
        start++;
        winCount++;
    }
    Bets++    
}
console.log("Number Of Bets =" +Bets);
console.log("Total WinCount= " +winCount);
console.log("Final Balance =" +start);