var garrafa1={
    composicao: 'poliestileno',
    capacidade: '500 ml',
    cor: 'azul',
    fabricante: 'Dark lab'
}

var garrafa2={
    composicao:'vidro',
    capacidade:'1 L',
    cor:'rosa',
    fabricante:'China LTDA'
}

var garrafa3={
    composicao:'aluminio',
    capacidade:'3 L',
    cor:'amarelo',
    fabricante:'Coca-Cola LTDA'
}

function Garrafa(composicao,capacidade,cor,fabricante){
    this.composicao = composicao;
    this.capacidade = capacidade;
    this.cor = cor;
    this.fabricante = fabricante;
}
console.log('-'.repeat(70));
garrafa1 = new Garrafa('poliestileno','500 ml','azul','Dark lab');
garrafa2 = new Garrafa('vidro','1 L','rosa','China LTDA');
garrafa3 = new Garrafa('aluminio','3 L','amarelo','Coca-Cola LTDA');
console.log(garrafa1)
console.log(garrafa2)
console.log(garrafa3)
console.log('-'.repeat(70));
console.log(Object.keys(garrafa1));
console.log(Object.keys(garrafa2));
console.log(Object.keys(garrafa3));
console.log('-'.repeat(70));
console.log(Object.values(garrafa1));
console.log(Object.values(garrafa2));
console.log(Object.values(garrafa3));
console.log('-'.repeat(70));

console.log(Object.entries(garrafa1));
console.log(Object.entries(garrafa2));
console.log(Object.entries(garrafa3));
console.log('-'.repeat(70));

for(const chave in garrafa1){
    console.log(garrafa1[chave]);
}
for(const chave in garrafa2){
    console.log(garrafa2[chave]);
}
for(const chave in garrafa3){
    console.log(garrafa3[chave]);
}
//9
let garrafas =[];
garrafas.push(garrafa1,garrafa2,garrafa3);
console.log(garrafas);
//10
let garrafa4 = new Garrafa('Ouro','5 L','Dourado',"Dubai SA");
let garrafa5 = new Garrafa('Gelo','3 L','Lilas','Ice S/A');
garrafas.unshift(garrafa4);
garrafas.push(garrafa5);
console.log(garrafas);
//11
garrafas.pop();
garrafas.shift();
console.log('-'.repeat(70));
//12
console.log(garrafas[1].cor);
console.log(Object.values(garrafas[1])[2]);
console.log(Object.values(garrafa2)[2]);
console.log(Object.values(garrafa2.cor));
//13
let primos = [2,[5,7,11[97,23]],[2,53[29,7]]]
console.log(primos[1][3][0]);
console.log(primos[2][2][0]);
console.log( primos.length)



let caractere = '*';
let vezes = 6;
for(let i =1; i <= vezes; i++){
    console.log(caractere.repeat(i))
}