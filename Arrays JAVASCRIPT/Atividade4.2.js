// Vitor Bruno Andrade De Barros /25114290128

//1. Escolha uma tema. Crie 3 objetos relativos a este tema e que contenha 4 atributos.
//Construa os objetos usando a foram literal.
const carro1={
    marca: "HONDA",
    modelo: "CIVIC",
    ano: 2020,
    cor: "Cinza"
}

const carro2={
    marca: "AUDI",
    modelo: "Q3",
    ano: 2016,
    cor: "Branco"
}

const carro3={
    marca: "MERCEDES-BENZ",
    modelo: "GLA 250",
    ano: 2016,
    cor: "Cinza"
}
console.log('-'.repeat(70));
//2. Crie uma função construtora relativa à mesma classe (tema) que você utilizou na questão 1.
function Carro(marca,modelo,ano,cor){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
}
console.log('-'.repeat(70));

//3. Crie 3 instâncias(objetos) da classe definida na questão 2
carro1 = new Carro("honda","CIVIC",2020,"Cinza");
carro2 = new Carro("AUDI","Q3",2016,"Branco");
carro3 = new Carro("MERCEDES-BENZ","GLA 250",2016,"Cinza");

console.log(carro1)
console.log(carro2)
console.log(carro3)
console.log('-'.repeat(70));
//4. Busque todas as chaves dos objetos definidos em 3).
console.log(Object.keys(carro1));
console.log(Object.keys(carro2));
console.log(Object.keys(carro3));
console.log('-'.repeat(70));
//5. Busque todos os valores dos objetos definidos em 3).
console.log(Object.values(carro1));
console.log(Object.values(carro2));
console.log(Object.values(carro3));
//6. Puxe todos os pares chaves-valores dos 3 objetos definidos.
console.log(Object.entries(carro1));
console.log(Object.entries(carro2));
console.log(Object.entries(carro3));
//7 Aplique for loop para buscar todas chaves para cada um dos objetos definidos.