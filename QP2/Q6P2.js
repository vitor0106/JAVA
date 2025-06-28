function imparPar(n){
    if(n % 2===0){  
    texto = `O número ${n} é par.`
} else if(n % 2===1 ){
    texto = `O número ${n} é ímpar.`
} else {
    texto = `Entrada invalida.`
}
return texto
}
let = 15;
console.log(imparPar(15));
const prompt = require('prompt-sync')();
let m = parseFloat (prompt("Digite um número inteiro positivo: "));
console.log(imparPar(m));
