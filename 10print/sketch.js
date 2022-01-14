let x = 0;
let y = 0;
let spacing = 15;
var counter;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw(){

  counter += 1
  stroke(255);
  strokeWeight(7);
  fill(4);
  if(random(1) < 0.37){
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }

  x = x + spacing;
  if(x >  windowWidth){
    x = 0;
    y = y + spacing;
  }
  if(y > (windowHeight - spacing)){
    y = 0;
    background(0);
  }
}
