function imparPar(n){
    if(n % 2=== 0){
        texto = `o número ${n} é par.`
    } else if(n % 2===1 ){
        texto = `o número ${n} é ímpar.`
    } else{
        texto = "Entrada não válida."
    }
    return texto
}
let n= 10;
console.log(imparPar(10));
const prompt = require('prompt-sync')();
let m = parseFloat(prompt("Digite um número inteiro positivo: "));
console.log(imparPar(m))