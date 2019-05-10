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
        birthRate: -140
    },
    sa: {
        deathRate: 181,
        birthRate: -210
    },
    as: {
        deathRate: 316,
        birthRate: -367
    },
    au: {
        deathRate: 402,
        birthRate: -254
    },
    eu: {
        deathRate: 351,
        birthRate: -444
    },
    af: {
        deathRate: 200,
        birthRate: -200
    },
    an: {
        deathRate: 150,
        birthRate: -120
    },
};



var deathRate = values.na.deathRate;
var birthRate = values.na.birthRate;


$(function() {
  $('.continent-button').click(function() {
    // alert("deathRate");
      deathRate = parseInt( $(this).data('death-rate') ) || 0;
      console.log('deathRate', deathRate);
  });

  $('.continent-button2').click(function() {
    // alert("deathRate");
      deathRate = parseInt( $(this).data('birth-rate') ) || 0;
      console.log('deathRate', deathRate);
  });



});


function setup() {
    createCanvas(windowWidth, windowHeight);
    translate(windowWidth / 2, windowHeight / 2);
    ellipseMode(CENTER);
    angleMode(DEGREES);
    frameRate(3);
    colorMode(HSB, 255, 255);

}

let hue = 0;
var angle = 0;

function triSpin() {

    push();

    // 1
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

    // pop();
    //
    // var x = 0;
    // x = x + 1;
    // translate(windowWidth / 2, windowHeight / 2);
    // var x = 0;
    // while (x <= width) {
    //     fill(hue, 255, 255);
    //     angle += 0.004;
    //     rotate(angle);
    //     stroke(255);
    //     triangle(300, birthRate, birthRate, birthRate, birthRate, 300);
    //     x = x + 1;
    //     triHue();
    // }


    // 2
    pop();

    var x = 0;
    x = x + 1;

    var x = 0;
    while (x <= width) {
        fill(hue, 255, 255);
        angle += 0.004;
        rotate(angle);
        stroke(255);
        triangle(130, deathRate - 50, deathRate - 50, deathRate - 50, deathRate - 50, 130);
        x = x + 1;
        triHue();
    }

    // 3
    pop();

    var x = 0;
    x = x + 1;

    var x = 0;
    while (x <= width) {
        fill(hue, 255, 255);
        angle += 0.004;
        rotate(angle);
        stroke(255);
        triangle(200, deathRate + 100, deathRate + 100, deathRate + 100, deathRate + 100, 200);
        x = x + 1;
        triHue();
    }

    // 4
    pop();
    var x = 0;
    x = x + 1;

    var x = 0;
    while (x <= width) {
        fill(hue, 255, 255);
        angle += 0.004;
        rotate(angle);
        stroke(255);
        triangle(380, deathRate + 55, deathRate + 55, deathRate + 55, deathRate + 55, 380);
        x = x + 1;
        triHue();
    }


    // 5
    pop();

    var x = 0;
    x = x + 1;

    var x = 0;
    while (x <= width) {
        fill(hue, 255, 255);
        angle += 0.004;
        rotate(angle);
        stroke(255);
        triangle(400, deathRate + 70, deathRate + 70, deathRate + 70, deathRate + 70, 400);
        x = x + 1;
        triHue();
    }


    // 6
    pop();

    var x = 0;
    x = x + 4;

    var x = 0;
    while (x <= width) {
        fill(hue, 255, 255);
        angle += 0.010;
        rotate(angle);
        stroke(255);
        triangle(410, deathRate + 100, deathRate + 100, deathRate + 100, deathRate + 100, 410);
        x = x + 2;
        triHue();
    }


    // 7
    pop();

    var x = 0;
    x = x + 5;

    var x = 0;
    while (x <= width) {
        fill(hue, 255, 255);
        angle += 0.0;
        rotate(angle);
        stroke(255);
        triangle(420, deathRate + 230, deathRate + 230, deathRate + 230, deathRate + 230, 420);
        x = x + 5;
        triHue();

    }

    // 8
    pop();

    var x = 0;
    x = x + 5;

    var x = 0;
    while (x <= width) {
        fill(hue, 255, 255);
        angle += 0.0;
        rotate(angle);
        stroke(255);
        triangle(400, deathRate + 250, deathRate + 250, deathRate + 250, deathRate + 200, 400);
        x = x + 5;
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
        triangle(700, deathRate + 295, deathRate + 280, deathRate + 295, deathRate + 280, 700);
        x = x + 5;
        triHue();

    }

//    10
//     pop();
//
//     var x = 0;
//     x = x + 5;
//
//     var x = 0;
//     while (x <= width) {
//         fill(hue, 255, 255);
//         angle += 0.0;
//         rotate(angle);
//         stroke(255);
//         triangle(700, deathRate + 255, deathRate + 150, deathRate + 155, deathRate + 250, 700);
//         x = x + 5;
//         triHue();
//
//     }
   }

function triHue() {
    hue += 0.999;
    if (hue > 255) hue = 30;
    var x = 0;
    fill(hue, 255, 255);
    noStroke();
}

function draw() {
    background(255);

    triSpin();
    //  hue += 0.1;
    // if (hue > 255) hue = 0;
    //change your var angle to increase everytime the draw function runs
    angle = angle + 20;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
