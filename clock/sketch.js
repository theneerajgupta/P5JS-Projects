/*
gonna make clock and create a clock
*/

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}
function draw() {
  background(0);

  let h = hour();
  let m = minute();
  let s = second();

  let h1 = (h/24)*width;
  let m1 = (m/60)*width;
  let s1 = (s/60)*width;


  noStroke();
  fill(255, 87, 51);
  rect(0,   0, h1, 200);
  noStroke();
  fill(46, 134, 193);
  rect(0, 200, m1, 200);
  noStroke();
  fill(72, 201, 176);
  rect(0, 400, s1, 200);


  fill(240, 240, 240);
  textSize(120);
  text("HOUR" ,30 ,140);
  fill(240, 240, 240);
  textSize(120);
  text("MINUTE" ,30 ,340);
  fill(240, 240, 240);
  textSize(120);
  text("SECOND" ,30 ,540);





  // fill(255);
  // noStroke();
  // text(h + ':' + m + ':' + s, 10, 200);
}
