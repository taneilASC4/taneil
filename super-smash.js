var mashArray = ["Pokemon Stadium", " Master Hand", " Final Destination ", "Dream Land"]
var firstquestion = [17, 5]
var secondquestion = ["Mario" , " Pit"]
var prompt = require('prompt-sync')();
function smash (){
    var strike = prompt("How many times will you strike?"); 
    var fighter = prompt("Who will you fight? ");
    firstquestion.push(strike);
    secondquestion.push(fighter);

}
smash();
//random
function rand(num) {
    //makes a random number between zero and your chosing
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    return (randInt);
}

var ranlocation = mashArray[rand(2)]
var ranattack = firstquestion[rand(1)]
var rancharacter = secondquestion[rand(1)]
function answers (){
    
    console.log("You fought " + rancharacter + " in the " + ranlocation + " and hit them " +  ranattack + " times. Too bad. Mewtwo wins!" )
}
answers();

var rematch = prompt ("Do you want to play again?");
var reply = "yes" 
if (reply == "yes"){
    smash();
    answers();
}   
else{ reply == "no"
    console.log ("game over");
}