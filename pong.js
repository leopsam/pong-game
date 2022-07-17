//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//--------------------------------------------------------
//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//--------------------------------------------------------
//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//--------------------------------------------------------
//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//--------------------------------------------------------
let colidiu = false;

//--------------------------------------------------------
//placar jogo
let meusPontos = 0;
let pontosOponente = 0;

//--------------------------------------------------------
//sons do jogo
let raquetada;
let ponto;
let trilha;

//--------------------------------------------------------
//Atribui o son na variavel
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
//--------------------------------------------------------
function setup(){
  createCanvas(600, 400);
  trilha.loop();
  trilha.setVolume(0.1);
}
//--------------------------------------------------------
function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete); 
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente); 
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();
    bolinhaNaoFicaPresa();
  
  
}
//--------------------------------------------------------
function mostraBolinha() {
    fill(255);
    circle(xBolinha, yBolinha, diametro)
}
//--------------------------------------------------------
function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}
//--------------------------------------------------------
function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }  
}
//--------------------------------------------------------
function mostraRaquete(x, y) {
    fill(255);
    rect(x, y, raqueteComprimento, raqueteAltura);
}
//--------------------------------------------------------
function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}
//--------------------------------------------------------
function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
//--------------------------------------------------------
  //jogar com a maquina
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente- raqueteComprimento  - 30;
  yRaqueteOponente += velocidadeYOponente;
}
//--------------------------------------------------------
 function incluiPlacar(){
   
   textAlign(CENTER);
   textSize(16);   
   fill(255);
   rect(150, 10, 40, 20);   
   fill(0);
   text(meusPontos, 170, 26);   
   fill(255);
   rect(450, 10, 40, 20);   
   fill(0);   
   text(pontosOponente, 470, 26);   
 }
//--------------------------------------------------------
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos +=1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente +=1;
    ponto.play();
  }
}
//--------------------------------------------------------
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
//--------------------------------------------------------
