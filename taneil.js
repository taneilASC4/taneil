//console.log("Taneil is awesome");

//console.log("hello world");

function rand(num) {
    //makes a random number between zero and your chosing
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log(randInt);
    return (randInt);
}

rand(14);