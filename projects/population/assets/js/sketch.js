
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.class("container");
}
var value = 0;
var angle = 0;
var values = {
  //for every 1000 people -2017
    na: {
      deathRate: 100,
      birthRate: 140
    },
    sa: {
      deathRate: 181,
      birthRate: 210
    },
    asia: {
      deathRate: 316,
      birthRate: 878
    },
    aus: {
      deathRate: 82,
      birthRate: 254
    },
    eur: {
      deathRate: 441,
      birthRate: 444
      },
    afr: {
      deathRate: 200,
      birthRate: 200
      },
    ant: {
      deathRate: 90,
      birthRate: 120
    }
};

var deathRate = values.na.deathRate;

// values.us.deathRate

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  loop(5);
  angleMode(DEGREES);
  rectMode(CENTER);
  //default is 30, this reduces the frame rate
  frameRate(1);
  colorMode(HSB, 255, 255);

}


$('.continent-button').click(function() {
    deathRate = $(this).data('deathRate');
    console.log('deathRate', deathRate);
});

function blurrySquares() {

  let col1 = color(255);
  let col2 = color(255);

  fill(255);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  fill(col1);
  ellipse(0, 0, 850, 850);

  pop();
}


let hue = 0;
var angle = 0;


function triSpin() {

  let col3 = color(232, 196, 14);
  push();

  // 5
  pop();

  var x = 0;
  x = x + 1;

  translate(windowWidth / 2, windowHeight / 2);

  var x = 0;

  while (x <= width) {
    fill(hue, 255, 255);
    angle += 0.004;
    rotate(angle);
    stroke(255);
    triangle(300, deathRate, deathRate, deathRate, deathRate, 300);
    x = x + 1;
    triHue();
  }

}

function triHue() {
  hue += 0.999;
  if (hue > 255) hue = 0;
   var x = 0;
  fill(hue,255,255);
  noStroke();

}

function draw() {
  background(255);
  blurrySquares();
  triSpin();
  //  hue += 0.1;
  // if (hue > 255) hue = 0;
  //change your var angle to increase everytime the draw function runs
  angle = angle + 1;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
