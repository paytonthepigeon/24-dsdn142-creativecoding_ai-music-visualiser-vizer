
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let eyeblink=100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(73,63,94)

  fill(158, 91, 64 )
   ellipse(850,325,350)

 fill(100,0,0)
 ellipse(825,20,30)

   fill(139, 100, 139,)
   ellipse(775,325,50,eyeblink)
   
   fill(139, 100, 139,)
   ellipse(875,325,50,eyeblink)
   
 fill(90)
 ellipse(700,400,80)


 fill(69)
 for(let i =0;i < 6;i++)
 {
   ellipse(50+100*i,70,70)
 }

  //  beginShape()
  //  fill(20)
  //  vertex(200,250)
  //  vertex(250,399)
  //  vertex(300,200)
  //  vertex()
  //  vertex()
  //  endShape()
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