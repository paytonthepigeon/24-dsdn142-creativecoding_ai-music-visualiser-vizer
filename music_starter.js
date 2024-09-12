
// vocal, drum, bass, and other are volumes ranging from 0 to 100
var eyeanimate=50
let eyewidth=40
var eyeblink=false
let eyeClosing = true;
function draw_one_frame(words, vocal, drum, bass, other, counter) {
 background(73,63,94);
//background add a witchy cabin with shelves and potions yay this gon be hard
beginShape()
fill(97, 40, 49)
rect(100,200,300,100)
   //ellipse(10+Xmove,100,45,45); 
   //potionglow
   beginShape()
fill(44, 82, 89, 100)
noStroke()
ellipse(270,490,440)
fill(44, 87, 89, 130)
ellipse(270,490,370)
    endShape()
  
   //bubbles
   let bubbleSizeMap = map(vocal, 0, 100, 0, 50);
   stroke(0,115,10)
   fill(0,90,10)
  ellipse(300,400,100+bubbleSizeMap)
  let bubbleSizeupMap = map(drum,0,100,0,50)
  ellipse(250,410,70+bubbleSizeupMap)

    let bubbleSizedownMap = map(bass,0,70,0,60)
  ellipse(180,400,85+bubbleSizedownMap) 
 
 ellipse(390,410,100+bubbleSizeMap)
 let bubbleSizedownerMap = map(drum,0,70,0,20)
 ellipse(420,410,90+bubbleSizeMap)
ellipse(444,430,60+bubbleSizedownerMap)
ellipse(100,430,60+bubbleSizedownerMap)
  //cauldron
  beginShape()
  stroke(0)
  fill(0)
  vertex(530,800)
  vertex(20,680)
  vertex(20,490)
  vertex(40,450)
  vertex(40,445)
  vertex(40,445)
  vertex(40,425)
  vertex(500,425)
  vertex(500,435)
  vertex(500,450)
  vertex(500,450)
  vertex(530,480)
  vertex(530,590)
  
  endShape()
  stroke(0,140,10)
  fill(0,115,10)
 ellipse(210,450,80+bubbleSizeMap)
 ellipse(210,410,80+bubbleSizeupMap)
 ellipse(160,460,80+bubbleSizeupMap)
 ellipse(120,450,80+bubbleSizeMap)
  //hairback
  beginShape()
  stroke(170,80,200)
fill(170,80,200)
vertex(800,300)
vertex(900,500)
vertex(900,510)
vertex(700,530)
vertex(680,450)
vertex(600,400)
//vertex(800,400)

endShape()
//face
stroke(193,112,96)
  fill(193, 112, 96 )
   ellipse(850,325,350)

 fill(100,0,0)


 fill(206, 87, 63)
 ellipse(740,380,100)

 fill(206, 87, 63)
 ellipse(920,380,100)

  
//checking if we passed over 80
  if (bass>=80 && eyeblink==false){
    eyeblink=true//true
    eyeClosing=true;
  }

//if we blinking and we knoow the eye is closing we are running the eyeclosing animation
  if(eyeblink == true && eyeClosing == true){
    eyeanimate = eyeanimate -4;
    //eye animate goes smaller so we are checking if the size is 0 so it opens not telling its opening just telling it that the eyeclosing has finished and the eye is ready to open
    if(eyeanimate<=0){
      eyeClosing = false;
    }
  } 
  //if this is true its not going to bother with the else if 
  
  //this animation is opening after the eyeclosing has finished 
  else if(eyeblink == true && eyeClosing == false){
    eyeanimate = eyeanimate +4;
   //we are finding when the eye opening value is at its max and switching it back to its default
    if(eyeanimate>=50){
    
    eyeClosing = true;
    eyeblink = false;
    eyeanimate=50;   
  }
 

}
  
  stroke(0)
  fill(255,200,100)
  strokeWeight(10)
  ellipse(775,325,eyewidth,eyeanimate)
   
   fill(140,200,100)
  ellipse(875,325,eyewidth,eyeanimate)
  
   



//  fill(69)
//  for(let i =0;i < 6;i++)
//  {
//   ellipse(50+100*i,70,70)
//  }
//coat base
   beginShape()
   stroke(20,30,60)
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
    stroke(174,108,177)
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
 stroke(20,30,60)
 fill(20,30,60)
vertex(1090,110+bubbleSizeMap)
 vertex(1000,40+bubbleSizeMap)
 vertex(790,70+bubbleSizeMap)
 vertex(730,130)
 vertex(690,180)
 vertex(480,200+bubbleSizeupMap)
 vertex(1150,300)
 vertex(1030,240)
 vertex(1000,172)
 vertex(1030,140+bubbleSizeMap)
 vertex(1100,150+bubbleSizeMap)
 vertex(1114,170+bubbleSizeMap)
 vertex(1090,110+bubbleSizeMap)
endShape()
//hatstrap
beginShape()
stroke(0,200,100)
fill(0,200,100)
vertex(690,180)
vertex(1030,240)
vertex(1020,213)
vertex(700,160)
vertex(690,180)
endShape()
textFont('Monospaced Argon');
textSize(100);
fill(255)
text(words, width / 20, height / 5); // display current lyric in middle of page, then fade down

}



//    textFont('Verdana'); // please use CSS safe fonts
//  rectMode(CENTER)
//    textSize(24);
  
//     let bar_spacing = height / 10;
//     let bar_height = width / 12;
//     let bar_pos_x = width / 2;
 

//     // vocal bar is red
//     fill(200, 0, 0);
//     rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//     fill(0);
//     text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//     // drum bar is green
  
//   fill(0, 200, 0);
//     rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//     fill(0);
//     text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//     // bass bar is blue
//     fill(50, 50, 240);
//     rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//     fill(0);
//     text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//  //other bar is white
//     fill(200, 200, 200);
//     rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//     fill(0);
//     text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//     fill(255, 255, 0);
 
//     // display "words"
//     textAlign(CENTER);
//     textSize(vocal);
//    text(words, width/8, height/10);