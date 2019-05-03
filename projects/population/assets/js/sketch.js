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
    as: {
      deathRate: 316,
      birthRate: 878
    },
    au: {
      deathRate: 82,
      birthRate: 254
    },
    eu: {
      deathRate: 441,
      birthRate: 444
      },
    af: {
      deathRate: 200,
      birthRate: 200
      },
    an: {
      deathRate: 90,
      birthRate: 120
    }
};
var deathRate = values.na.deathRate;

$('.continent-button').click(function() {
    deathRate = $(this).data(deathRate);
    console.log('deathRate', deathRate);
});


function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth / 2, windowHeight / 2);
  ellipseMode(CENTER);
  loop(5);
  angleMode(DEGREES);

  //default is 30, this reduces the frame rate
  frameRate(1);
  colorMode(HSB, 255, 255);

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

  // 6
    pop();
    var x = 0;
    x = x + 1;
    
    var x = 0;
    while (x <= width) {
      fill(hue, 255, 255);
      angle += 0.004;
      rotate(angle);
      stroke(255);
      triangle(380, deathRate +55, deathRate+55, deathRate+55, deathRate+ 55, 380);
      x = x + 1;
      triHue();
    }


  // 7
    pop();

    var x = 0;
    x = x + 1;

    var x = 0;
    while (x <= width) {
      fill(hue, 255, 255);
      angle += 0.004;
      rotate(angle);
      stroke(255);
      triangle(400, deathRate +70, deathRate+70, deathRate+70, deathRate+ 70, 400);
      x = x + 1;
      triHue();
    }


  // 8
    pop();

    var x = 0;
    x = x + 4;

    var x = 0;
    while (x <= width) {
      fill(hue, 255, 255);
      angle += 0.010;
      rotate(angle);
      stroke(255);
      triangle(410, deathRate+100, deathRate+100, deathRate+100, deathRate+100, 410);
      x = x + 2;
       triHue();
    }


  // 9
    pop();

    var x = 0;
    x = x + 5;

    var x = 0;
    while (x <= width) {
       fill(hue, 255, 255);
      angle += 0.0;
      rotate(angle);
      stroke(255);
      triangle(420, deathRate +230, deathRate+230, deathRate+230, deathRate+230, 420);
      x = x + 5;
      triHue();

    }

    // 10
      pop();

      var x = 0;
      x = x + 5;

      var x = 0;
      while (x <= width) {
         fill(hue, 255, 255);
        angle += 0.0;
        rotate(angle);
        stroke(255);
        triangle(400, deathRate +250, deathRate+250, deathRate+250, deathRate+200, 400);
        x = x + 5;
        triHue();

      }

    // 11
      pop();

      var x = 0;
      x = x + 5;

      var x = 0;
      while (x <= width) {
        fill(hue, 255, 255);
        angle += 0.0;
        rotate(angle);
        stroke(255);
        triangle(700, deathRate +265, deathRate+300, deathRate+265, deathRate+300, 700);
        x = x + 5;
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

  triSpin();
  //  hue += 0.1;
  // if (hue > 255) hue = 0;
  //change your var angle to increase everytime the draw function runs
  angle = angle + 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
