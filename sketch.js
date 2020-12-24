var hours;
var minutes;
var seconds;


function setup() {
  
  angleMode(DEGREES);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();

  translate(200,200);
  rotate(-90);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

push();
rotate(mnAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,80,0);
pop();

push();
rotate(hrAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,60,0);
pop();

scAngle = map(sc, 0, 60, 0, 360);
mnAngle = map(mn, 0, 60, 0, 360);
hrAngle = map(hr, 0, 60, 0, 360);

  drawSprites();
}