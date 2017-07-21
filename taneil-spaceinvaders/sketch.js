function setup(){
    createCanvas(620,700);
    background(51);
}
var y = 0 
var y2 = 70
function draw(){ //for the eminies to be in three rows
    
    for(y=0; y<4; y++) {
        for(i=0; i<4; i++){
            //emenimes 
    rect(3, y, 50, 50);
    rect(54, y2, 50, 50);
    rect(105, y, 50, 50);
    rect(156, y2, 50, 50);
    rect(207, y,50, 50);
    rect(258, y2, 50, 50);
    rect(309, y, 50, 50);
    rect(360, y2, 50, 50);
    rect(411, y, 50, 50);
    rect(462, y2, 50, 50);
    rect(513, y, 50, 50);
    rect(564, y2, 50, 50);
        }
 x+=40   }
    
   //movement of Player
   if (keyIsDown(LEFT_ARROW)){
       p_x -=5;
   }
   if(p_x<0){
       p_x=618;
   }  
 
   if (keyIsDown(RIGHT_ARROW)){
       p_x +=5;
   }
   if (p_x>620){
       p_x=2;
   }    
 
   
   fill(0, 153, 0);
   rect(p_x,p_y,75,75);

   
}

