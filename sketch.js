let palavra;

function setup() {
  createCanvas(1000, 1000);
  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Diferenciadamente", "Sabiamente", "♀×♂","Lucas K.", "Onde estou?", "Isso me parece familiar"];
  return random(palavras)
}
function inicializaCores(){
  background("Lightblue");
  fill("black");
  textSize(84);
  textAlign(CENTER, CENTER);
}
function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}
function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 500, 500);
}
function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Você precisa deixar o ambiente mais plausivel aos seus olhos.");
  } else {
    console.log("Ainda não chegou seu momento, espere pacientimente por ele a cada dia.");
  }
}