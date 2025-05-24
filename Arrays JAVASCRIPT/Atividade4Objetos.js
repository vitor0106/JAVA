let Carro0 = {
    Nome:"Dodge Challenger SRT Demon 170",
    Motor :"6.2L V8 Hemi Supercharged",
    Cavalos :"1.028CV",
    Topspeed :"0-100 km/h: 1,66 segundos",
}

let Carro10 = {
    Nome:"Chevrolet Camaro Exorcist",
    Motor :"V8 6.2L supercharged",
    Cavalos :"1.000CV",
    Topspeed :"0-100 km/h: 3 segundos",
}

let Carro20 = {
    Nome:"Ford Mustang 2025",
    Motor :"V8 5.0L Coyote",
    Cavalos :"492CV",
    Topspeed :"0-100 km/h: 4,3 segundos",
}
console.log('-'.repeat(90));

function Carro(nome, Motor, Cavalos, Topspeed) {
    this.nome = nome;
    this.Motor = Motor;
    this.Cavalos = Cavalos;
    this.Topspeed = Topspeed;
}


const carroA = new Carro("Dodge Challenger SRT Demon 170", "6.2L V8 Hemi Supercharged", "1.028CV", "0-100 km/h: 1,66 segundos");
const carroB = new Carro("Chevrolet Camaro Exorcist", "V8 6.2L supercharged", "1.000CV", "0-100 km/h: 3 segundos");
const carroC = new Carro("Ford Mustang 2025", "V8 5.0L Coyote", "492CV", "0-100 km/h: 4,3 segundos");

console.log(Object.keys(carroA));
console.log(Object.keys(carroB));
console.log(Object.keys(carroC));
console.log('-'.repeat(90));
console.log(Object.values(carroA));
console.log(Object.values(carroB));
console.log(Object.values(carroC));
console.log('-'.repeat(90));
console.log(Object.entries(carroA));
console.log(Object.entries(carroB));
console.log(Object.entries(carroC));
console.log('-'.repeat(90));
for (let chave in carroA) {
    console.log(`carroA chave: ${chave}`);
}
console.log('-'.repeat(90));
for (let chave in carroB) {
    console.log(`carroB chave: ${chave}`);
}
console.log('-'.repeat(90));
for (let chave in carroC) {
    console.log(`carroC chave: ${chave}`);
}
console.log('-'.repeat(90));
for (let chave in carroA) {
    console.log(`carroA valor: ${carroA[chave]}`);
}
console.log('-'.repeat(90));
for (let chave in carroB) {
    console.log(`carroB valor: ${carroB[chave]}`);
}
console.log('-'.repeat(90));
for (let chave in carroC) {
    console.log(`carroC valor: ${carroC[chave]}`);
}
console.log('-'.repeat(90));
const carros = [carroA, carroB, carroC];

carros.push(new Carro("Fiat Uno 2010", "1.0 Flex", "66 cv", "0-100 km/h: 14,7 segundos")); 
carros.unshift(new Carro("BMW M3", "M TwinPower Turbo de 6 cilindros em linha", "510 cv", "0-100 km/h: 3,9 segundos"));

carros.pop();
carros.shift();

console.log(carros[0].nome);
console.log(carros[0].Motor);
console.log(carros[0].Cavalos);
console.log(carros[0].Topspeed);
console.log('-'.repeat(90));

let primos = [2, [5, 7, 11, [97, 23]], [2, 53, [29, 7]]];

let elemento97 = primos[1][3][0]; 
let elemento29 = primos[2][2][0];

console.log("Elemento 97:", elemento97);
console.log("Elemento 29:", elemento29);

for (let i = 1; i <= 5; i++) {
    console.log(" ".repeat(5 - i) + "*".repeat(i * 2 - 1));
  }