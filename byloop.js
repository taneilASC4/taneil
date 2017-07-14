//spend $1000
//set balance =1000
//keep track of balance
//while balance is more than 0, continue prompting what you are going to buy

//while (CONDITION - something is true)

var prompt = require('prompt-sync')();
var balance = 1000;
while (balance > 0){
   var spent = prompt("How much do you want to spend?" );
   while(spent > balance) {
       spent = prompt("Thats too much money. Your balance is "+ balance + ". How much do you want to spend?")
   }
    balance = balance - spent;
    console.log(" You blance is " + balance);
}