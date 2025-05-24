//Vitor Bruno Andrade de Barros/25114290128

// 1. Crie um array com 5 elementos da forma string
let frutas = ["maçã", "banana", "laranja", "uva", "kiwi"];
console.log(frutas)
// 2. Determine o quarto elemento desse array usando indexação
console.log("Quarto elemento:", frutas[3]); // índice começa em 0

// 3. Determine o último elemento deste array
console.log("Último elemento:", frutas[frutas.length - 1]);

// 4. Liste os elementos do array de duas formas:

// 4.1 usando for loop sobre os índices
console.log("Usando for com índice:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// 4.2 usando for...of
console.log("Usando for...of:");
for (let fruta of frutas) {
    console.log(fruta);
}
console.log('-'.repeat(90));
// 5. Ordene os elementos deste array em forma alfabética
frutas.sort();
console.log("Ordenado alfabeticamente:", frutas);
console.log('-'.repeat(90));
// 6. Ordene os elementos do array em forma alfabética reversa
frutas.sort().reverse();
console.log("Ordenado reversamente:", frutas);
console.log('-'.repeat(90));
// 7. Crie um array com elementos numéricos
let numeros = [5, 12, 3, 9, 1];

// 7.1 ordene os elementos em ordem crescente
numeros.sort((a, b) => a - b);
console.log("Números em ordem crescente:", numeros);
console.log('-'.repeat(90));
// 7.2 ordene os elementos em ordem decrescente
numeros.sort((a, b) => b - a);
console.log("Números em ordem decrescente:", numeros);
console.log('-'.repeat(90));
// 8. Crie um array com 3 elementos
let animais = ["cachorro", "gato", "pássaro"];

// 8.1 adicione outros 4 elementos um por um usando push(.)
animais.push("peixe");
console.log("Tamanho após adicionar peixe:", animais.length);

animais.push("tigre");
console.log("Tamanho após adicionar tigre:", animais.length);

animais.push("leão");
console.log("Tamanho após adicionar leão:", animais.length);

animais.push("urso");
console.log("Tamanho após adicionar urso:", animais.length);
console.log('-'.repeat(90));
// 8.2 remova o último elemento e mostre o elemento que foi eliminado
let removido = animais.pop();
console.log("Elemento removido:", removido);
console.log("Array final:", animais);