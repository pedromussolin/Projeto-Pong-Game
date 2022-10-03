//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variaveis raquete um
let xRaqueteUm = 8;
let yRaqueteUm = 150;
let comprimentoRaqueteUm = 10;
let alturaRaqueteUm = 90;

//variaveis raquete dois
let xRaqueteDois = 585;
let yRaqueteDois = 150;
let velocidadeYRaqueteDois;
  
//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let colidiu =  false;

//placar
let meusPontos = 0;
let pontosDoOponente = 0;
let myFont;

//sons do jogo
let ponto;
let trilha;

function preload() {
    myFont =  loadFont('Retro Gaming.ttf');
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("coin.mp3");
}

function setup() 
{
  createCanvas(600, 400);
  trilha.loop();
}

function draw() 
{
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaqueteUm, yRaqueteUm);
  movimentoRaqueteUm();
  verificaColisaoRaquete(xRaqueteUm, yRaqueteUm);
  mostraRaquete(xRaqueteDois, yRaqueteDois);
  //movimentoRaqueteDois();
  verificaColisaoRaquete(xRaqueteDois, yRaqueteDois);
  incluiPlacar();
  marcaPonto();
  movimentoRaqueteDoisPlayers();
  bolinhaNaoFicaPresa();
}

function mostraBolinha()
{
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha()
{
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda()
{
    if(xBolinha + raio> width || xBolinha - raio < 0)
  {
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0)
  {
    velocidadeYBolinha *= -1;  
  }
}

function mostraRaquete(x,y)
{
  rect(x, y, comprimentoRaqueteUm, alturaRaqueteUm);  
}

function movimentoRaqueteUm()
{
  if(keyIsDown(UP_ARROW))
    {
      yRaqueteUm -= 8;
    }
  if(keyIsDown(DOWN_ARROW))
    {
      yRaqueteUm += 8;
    }
}

function verificaColisaoRaquete(x, y) 
{
    colidiu = collideRectCircle(x, y, comprimentoRaqueteUm, alturaRaqueteUm, xBolinha, yBolinha, raio);
    if (colidiu)
    {
      velocidadeXBolinha *= -1;
    }
}

 function movimentoRaqueteDois()
{
  velocidadeYRaqueteDois = yBolinha - yRaqueteDois - comprimentoRaqueteUm / 2 - 30;
  yRaqueteDois += velocidadeYRaqueteDois;
  
}

function  incluiPlacar()
{
  textAlign(CENTER)
  fill(255);
  textFont(myFont);
  textSize(25);
  text(meusPontos, 150, 40);
  text(pontosDoOponente, 450, 40);
  stroke(0, 0, 225);
  strokeWeight(3);
}

function marcaPonto()
{
  if(xBolinha > 590)
    {
      meusPontos += 1;
      ponto.play();
    }
  if(xBolinha < 10)
    {
      pontosDoOponente += 1;
      ponto.play();
    }
}

function movimentoRaqueteDoisPlayers()
{
if(keyIsDown(87))
    {
      yRaqueteDois -= 8;
    }
  if(keyIsDown(83))
    {
      yRaqueteDois += 8;
    }
}

function bolinhaNaoFicaPresa()
{
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}

