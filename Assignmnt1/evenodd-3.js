const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`enter a number to find even or odd`, (number) => {
    console.log(` Given Number is  ${number}`)
    readline.close()

console.log( number%2==0 ? "even": "odd")

   
  })