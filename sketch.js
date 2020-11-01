// game varibles.
var backgroundn,backgroundN;
var sword;
var score=0;

var PLAY = 1;
var END = 0;
var gamestate = 1;

var applen,pearn,bananan,orangen,enemy;

var appleN,pearN,bananaN,orangeN,enemyGroup;

var apple,pear,banana,orange,monster;

var bomb,Bomb,bum;

var GameOver,gameOver,gameOverN;

var enemy,enemyN,enemyn;

function preload(){
  // load background.
  backgroundn=loadImage("background.png");
  // load sword.
  sword=loadImage("sword.png");
  // load fruits.
  applen=loadImage("fruit1.png");
  bananan=loadImage("fruit2.png");
  pearn=loadImage("fruit3.png");
  orangen=loadImage("fruit4.png");
  // load gameOver image.
  GameOver=loadImage("gameover.png");
  bomb=loadImage("Bomb.png"); 
  // to load sound in different gameState.
  sound=loadSound("0128.mp3")
  gameOverN=loadSound("gameover.mp3");
  blast=loadSound("Bomb+2.mp3");
  enemyn=loadAnimation("alien1.png","alien2.png");
}
function setup() {
createCanvas(600,400);

  // creating background sprite.
  backgroundN=createSprite(300,200);
  backgroundN.addImage("ground",backgroundn);
  backgroundN.scale=1.78;
  
   // creating sword sprite.
  swordN= createSprite(200,200);
  swordN.addImage("talvar",sword);
  swordN.scale=0.2;
  
   // creating gameover sprite.
  gameOver= createSprite(300,200);
  gameOver.addImage("nnnn",GameOver);
  gameOver.visible=false;
  gameOver.scale=1;
  
  
  
  
  // fruit groups. 
  pearN = new Group();
  appleN = new Group();
  bananaN = new Group();
  orangeN = new Group();
  bumGroup= new Group();
  enemyN= new Group();
  
  // To set the shape, size, angle,and x,y offset of the colloider.
  swordN.setCollider("rectangle",0,0,40,460,45);
  
}
  
function draw(){  
    // if loop to serve .
 if (gamestate===PLAY){
   //sword on mouse.
   swordN.y = World.mouseY;
  swordN.x = World.mouseX;
  
   // to increase speed after few points to make it intresting.
  
   
   // to select random fruits to make game intresting.
   var select_fruit = Math.round(random(1,6));
  
  if (World.frameCount % 100 == 0) {
    if (select_fruit == 1) {
      fruit1();
      
    } else if (select_fruit == 2) {
      fruit2();
      
    } else if (select_fruit == 3) {
      fruit3();
      
    } else if (select_fruit == 4) {
      fruit4(); 
      
    } else if (select_fruit == 5) {
      Bomb ();
    } else if (select_fruit == 6) {
      enemy();
    }
  }
    
   
   
   // to destroy fruits after touching sword.
  if (swordN.isTouching(appleN)){
    appleN.destroyEach();
    score=score+1;
    sound.play();
      }
  
  if (swordN.isTouching(pearN)){
    pearN.destroyEach();
    score=score+1;
    sound.play();
      }
  
  if (swordN.isTouching(bananaN)){
    bananaN.destroyEach();
    score=score+1;
    sound.play();
      }
  
  if (swordN.isTouching(orangeN)){
    orangeN.destroyEach();
    score=score+1;
    sound.play();
      }
   
   // to end the game
   if (swordN.isTouching(bumGroup)||(swordN.isTouching(enemyN))) {
     gamestate = END;
     blast.play();
   }
 } 
  // else if loop to end the game.
 else if (gamestate===END){
    gameOver.visible= true;
   bumGroup.destroyEach();
   enemyN.destroyEach();
   // to stop sword at its place after gameOver.
   swordN.velocityX=0;
   swordN.velocityY=0;
 }  
  
 console.log(Math.round(bumGroup.velocityX)) ;

  
  drawSprites();
  
  // to text score.
  textSize(20);  
  text("Score: "+ score, 500,50);

}

//function to create fruits.
function fruit1() {
  var apple = createSprite(570,Math.round(random(20, 370)), 10, 10);
  apple.addImage("nnnnn",bananan);   
  apple.velocityX = -8;
  apple.lifetime = 150;
  apple.scale = 0.2;
  appleN.add(apple);  
}

function fruit2() {
  var orange = createSprite(0,Math.round(random(20, 370)), 10, 10);
  orange.addImage("nnnnn",orangen);
  orange.velocityX = 10;
  orange.lifetime = 150;
  orange.scale = 0.2;
  orangeN.add(orange);
}
function fruit3() {
  var pear = createSprite(570,Math.round(random(20, 370)), 10, 10);
  pear.addImage("nnnnn",pearn);
  pear.velocityX = -8;
  pear.lifetime = 150;
  pear.scale = 0.2;
  pearN.add(pear);
}
function fruit4() {
  var banana = createSprite(0,Math.round(random(20, 370)), 10, 10);
  
  banana.addImage("nnnnn",bananan);
  banana.velocityX = 10;  
  banana.lifetime = 150;
  banana.scale = 0.2;
  bananaN.add(banana);
}

// function to create enemies.
function Bomb() {
  var bum = createSprite(0,Math.round(random(20, 370)), 10, 10);
  bum.addImage("nnnnn",bomb);
  bum.velocityX = 8;
  bum.lifetime = 150;
  bum.scale = 0.2;
  bumGroup.add(bum);
 
}

function enemy () {
  var monster= createSprite(590,Math.round(random(20,370)),10,10);
  monster.addAnimation("nnnnn",enemyn);
  monster.velocityX= -8;
  monster.lifetime = 150;
  monster.scale = 1;
  enemyN.add(monster);
}


