
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let eyeblink=100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(73,63,94)
  //hairback
  beginShape()
fill(170,80,200)
vertex(800,300)
vertex(900,500)
vertex(800,510)
vertex(700,530)
vertex(680,450)
vertex(600,400)
//vertex(800,400)

endShape()
//face
  fill(193, 112, 96 )
   ellipse(850,325,350)

 fill(100,0,0)
 ellipse(825,20,30)

 fill(206, 87, 63)
 ellipse(740,380,100)

 fill(206, 87, 63)
 ellipse(920,380,100)

   fill(140,200,100)
   ellipse(775,325,50,eyeblink)
   
   fill(140,200,100)
   ellipse(875,325,50,eyeblink)
   



 //fill(69)
 //for(let i =0;i < 6;i++)
 //{
  // ellipse(50+100*i,70,70)
 //}
//coat base
   beginShape()
    fill(20,30,60)
    vertex(720,450)
    vertex(1000,440)
    vertex(980,500)
    vertex(1000,900)
    vertex(670,800)
vertex(600,700)   
    vertex(750,500)
   
    endShape()
//hairfront
    beginShape()
fill(174, 108, 177)
vertex(840,130)
vertex(700,170)
vertex(600,300)
vertex(650,400)
vertex(700,350)
vertex(750,250)
vertex(740,300)
vertex(780,300)
vertex(790,250)
vertex(800,300)
vertex(900,300)
vertex(890,250)
vertex(920,300)
vertex(940,300)
vertex(945,290)
vertex(920,450)
vertex(935,550)
vertex(1000,480)
vertex(1040,470)
vertex(1015,205)
vertex(840,130)
endShape()
//hat
 beginShape()
 fill(20,30,60)
vertex(1090,110)
 vertex(1000,40)
 vertex(790,90)
 vertex(730,130)
 vertex(690,180)
 vertex(480,200)
 vertex(1150,300)
 vertex(1030,240)
 vertex(1000,172)
 vertex(1030,140)
 vertex(1100,150)
 vertex(1114,170)
 vertex(1090,110)
endShape()
//hatstrap
beginShape()
fill(0,200,100)
vertex(690,180)
vertex(1030,240)
vertex(1020,213)
vertex(700,160)
vertex(690,180)
endShape()
}



  // textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER)
  // textSize(24);
  
  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);