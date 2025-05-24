/*
const prompt= require ('prompt-sync')({sigint:true});

let anoInicio = parseInt(prompt("Digite o ano inicial:"));
let anoFim = parseInt(prompt("Digite o ano final:"));
let primeiroAnoCopa = 1930;
let anosDeCopa = [];
let anoSemCopa = [1942,1946]

for (let ano = anoInicio; ano <= anoFim; ano ++) {
    if(ano >=primeiroAnoCopa && ano % 4 == 2 && !anoSemCopa.includes(ano)){
  anosDeCopa.push(ano);
    }
}
console.log(anosDeCopa);
console.log(anosDeCopa[3]);
console.log(anosDeCopa[9]);
console.log(anosDeCopa[anosDeCopa.length-1]);
console.log(anosDeCopa[0]);
*/
/*
 const prompt = require('prompt-sync')({ sigint: true });

let anoInicio = parseInt(prompt("Digite o ano inicial: "));
let anoFim = parseInt(prompt("Digite o ano final: "));

let primeiroAnoVerao = 1896;
let primeiroAnoInverno = 1924;
let anosSemOlimpiada = [1916, 1940, 1944,2020];
let anosDeOlimpiada = [];

// Jogos de Verão
for (let ano = anoInicio; ano <= anoFim; ano++) {
    if (ano >= primeiroAnoVerao && (ano - primeiroAnoVerao) % 4 === 0 && !anosSemOlimpiada.includes(ano)) {
        anosDeOlimpiada.push(ano + " - Verão");
    }
}

// Jogos de Inverno
for (let ano = anoInicio; ano <= anoFim; ano++) {
    if (ano >= primeiroAnoInverno && (ano - primeiroAnoInverno) % 4 === 0 && !anosSemOlimpiada.includes(ano)) {
        anosDeOlimpiada.push(ano + " - Inverno");
    }
}

// Ordenar por ano
anosDeOlimpiada.sort((a, b) => parseInt(a) - parseInt(b));

console.log(anosDeOlimpiada);
console.log(anosDeOlimpiada[3]);
console.log(anosDeOlimpiada[9]);
console.log(anosDeOlimpiada[anosDeOlimpiada.length-1]);
console.log(anosDeOlimpiada[0]);*/

