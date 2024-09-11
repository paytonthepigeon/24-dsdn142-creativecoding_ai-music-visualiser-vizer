let angle = 0;
let r = 150;
let vocal_history = [];

function add_to_history(history, d) {
  history.push(d);
  if(history.length >= (width-1)/4) {
    history.shift();
  }
}
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background("#fae")
add_to_history(vocal_history, vocal);
circle(10,10,10)
angleMode(RADIANS)
push()

//console.log(test)
translate(height/2, width/2)
r = drum * 2

strokeWeight(16);
stroke(0);
//beginShape();
for(let i = 0; i < 20; i++){

  r = vocal_history[vocal_history.length-i] *2
  console.log(vocal_history[vocal_history.length-i])
  let x = r * cos(angle-i);
  let y = r * sin(angle-i);
  
  //point(x, y);
  vertex(x,y)

}
//endShape()

angle += 0.05; //random(-0.1, 0.1);
//r -= random(-2, 2);
pop()
}