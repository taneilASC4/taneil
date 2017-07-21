function setup() {
    createCanvas(500, 400); 
    background(150); //color of the canvas
    
}
var x = 5;
var y = 5;
var xPos = 0;
var yPos = 0;

function draw() {
    background(150);
    if (xPos < 0 || xPos > 500) x = -x;
    if (yPos < 0 || yPos > 400) y = -y;
    xPos += x;
    yPos += y;
    ellipse(xPos, yPos, 50);
}

