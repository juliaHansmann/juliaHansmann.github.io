var schubkraft = 10;
var gKraft = 5;
var x = 100;
var y = 100;
var boden = 400;
var stop = height - 170;
var geschwindigkeit = 0;
var start = false;
var lasty = 0;
var img = loadImage("biene.png");
var img2 = loadImage("hintergrund.jpg");
var regendicke = 2;
var regen_x = [];
var regen_y = [];
var wind = -3;
var anzahl_tropfen = 100;
var windstart_neg = 0;
var windstart_pos = 0;
var stop_regen = height - 120;
var txt = "";

if (wind < 0) {
  windstart_neg = 300;
} else if (wind > 0) {
  windstart_pos = -300;
}
for (var i = 0; i < anzahl_tropfen; i += 1) {
  regen_x.push(Math.floor(random(0 + windstart_pos, width + windstart_neg)));
  regen_y.push(Math.floor(random(-400, 10)));
}

function setup() {
  createCanvas(1200, 700);
}

function mouseClicked() {
  if (start == false) {
    if (mouseX >= 900 && mouseX <= 1000 && mouseY >= 300 && mouseY <= 350) {
      gKraft = 5;
      x = 100;
      y = 100;
      geschwindigkeit = 0;
      schubkraft = 10;
      start = true;
      txt = "";
    }
  }
}

function regen() {
  for (var ix = 0; ix < anzahl_tropfen; ix += 1) {
    let array_regen_x = regen_x[ix];
    let array_regen_y = regen_y[ix];
    if (array_regen_y >= stop_regen) {
      regen_x[ix] = Math.floor(
        random(0 + windstart_pos, width + windstart_neg)
      );
      regen_y[ix] = Math.floor(random(-80, 5));
    }
    stroke(0, 255, 255);
    strokeWeight(regendicke);
    line(
      array_regen_x,
      array_regen_y,
      array_regen_x + wind,
      array_regen_y + 20
    );
    regen_x[ix] += wind;
    regen_y[ix] += 5;
  }
}

function draw() {
  clear();

  push();
  background(255);

  imageMode(CORNERS);

  image(img2, 0, 0, width, height);

  regen();

  imageMode(CENTER);
  //scale(0.5);
  image(img, x, y, 100, 100);
  pop();

  // img();

  //Button
  fill(200, 152, 192);
  rect(900, 300, 100, 50, 10);
  var buttontext = "Start";
  textSize(30);
  fill(25, 25, 25); //textfarbe
  text(buttontext, 920, 340); //textposition
  text(txt, 400, 400);
  if (start == true) {
    var yänderung = 0;
    if (y >= stop) {
      y = stop;
      gKraft = 0;
      schubkraft = 0;
      start = false;
      if (lasty >= 10) {
        txt = "Verloren";
      } else {
        if (x >= 280 && x <= 330) {
          txt = "Gewonnen";
        } else {
          txt = "Verloren";
        }
      }
    } else {
      if (y >= 150);
      {
        geschwindigkeit += 0.05;
      }
      yänderung += gKraft + geschwindigkeit;
    }

    if (keyIsPressed) {
      if (keyIsDown(65)) {
        x -= 5;
      }
      if (keyIsDown(68)) {
        x += 5;
      }
      if (keyIsDown(87)) {
        yänderung -= schubkraft;
      }
    } else {
    }

    y += yänderung;
    lasty = yänderung;
  }
}
