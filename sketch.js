function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraSirizin();
  mostraCarro();
  movimentaCarro();
  movimentaSirizin();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  pontosMaiorQueZero();
  podeSeMover();
}

