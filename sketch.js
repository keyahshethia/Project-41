const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops=[];
var thunderCreatedFrame=0;

function preload(){
t1 = loadImage("1.png")
t2 = loadImage("2.png")
t3 = loadImage("3.png")
t4 = loadImage("4.png")
}

function setup(){
    var canvas = createCanvas(400,500);
    engine = Engine.create();
    world = engine.world; 
    umbrella = new Umbrella(200,500);

    if(frameCount%150===0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400),random(0,400)));
        };        
    }
    
}

function draw(){
    background(0);

rand = Math.round(random(1,4));
if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
    switch(rand){
        case 1: thunder.addImage(t1);
        break;
        case 2: thunder.addImage(t2);
        break; 
        case 3: thunder.addImage(t3);
        break;
        case 4: thunder.addImage(t4);
        break;
        default: break;
    }
    thunder.scale = random(0.3,0.6)
}

if(thunderCreatedFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}

umbrella.display();

//displaying rain drops
for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].updateY()
    
}

drawSprites();
    Engine.update(engine);
}   

