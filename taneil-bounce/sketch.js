function setup() {
    createCanvas(500, 400); 
    background(150); //color of the canvas
    
}
var x = 0
var y = 0

function draw() {
    background(150);
    ellipse(x, y, 50);
x+= 10;
y+= 10;
}

if (y > 400){
    y-=10;
}
else{};

if (x > 500){
    x-=10;
}
else{};
