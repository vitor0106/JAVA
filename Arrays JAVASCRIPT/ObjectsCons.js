function Fruta(nome,preco,peso,cor){
    this.nome = nome;
    this.preco = preco;
    this.peso = peso;
    this.cor = cor;
}
console.log(Fruta);

const fruta1 = new Fruta('Maracujá','R$ 19.90','200 g','Amarelo');
const fruta2 = new Fruta('maca','R$ 9.90','500 g','Vermelho')
console.log(fruta1);
let frutas = [];
frutas.push(fruta1,fruta2);
console.log(frutas);

console.log(frutas[1]);
console.log(frutas[0]);
console.log(frutas[1].nome);