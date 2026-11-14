//Grace Granger
//Homework 7 redone in P5JS

//Location references for the 9 possible shape spots

  let xList = ['55','170','290']
  let yList = ['75','255','420']
  

function setup() {
 canvas =  createCanvas(700, 500)
   noLoop()
}


function draw(){
  background(255)

  // Line thickness and Color
  strokeWeight(8)
  stroke(0)

//Tic Tac Toe Grid
  for (let lineX = 115; lineX <= 230, lineX = lineX + 115;) {
    line(lineX, 5, lineX, 495);
  }
  for (let lineY = 155; lineY <= 310, lineY = LineY + 155;) {
    line(5, lineY, 345, lineY);
  }
//Placing Os and Xs

  strokeWeight(10)
  noFill()
  //Determines there is only 9 total shapes
    for (let x = 1; x <= 3; x++){
        for (let y = 1; y <= 3; y++){
  // Determines Color of the shape that will be placed for each of the 9 locations
  stroke(random(['#0078BF','#F15060', '#FF48B0','#FF6C2F','#FFE800']))
    shapeType = random(['circle', 'Ex'])
  // Places Os
    if (shapeType == 'circle') {
  // Os Size
  circle(xList[x], yList[y], 60)
  // Places Xs
    } else {
         (shapeType == 'Ex')
  // Xs size
  line (xList[x]-30,yList[y]-30,xList[x]+30,yList[y]+30)
  line (xList[x]-30,yList[y]+30,xList[x]+30,yList[y]-30)
            }
        }
    }
    //Click to get a new iteration
  function mousePressed() {
    redraw();
  }
}