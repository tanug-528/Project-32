var score = 0;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor,polygon,slingshot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    floor = new Ground(600, 300,1200,20);
    polygon = new Polygon(100,200,100,100);
    
    

    slingshot = new SlingShot(polygon.body,{x:100, y:200});
    
    

    //level1

    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    block8 = new Box(510,275,30,40);

    //level2

    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450, 235,30,40);

    //level3

    block13 = new Box(360,195, 30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);

    //top

    block16 = new Box(390,155, 30, 40);

}


function draw(){
    text("SCORE :"+score,750,40);
    background(0,0,0);
    Engine.update(engine);
    

    floor.display();
    polygon.display();
    slingshot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY} );
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}

async function getBackgroundImg()
{var response = await fetch("http://worldtimeapit.org/api/timezone/Asia/Kolkata");
var datetime = responseJSON.datetime; var hour = datetime.slice(11,13);
if(hour>=06 && hour<=18){bg = "sprites/bg.png";}
    else {bg = "sprites/bg2.png";}
backgroundImg = loadImage(bg); console.log(backgroundImg);
}

