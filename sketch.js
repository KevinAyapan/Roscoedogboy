
var koko=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(4,mouseX,220); //an RGB color for the canvas' background
  rect(200,koko,100)
  stroke(255,koko,127) // an RGB color for the circle's border
  strokeWeight(80);
  fill(236,355,koko); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(koko,90,300,); // center of canvas, 20px dia
  rect(400,koko,255)
  fill(0,189,koko);//blue
  stroke(4,koko,220)
  strokeWeight(40)
  ellipse(100,koko,100); // bottom, left of canvas, 30px dia
rect(mouseX,mouseY,200,90,100);
stroke(0);
line(5,100,150,175)
strokeWeight(10);
point(random(width),random(height));
noStroke(800);
ellipse(mouseX,mouseY,50,50);
}


function mousePressed() {
  koko=koko+ 3;
}