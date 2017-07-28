function setup(){
   createCanvas(620,700);
   background(51);
}

//Player 
var p_x=285;//Player X coordinate
var p_y=565;//Player Y coordinate

//Alien Speed
var w = 4;
var w1 = 4;


function draw(){
  //Environment
   background(51)  
   fill("white")
   strokeWeight(4);
   rect(0,70,618,50); //Header
   rect(150,7,367,60); //Space Invaders Box
   rect(3,70,300,50); //Score Board Box
   rect(350,70,300,50); //Levels Box
   rect(0,648,618,50); //
   textSize(50);
   textStyle(BOLD);
   fill(0, 102, 153);
   text("Space Invaders", 150, 50);

var score =0;

   textSize(35);
   textStyle(BOLD);
   fill(0, 102, 153);
   text("Score: "+ score + "",5,107);

var lives=3;

   textSize(35);
   textStyle(BOLD);
   fill(0, 102, 153);
   text("Lives: "+ lives + "",355,107);
   
 
var level=1;

   textSize(35);
   textStyle(BOLD);
   fill(0, 102, 153);
   text("Level: "+ level + "",445,687);
    
//movement of Enemies
   if (x<15 || x>785) w = -w;
       x += w;
   if (x<15 || x>785) w1 = -w1;
       x += w1;    
   
   
//Enemies    
   //level 1
   for (var x=0; x<20; x+=5){
       for(var y=150; y<300; y+=140){
           fill(0, 153, 153)
           rect((x*30 + 50 + w), y, 50, 50);
           
       }
   }
   //level 2
   for (var x=0; x<20; x+=5){
       for(var y=220; y<270; y+=70){
           fill(0, 153, 153)
           rect((x*30 + 105+w1), y, 50, 50);
           
       }
   }
   
 
   
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
       p_x=2; // p_x is players x coordinate
   }    
 
   
   fill(0, 153, 0);
   rect(p_x,p_y,75,75);

 //projectile
 var pro_x = 256
 var Pro_y = 0
 var spacebar = 0;
 function draw (){
     fill('green');
     ellipse(pro_x, pro_y, 10, 10);
 }
 function keyPressed (){
     if(spacebar === 0){
         spacebar = 225;
     }
     else{
         spacebar = 0;
    }
     
 }
 //if (pro_y<0){
 //    pro_y = 0;
 //}
//if (keyIsDown(32)){
 //   pro_x = 0
//}
//if (pro_y>620){
  //  pro_x = 100
//}
 //ellipse(pro_x, pro_y, 10, 10);
}

