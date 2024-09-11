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
angleMode(RADIANS)
add_to_history(vocal_history, vocal);
translate(300, 300);
strokeWeight(16);
stroke(0);
//r = vocal
for(let i = 0; i < 20; i++){

  historyVal = vocal_history[vocal_history.length - i]
  r = map(historyVal, 0, 100, 50, 70)
let angle = map(i, 0, 20, 0, PI*2)
let x = r * cos(angle);
let y = r * sin(angle);
point(x, y);

}
angle += 0.05; //random(-0.1, 0.1);
r -= random(-2, 2);
}