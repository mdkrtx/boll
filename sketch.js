let cor;
let posicaoHorizontal; // x
let posicaovertical; // y

function setup() {
  createCanvas(400, 400);
  background("black")
cor=color(random(0,255),random(0,255),random(0,255));
posicaoHorizontal= 200;
posicaovertical= 200;
}
  
function draw() {
  fill(cor);
  circle(posicaoHorizontal,posicaovertical,22);

  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal--;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
  }
  
   if(mouseY < posicaovertical) {
    posicaovertical--;
  }
  
  if(mouseY > posicaovertical) {
    posicaovertical++;
  }
 
if(mouseIsPressed){
  cor=color(random(0,255),random(0,255),random(0,255),random(0,100))
}
}