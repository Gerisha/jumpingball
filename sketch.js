var canvas;
var music;
var box1, box2, box3, box4;
var ball;


function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(1200, 600);
    
    
    //create 4 different surfaces
    box1 = createSprite(400, 550, 100, 30);
    box1.shapeColor = "red";
    box2 = createSprite(600, 550, 100, 30);
    box2.shapeColor = "purple";
    box3 = createSprite(800, 550, 100, 30);
    box3.shapeColor = "yellow";
    box4 = createSprite(1000, 550, 100, 30);
    box4.shapeColor = "blue";


    //create box sprite and give velocity
    ball = createSprite(random(20, 750), 300, 30, 30);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 4;


    
}

function draw() {
    background(rgb(169, 169, 169));
    //create edgeSprite

    
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    

    
    //add condition to check if box touching surface and make it box
    if (box1.isTouching(ball) && ball.bounceOff(box1)) {
        ball.shapeColor = "red";
    }
    if (ball.isTouching(box2)) {
        ball.shapeColor ="purple";
        ball.velocityX = 0;
        ball.velocityY=0;
        music.stop();
    }
    
    if (box3.isTouching(ball) && ball.bounceOff(box3)) {
        ball.shapeColor = "yellow";
    }
    if (box4.isTouching(ball) && ball.bounceOff(box4)) {
        ball.shapeColor = "blue";
    }

    

    




    drawSprites();
}
