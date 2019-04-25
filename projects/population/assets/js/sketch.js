// var angle = 0;
// var values = {
//     us: {
//       deathRate: 100,
//       birthRate: 200
//     },
//     china: {
//       deathRate: 200,
//       birthRate: 200
//     }
// };
//
// // values.us.deathRate

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.class("container");
}
var value = 0;
var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER)
  angleMode(DEGREES);
  rectMode(CENTER);
  //default is 30, this reduces the frame rate
  frameRate(13);
  //ellipseMode(CENTER);
  //noStroke();
}


function blurrySquares() {

  // let c = color(172, 220, 169);
  // let b = color(102, 139, 100);
  let c = color(255);
  let b = color(0);

  noStroke();
  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  fill(c);
  ellipse(0, 0, 1400, 1400);

  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  fill(b);
  ellipse(0, 0, 1200, 1200);

  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  fill(c);
  ellipse(0, 0, 1000, 1000);

  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  fill(b);
  ellipse(0, 0, 950, 950);
  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  fill(c);
  ellipse(0, 0, 850, 850);

  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(-angle);
  fill(b);
  ellipse(0, 0, 700, 700);

  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  fill(c);
  ellipse(0, 0, 550, 550);

  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(-angle);
  fill(b);
  ellipse(0, 0, 400, 400);

  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  fill(c);
  ellipse(0, 0, 350, 350);

  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(-angle);
  fill(b);
  ellipse(0, 0, 200, 200);

  pop();

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  fill(c);
  ellipse(0, 0, 150, 150);

  pop();

}



function triSpin() {

  let a = color(232, 196, 14);
  push();

  var x = 0;
  fill(a);
  noStroke();
  translate(windowWidth / 2, windowHeight / 2);
  angle += 0.00;
  rotate(angle);

  x = x + 5;

  var x = 0;
  while (x <= width) {
    fill(a);
    angle += 0.000;
    rotate(angle);
    stroke(199, 32, 14);
    triangle(5, 31, 31, 31, 31, 5);
    x = x + 5;
  }


  pop();

  var x = 0;
  fill(a);
  noStroke();
  translate(windowWidth / 2, windowHeight / 2);
  angle += 0.01;
  rotate(angle);

  x = x + 50;

  var x = 0;
  while (x <= width) {
    fill(a);
    angle += 0.001;
    rotate(angle);
    stroke(199, 32, 14);
    triangle(30, 70, 70, 70, 70, 30);
    x = x + 10;
  }



  pop();

  var x = 0;
  fill(a);
  noStroke();
  angle += 0.001;
  rotate(angle);

  x = x + 1;

  var x = 0;
  while (x <= width) {
    fill(a);
    angle += 0.004;
    rotate(angle);
    stroke(199, 32, 14);
    triangle(170, 120, 120, 120, 120, 170);
    x = x + 1;
  }

  pop();

  var x = 0;
  fill(a);
  noStroke();
  angle += 0.001;
  rotate(angle);

  x = x + 1;

  var x = 0;
  while (x <= width) {
    fill(a);
    angle += 0.004;
    rotate(angle);
    stroke(199, 32, 14);
    triangle(170, 200, 200, 200, 200, 170);
    x = x + 1;
  }

  pop();

  var x = 0;
  fill(a);
  noStroke();
  angle += 0.001;
  rotate(angle);

  x = x + 1;

  var x = 0;
  while (x <= width) {
    fill(a);
    angle += 0.004;
    rotate(angle);
    stroke(199, 32, 14);
    triangle(300, 240, 240, 240, 240, 300);
    x = x + 1;
  }

  pop();

  var x = 0;
  fill(a);
  noStroke();
  angle += 0.001;
  rotate(angle);

  x = x + 1;

  var x = 0;
  while (x <= width) {
    fill(a);
    angle += 0.004;
    rotate(angle);
    stroke(199, 32, 14);
    triangle(370, 300, 300, 300, 300, 340);
    x = x + 1;
  }

  pop();

  var x = 0;
  fill(a);
  noStroke();
  angle += 0.001;
  rotate(angle);

  x = x + 1;

  var x = 0;
  while (x <= width) {
    fill(a);
    angle += 0.004;
    rotate(angle);
    stroke(199, 32, 14);
    triangle(350, 360, 360, 360, 360, 350);
    x = x + 1;
  }

  pop();

  var x = 0;
  fill(a);
  noStroke();
  angle += 0.001;
  rotate(angle);

  x = x + 4;

  var x = 0;
  while (x <= width) {
    fill(a);
    angle += 0.004;
    rotate(angle);
    stroke(199, 32, 14);
    triangle(440, 410, 400, 400, 410, 440);
    x = x + 4;
  }

  pop();

  var x = 0;
  fill(a);
  noStroke();
  angle += 0.0;
  rotate(angle);


  x = x + 4;

  var x = 0;
  while (x <= width) {
    fill(a);
    angle += 0.0;
    rotate(angle);
    stroke(199, 32, 14);
    triangle(460, 530, 530, 530, 530, 460);
    x = x + 4;
  }


}

function draw() {
  background(0);
  blurrySquares();
  triSpin();
  //change your var angle to increase everytime the draw function runs
  angle = angle + 1;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
