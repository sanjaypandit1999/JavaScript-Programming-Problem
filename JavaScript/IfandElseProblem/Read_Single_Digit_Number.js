var readline = require('readline');
 var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter the number :" )
rl.prompt();
rl.on('line', (number)=>{
    numberInWord(number)
    rl.close()

})

function numberInWord(number){

        if( number == 0 ){
            console.log ("zero");
        }else if ( number == 1 ){
            console.log ("one");
        }else{
            console.log ("two");
        }
}