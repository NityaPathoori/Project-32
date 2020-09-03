const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world

var score = 0;

function preload() {
  polygon_img = loadImage("hexagon.png");
  
  backgroundImg = loadImage("sky.jpeg"); 
  getbackgroundImg();
}
function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  

  slingShot = new SlingShot(polygon,{x:100,y:200});

  ground1 = new Ground(350,350,250,10);
  ground2 = new Ground(600,200,175,10);

  //level 1, ground 1
  block1 = new Box(262,325,35,40);
  block2 = new Box(298,325,35,40);
  block3 = new Box(332,325,35,40);
  block4 = new Box(367,325,35,40);
  block5 = new Box(402,325,35,40);
  block6 = new Box(437,325,35,40);

  //level 2, ground 1
  block7 = new Box(280,285,35,40);
  block8 = new Box(315,285,35,40);
  block9 = new Box(350,285,35,40);
  block10 = new Box(385,285,35,40);
  block11 = new Box(420,285,35,40);

  //level 3, ground 1
  block12 = new Box(295,245,35,40);
  block13 = new Box(330,245,35,40);
  block14 = new Box(365,245,35,40);
  block15 = new Box(400,245,35,40);

  //level 4, ground 1
  block16 = new Box(313,205,35,40);
  block17 = new Box(348,205,35,40);
  block18 = new Box(383,205,35,40);

  //level 4, ground 1
  block19 = new Box(330,165,35,40);
  block20 = new Box(365,165,35,40);

  //level 5, ground 1
  block21 = new Box(348,125,35,40);

  //level 1, ground 2
  block22 = new Box(545,175,35,40);
  block23 = new Box(580,175,35,40);
  block24 = new Box(615,175,35,40);
  block25 = new Box(650,175,35,40);

  //level 2, ground 2
  block26 = new Box(562,135,35,40);
  block27 = new Box(597,135,35,40);
  block28 = new Box(632,135,35,40);

  //level 3, ground 2
  block29 = new Box(580,95,35,40);
  block30 = new Box(615,95,35,40);

  //level 4, ground 2
  block31 = new Box(597,55,35,40);

  




}

function draw() {
  background(255);  

  Engine.update(engine);
  
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);


  text("SCORE :"+score,750,40);

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
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();


  slingShot.display();
  
  ground1.display();
  ground2.display();
  
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
  block17.display();
  block18.display();

  block19.display();
  block20.display();

  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block26.display();
  block27.display();
  block28.display();

  block29.display();
  block30.display();

  block31.display();
 

}

function mouseDragged() {
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    slingShot.attach(this.polygon);
  }


  async function getbackgroundImg() {
    var response = await fetch ("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(6,6);

    if(hour>=06 && hour<=06) {
      bg = "sky.jpeg"
    }
    else{
      backgroundImg = "sky.jpeg"
    }
      bg = loadImage(bg);
      console.log(backgroundImg);
  }

  
}