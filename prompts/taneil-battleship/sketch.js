function setup (){
createCanvas(800, 800);
background(0);
}
var x = 0;
var y = 0;
function draw(){
var rec = rect(0,0,100,100);
    for(var i=0; i<10; i++){
        for(var a=0; a<=8; a++){
            rect(x,y,100,100);
            x+=100;
        }
        x=0;
        y+=100;
}
}
var x = 0;
var y = 0;
var value = 0;
function draw2(){
    fill(value);
    rect(x,y,100,100);
}
function mouseClicked(){
    if (value == 0){
        value = 255;
    } else {
        value = 0
    }
}
