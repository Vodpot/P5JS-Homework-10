//Grace Granger
//Homework 7 redone in P5JS

//Location references for the 9 possible shape spots

  let xList = [55, 170, 290];
let yList = [75, 255, 420];
let colors = ['#0078BF', '#F15060', '#FF48B0', '#FF6C2F', '#FFE800'];

function setup() {
  createCanvas(700, 500);
  noLoop(); // Runs draw() only once
}

function draw() {
  background(255); // Turns the canvas white

  // Line thickness and Color for the grid
  strokeWeight(8);
  stroke(0);

  // Tic Tac Toe Grid (Vertical lines)
  for (let lineX = 115; lineX <= 350; lineX += 115) {
    line(lineX, 5, lineX, 495);
  }
  // Tic Tac Toe Grid (Horizontal lines)
  for (let lineY = 155; lineY <= 500; lineY += 170) {
    line(5, lineY, 345, lineY);
  }

  // Placing Os and Xs
  strokeWeight(10);
  noFill();

  // Loop through the 3x3 grid
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      // Pick a random color safely
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      stroke(randomColor);

      // Pick a random shape safely
      let shapeType = Math.random() < 0.5 ? 'circle' : 'Ex';

      // Places Os or Xs
      if (shapeType === 'circle') {
        circle(xList[x], yList[y], 60);
      } else {
        line(xList[x] - 30, yList[y] - 30, xList[x] + 30, yList[y] + 30);
        line(xList[x] - 30, yList[y] + 30, xList[x] + 30, yList[y] - 30);
      }
    }
  }
}

//Click to get a new iteration
  function mouseClicked() {
    redraw();
  }