function setup(){
    createCanvas(1001,701);
    background(51);
}
    function draw() {
        rect(0, 0, 400, 100);
        ellipse(900, 53, 100, 100);
        rect(600, 600, 400, 100);
        ellipse(53, 600, 100, 100);
        rect(160, 600, 400, 100);
        rect(600, 480, 400, 100);
        rect(160, 480, 400, 100);
        rect(600, 360, 400, 100);
        //the text of the pokemon
        textSize(32);
        text("pokemon1", 0, 540);
           
        //the text of the opponents pokemon
        textSize(32);
        text("opp's pokemon", 769, 130);
        //op's health
        textSize(32);
        text("health", 10, 35);
        //your health
        textSize(32);
        text("health", 610, 390);

    }
   


