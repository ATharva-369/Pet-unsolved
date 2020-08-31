var dog, dogImage, happyDog, database, foodS, foodStock, db ;

function preload() {
  dogImage = loadImage("/dogImg.png");
  happyDog = loadImage("dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  db = firebase.database()
  dog = createSprite(250, 250, 50, 100);
  dog.addImage(dogImage)
  dog.scale = .2;
  foodStock = db.ref('/Food');
  foodStock.on("value", readStock);

}


function draw() {
  background(46, 139, 87)
  if (keyCode === UP_ARROW) {
    writeStock(foodS);
  }
  drawSprites();
  fill ("blue");
  text("FOOD="+foodS,400,50)


}
function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {
  x+=2
  db.ref('/').update({
    Food:x
  })
}
 



