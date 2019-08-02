const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`enter a number to find a factorial of it`, (number) => {
    console.log(`Hi factorial of number  ${number}!`)
    readline.close()

var fact=1
    while(number>0){
        var fact=fact*number;
        number--;
    }
    console.log(fact)
  })