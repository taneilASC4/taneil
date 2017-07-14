var letter = ["A", "B", "C", "D", "E", "F", "G" ,"H", "I", "J", "K", "L", "M", "N" ,"O" ,"P" ,"Q" ,"R" ,"S", "T" ,"U" ,"V", "W", "X", "Y", "Z",]


function rand(num) {
    //makes a random number between zero and your chosing
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    return (randInt);
}
var b = rand(26)
    //Uses the random number to choose an index
function randletter (){
    console.log(letter[b]);
}

randletter();