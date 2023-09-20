//Declare variables

//to load images, animations and sound
function preload(){
  bgImage = loadImage("road.jpg")
  heroImage = loadImage("superhero.png")
}

//to create canvas and sprites
function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(width/2, height/2, width,height)
  bg.addImage(bgImage);
  bg.scale = 0.4;
superhero = createSprite(100,height - 200, 50,50);
superhero.addImage(heroImage)

}


//game functionalities
function draw() {
  background("black"); 

  drawSprites();

}
