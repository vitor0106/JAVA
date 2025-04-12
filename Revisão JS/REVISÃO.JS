let numPremiado1 = 23;
let numPremiado2 = 42;
let numPremiado3 = 87;
let tentativas = 3;
let tentativasRestantes = 3;
const prompt = require('prompt-sync')({ sigint: true });

for (let i = 0; i < tentativas; i++) {
  var num = parseInt(prompt(`Faça a tentativa ${i + 1}: `));

  if (num === numPremiado1 || num === numPremiado2 || num === numPremiado3) {
    console.log(`Número ${num} é premiado. Você ganhou!`);
    break;
  } else {
    tentativasRestantes--;
    console.log(`Você errou, você tem agora ${tentativasRestantes} tentativa(s).`);
  }
}
if(num !== numPremiado1 && num !== numPremiado2 && num !== numPremiado3){
    console.log("Você perdeu!")
}

let numPremiado  = parseInt (100*Math.random())+1;
console.log(numPremiado)