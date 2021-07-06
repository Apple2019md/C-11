var pathImg;
var path;
var runner, running;


function preload(){
    pathImg = loadImage("path.png");
    running = loadAnimation("Runner-1.png","Runner-2.png");
}
 

function setup(){
    createCanvas(400, 400);
    
    //create sprites here
    path = createSprite(205, 195);
    path.addImage(pathImg);
    path.velocity=4;

    
     
     runner=createSprite(300,200);
     runner.addAnimation("running", running);
     runner.scale= 0.05;
}


function draw() {
    background(100);
     
    if(path.y>400){
        path.y = height/2;
     }
     
     if(keyIsDown(LEFT_ARROW)){
       runner.veloctiyY = -10;
     }
     
     
     drawSprites(); 
}
