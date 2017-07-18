function setup() {
    createCanvas(500, 400);
    background(150);
    
}
var x = 0
var y =0

function draw() {
    background(150);
    rect(x, 200, 100, 75);
    ellipse(x, y, 50);
x+= 1;
y+= 1;
}

