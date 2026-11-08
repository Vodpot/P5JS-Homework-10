
// Variables for moving leaf component

  let fallLeafOneX = 475
  let fallLeafOneY = 150
  let fallLeafTwoX = 360
  let fallLeafTwoY = 125

function setup() {
  createCanvas(600, 400);

  // Hide my cursor to see Rabbit
noCursor();
}

function draw() {
  
    background(189,216,255)
  // Background
  fill(95,105,95)
   noStroke()
    ellipse(0,350,1200,300)

  // Midground
  fill(133,148,111)
    ellipse(470,430,1000,400)

  // Foreground
  fill(159,179,90)
   ellipse(30,450,1300,300)

  // Cloud
  fill(252,249,231)
    ellipse(200,50,40,20)
    ellipse(230,40,50,40)
    ellipse(215,60,80,10)

  // Sun
  fill(247,225,29)
   circle(75,60,55)
   quad(75,95,110,60,75,25,40,60)
   square(52.5,37.5,45)

  // Tree Trunk
  fill(97,62,39)
  quad(410,140,425,150,430,255,400,265)
  quad(405,235,380,250,400,270,420,260)
  quad(425,245,460,250,440,265,405,255)
  quad(380,250,355,255,375,260,405,260)
  quad(425,225,440,250,420,250,415,235)

  // Tree Foliage
  fill(242,140,63)
    quad(345,125,410,90,495,120,430,175)
    quad(360,150,385,95,450,120,480,155)
    quad(450,95,455,160,385,165,360,105)
  fill(242,195,63)
    quad(365,125,380,110,410,120,400,145)
    quad(400,110,410,135,380,140,370,115)
    quad(385,115,401,105,420,110,415,125)
    quad(390,110,410,105,425,115,400,120)

  // Fallen Leaves
    ellipse(310,250,10,5)
    ellipse(315,265,10,5)
    ellipse(310,255,10,5)
    ellipse(312,253,10,5)
    ellipse(345,255,10,5)
    ellipse(320,257,10,5)
    ellipse(323,255,10,5)
    ellipse(300,260,10,5)
    ellipse(295,275,10,5)
    ellipse(355,275,10,5)
    ellipse(415,295,10,5)
  fill(242,140,63)
    ellipse(312,250,10,5)
    ellipse(310,265,10,5)
    ellipse(330,270,10,5)
    ellipse(360,240,10,5)
    ellipse(268,260,10,5)
    ellipse(475,260,10,5)

  


  // Rabbit following cursor
  fill(186,132,96)
    circle(mouseX,mouseY,10)
    ellipse(mouseX-5,mouseY+10,10,20)
    ellipse(mouseX-4,mouseY-10,5,10)
    ellipse(mouseX-5,mouseY-5,5,10)
    ellipse(mouseX-3,mouseY+17,17,5)
  fill(0)
    circle(mouseX,mouseY-2,3)
  fill(97,62,39)
    circle(mouseX+5,mouseY,3)
    ellipse(mouseX,mouseY+18,8,3)
  fill(186,132,96)
    circle(mouseX-7,mouseY+10,20)
  fill(232,193,167)
    circle(mouseX-15,mouseY+15,10)
    ellipse(mouseX-4,mouseY-10,3,8)

    
   // Shows mouse position when active
   fill(0)
    textSize(16);
   //text("Mouse X: "+round(mouseX)+" Mouse Y:"+round(mouseY), mouseX, mouseY+30);
   
  animateShapes();
  }

  function animateShapes(){
    // Right side moving leaf
  fill(242,140,63)
  ellipse(fallLeafOneX,fallLeafOneY,10,5)
  fallLeafOneY++;
  if(fallLeafOneY > 255){
  fallLeafOneY = 150;
  }
    // Left side falling leaf
  ellipse(fallLeafTwoX, fallLeafTwoY, 10,5)
  fallLeafTwoY++;
  if(fallLeafTwoY>240){
    fallLeafTwoY = 125
  }

}