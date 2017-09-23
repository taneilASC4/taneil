// $("button").click(function () {
//     var test = $('<button>Test</button>').click(function () {
//         alert('hi');
//     });

//     $("#nodeAttributeHeader").attr('style', 'display: table-row;');
//     $("#addNodeTable tr:last").before('<tr><td>' + test.html() + '</td></tr>');
// });

// joshe's shit


$(document).ready(function(){
    console.log( "ready!" );
    displayScore();
})

var choices =["rock", "paper", "scissors"];
var compChoice=choices[Math.floor(Math.random()*3)];
console.log(compChoice);
//9 Different Outcomes
/* s v r - win
   s v p - lose
   r v p - win
   r v s - lose
   p v s - win
   p v r - lose
 if both are the same it is a draw. */

// variable to store Score for Computer and Player
var playScore = 0;
var compScore = 0;
//displays Score via The Setup
function displayScore(){
    $("body").prepend("<h3 id='removeable'> Player Score : " + playScore + "  Computer Score : " + compScore + "  </h3>");
}
//Decides the Winner of the battle based on two parameters:
// the player's choice: choice and the computer's choice: compChoice.
function decideWinner(choice, compChoice){
   if (choice == "scissors"){
       console.log("Hello!")
       if (compChoice == "rock"){
           console.log("Player Lost, Computer Wins.");
           $(".display").append("<h2>Player Lost, Computer Wins.</h2>");
           compScore+=1;
       } else if (compChoice == "paper"){
           console.log("Computer Lost, Player Wins!");
           $(".display").append("<h2>Computer Lost, Player Wins!</h2>");
           playScore+=1;
       } else if (compChoice == "scissors") {
           console.log("The Game Ends In A Draw.");
           $(".display").append("<h2>The Game Ends In A Draw.</h2>");
       }
   }    
    if (choice == "rock"){
       if (compChoice == "rock"){
           console.log("The Game Ends In A Draw.");
           $(".display").append("<h2>The Game Ends In A Draw.</h2>");
       } else if (compChoice == "paper"){
           console.log("Player Lost, Computer Wins.");
           $(".display").append("<h2>Player Lost, Computer Wins.</h2>");
           compScore+=1;
           
       } else if (compChoice == "scissors") {
           console.log("Computer Lost, Player Wins!");
           $(".display").append("<h2>Computer Lost, Player Wins!</h2>");
           playScore+=1;
       }
    }    
    if (choice == "paper"){
       if (compChoice == "rock"){
           console.log("Computer Lost, Player Wins!");
           $(".display").append("<h2>Computer Lost, Player Wins!</h2>");
           playScore+=1;

       } else if (compChoice == "paper"){
           console.log("The Game Ends In A Draw.");
           $(".display").append("<h2>The Game Ends In A Draw.</h2>");
       } else if (compChoice == "scissors"){
           console.log("Player Lost, Computer Wins.");
           $(".display").append("<h2>Player Lost, Computer Wins.</h2>");
           compScore+=1;
           
       }         
    }
    //rests the Scoreboard.
    $("#removeable").empty()
    $("body").prepend("<h3 id='removeable'> Player Score : " + playScore + "  Computer Score : " + compScore + "  </h3>");  
    //resets the game for future games
    var compChoice=choices[Math.floor(Math.random()*3)];
    console.log(compChoice);
}
    //console.log("The Game Ends In A Draw");
    // end of josh's

function myFunction1() {
    $("body").append(<div class =" pull-left">
                <img class="img-responsive" src="https://thumb7.shutterstock.com/display_pic_with_logo/483673/112149467/stock-photo-funny-rock-cartoon-character-112149467.jpg">
            </div>
            <div class="pull-right">
                <img class="img-responsive" src="https://vignette1.wikia.nocookie.net/adventuretimewithfinnandjake/images/2/25/Paper_Pete.png/revision/latest?cb=20120823104606">
            </div>
            <div class="pull-right">
                <img class="img-responsive" src="https://studio.code.org/media?u=http%3A%2F%2Fs7d1.scene7.com%2Fis%2Fimage%2Fofficedepot%2F502351_p_blue_7inchstudent_042115%3F%24OD-Dynamic%24%26wid%3D450%26hei%3D450">
            </div>)

{/*
function myFunction2() {
    var y = document.getElementById('myDIV2');
    if (y.style.display === 'none') {
        y.style.display = 'https://vignette1.wikia.nocookie.net/adventuretimewithfinnandjake/images/2/25/Paper_Pete.png/revision/latest?cb=20120823104606';
    } else {
        y.style.display = 'none';
    }
}

function myFunction3() {
    var z = document.getElementById('myDIV3');
    if (z.style.display === 'none') {
        z.style.display = 'https://studio.code.org/media?u=http%3A%2F%2Fs7d1.scene7.com%2Fis%2Fimage%2Fofficedepot%2F502351_p_blue_7inchstudent_042115%3F%24OD-Dynamic%24%26wid%3D450%26hei%3D450';
    } else {
        z.style.display = 'https://studio.code.org/media?u=http%3A%2F%2Fs7d1.scene7.com%2Fis%2Fimage%2Fofficedepot%2F502351_p_blue_7inchstudent_042115%3F%24OD-Dynamic%24%26wid%3D450%26hei%3D450';
    }
}*/}
