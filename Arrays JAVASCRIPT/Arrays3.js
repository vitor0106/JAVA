// Nome:    Matrícula
//1. Crie um array com 5 elementos da forma string.
let continentes = ["Europa","África", "América", "Oceania", "Ásia"];
console.log(continentes);
console.log('-'.repeat(90));
//2. Determine o quarto elemento desse array usando indexação.
console.log(`O quarto elemento é "${continentes[3]}". `);
//2.1 Índice do elemento "América"
console.log(`O índice de "América" é ${continentes.indexOf("América")}.`);
//2.2 Índice do elemento "Ásia"
console.log(`O índice de "Ásia" é ${continentes.indexOf("Ásia")}.`);
//2.3 Índice de "EUA"
console.log(`O índice de "EUA" é ${continentes.indexOf("EUA")}.`);
console.log('-'.repeat(90));

//3. Determine o último elemento deste array.
console.log(continentes[continentes.length-1]);
console.log('-'.repeat(90));
//4. Use for loops e liste os elementos do array de duas formas:
//4.1. usando for loop sobre os índices
for(let i=0; i < continentes.length; i++){
    console.log(continentes[i]);
}
console.log('-'.repeat(90));

//4.2. usando for...of
for(const continente of continentes){
    console.log(continente);
}
console.log('-'.repeat(90));

//5. Ordene os elementos deste array em forma alfabética.
console.log(continentes.sort());
console.log('-'.repeat(90));

//6. Ordene os elementos do array em forma alfabética reversa
console.log(continentes.sort().reverse());
console.log('-'.repeat(90));

//7. Crie um array com elementos numéricos.
let fibonacci_perm = [55,1,1,2,3,5,8,13,21,34];
//7.1 ordene os elementos em ordem crescente
console.log(fibonacci_perm.sort((a,b) => a - b));
//7.2 ordene os elementos em ordem decrescente
console.log(fibonacci_perm.sort((a,b) => b-a));
console.log('-'.repeat(90));

//8. Crie um array com 3 elementos.
let categoriasFilmes = ['terror','comédia','drama'];
console.log(categoriasFilmes);
//8.1 adicione outros 2 elementos um por um usando push(.).
// Mostre a quantidade de elementos ao adicionar os elementos
let m1 = categoriasFilmes.push('ficção científica');
console.log(m1)
let m2 = categoriasFilmes.push('ação');
console.log(m2);
console.log(categoriasFilmes);
//8.2 remova o último elemento e mostre o elemento que foi eliminado.
console.log(categoriasFilmes.pop());
console.log(categoriasFilmes);
/*
let dias = ['dom','seg','out','nov', 'dez'];
console.log(dias.splice(2,3,'ter','qua','qui','sex','sab'));
console.log(dias)
let primos = [2,3,11,13];//[2,3,5,7,11,13]
console.log(primos.splice(2,0,5,7));
console.log(primos)
*/
/*
let numeros = [34,1,23,9,8,77,65];
console.log(numeros.sort((a, b) => a-b));//crescente*/