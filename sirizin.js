//váriaveis do ator
let xSirizin = 106;
let ySirizin =  367;
let colisao = false;
let meusPontos = 0;

//código do ator

function mostraSirizin(){
  image(imagemDoSirizin, xSirizin, ySirizin, 30, 30);
}

function movimentaSirizin(){
  if (keyIsDown(UP_ARROW)){
    ySirizin -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
        ySirizin += 3;
        }
  }
};

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xSirizin, ySirizin, 15);
    if (colisao){
        sirizinVoltaParaPosicaoInicial();
      if(pontosMaiorQueZero()){
         meusPontos -= 1;
         }
    }
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function sirizinVoltaParaPosicaoInicial(){
  ySirizin = 367;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(0,255,127))
  text(meusPontos, width/2, 28);
}

function marcaPonto(){
  if(ySirizin < 15){
    meusPontos += 1;
    sirizinVoltaParaPosicaoInicial();
  }
}

function podeSeMover(){
  return ySirizin < 366;
}