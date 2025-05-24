//Vitor Bruno Andrade de Barros/25114290128
//1. Crie um array com 5 elementos da forma string.
let EstilosDeMusicas = ["Rock","Rap","Funk","Trap","Hip-Hop"];
console.log(EstilosDeMusicas)
console.log('-'.repeat(90));
// 2. Determine o quarto elemento desse array usando indexação
console.log(`O quarto elemento é "${EstilosDeMusicas[3]}". `);
console.log('-'.repeat(90));
// 3. Determine o último elemento deste array
console.log(`O último elemento é "${EstilosDeMusicas[EstilosDeMusicas.length-1]}".`);
console.log('-'.repeat(90));
// 4. Liste os elementos do array de duas formas:
// 4.1 usando for loop sobre os índices
for(let i=0; i < EstilosDeMusicas.length; i++){
    console.log(EstilosDeMusicas[i]);
}
console.log('-'.repeat(90));
// 4.2 usando for...of
console.log("Usando for...of:");
for (let EstilosDeMusica of EstilosDeMusicas) {
    console.log(EstilosDeMusica);
}
console.log('-'.repeat(90));
// 5. Ordene os elementos deste array em forma alfabética
EstilosDeMusicas.sort();
console.log("Ordenado alfabeticamente:", EstilosDeMusicas);
console.log('-'.repeat(90));
// 6. Ordene os elementos do array em forma alfabética reversa
EstilosDeMusicas.sort().reverse();
console.log("Ordenado reversamente:", EstilosDeMusicas);
console.log('-'.repeat(90));
// 7. Crie um array com elementos numéricos
let numeros = [8, 16, 9, 7, 32];
// 7.1 ordene os elementos em ordem crescente
numeros.sort((a, b) => a - b);
console.log("Números em ordem crescente:", numeros);
console.log('-'.repeat(90));
// 7.2 ordene os elementos em ordem decrescentenumeros.sort((a, b) => b - a);
numeros.sort((a, b) => b - a);
console.log("Números em ordem decrescente:", numeros);
console.log('-'.repeat(90));
// 8. Crie um array com 3 elementos
let animais = ["cachorro", "gato", "pássaro"];
// 8.1 adicione outros 4 elementos um por um usando push(.)
animais.unshift("Baiacu");
console.log("Tamanho após adicionar Baiacu:", animais.length);

animais.unshift("tigre");
console.log("Tamanho após adicionar tigre:", animais.length);

animais.unshift("leão");
console.log("Tamanho após adicionar leão:", animais.length);

animais.unshift("urso");
console.log("Tamanho após adicionar urso:", animais.length);
console.log('-'.repeat(90));
// 8.2 remova o último elemento e mostre o elemento que foi eliminado
let removido = animais.shift("urso");
console.log("Elemento removido:", removido);
console.log('-'.repeat(90));
console.log("Array final:", animais);
console.log('-'.repeat(100));



let MarcasDeCarros = ["Rolls-Royce", "Lamborghini", "Mercedes-Benz", "BMW", "Honda"];
console.log(MarcasDeCarros)
console.log('-'.repeat(90));
console.log("Quarto elemento:", MarcasDeCarros[3]); 
console.log('-'.repeat(90));

console.log(`O último elemento é "${MarcasDeCarros[MarcasDeCarros.length-1]}".`);
console.log('-'.repeat(90));

console.log("Usando for com índice:");
for (let i = 0; i < MarcasDeCarros.length; i++) {
    console.log(MarcasDeCarros[i]);
}
console.log('-'.repeat(90));

console.log("Usando for...of:");
for (let estilo of EstilosDeMusicas) {
    console.log(estilo);
}
console.log('-'.repeat(90));
MarcasDeCarros.sort();
console.log("Ordenado alfabeticamente:", MarcasDeCarros);
console.log('-'.repeat(90));

MarcasDeCarros.sort().reverse();
console.log("Ordenado reversamente:", MarcasDeCarros);
console.log('-'.repeat(90));

let Numeros = [5, 12, 3, 9, 1];


numeros.sort((a, b) => a - b);
console.log("Números em ordem crescente:", numeros);
console.log('-'.repeat(90));

numeros.sort((a, b) => b - a);
console.log("Números em ordem decrescente:", numeros);
console.log('-'.repeat(90));
let frutas = ["maçã", "banana", "laranja"];

frutas.unshift("uva");
console.log("Tamanho após adicionar uva:", frutas.length);

frutas.unshift("abacaxi");
console.log("Tamanho após adicionar abacaxi:", frutas.length);

frutas.unshift("manga");
console.log("Tamanho após adicionar manga:", frutas.length);

frutas.unshift("melancia");
console.log("Tamanho após adicionar melancia:", frutas.length);
console.log('-'.repeat(90));

let removida = frutas.shift();
console.log("Fruta removida:", removida);
console.log('-'.repeat(90));
console.log("Array final:", frutas);
console.log('-'.repeat(90));