/*function imparPar(n){
    if(n % 2=== 0){
        texto = `O número ${n} é par.`
    } else if(n % 2===1){
        texto = `O número ${n} é ímpar.`
    }else{
        texto = "Entrada não válida."
    }
    return texto

}
let n= 10;
console.log(imparPar(10));

const prompt = require('prompt-sync')();
let m = parseFloat(prompt("Digite um número inteiro positivo: ").trim());
console.log(imparPar(m));
*/
/*
function not17(numI,numF){
    min = Math.min(numI,numF);
    max  = Math.max(numI,numF);
    lista = [];
    excluidos = [111,555,999]
    for(let i = min; i<=max; i++){
        if(i%3 == 0 && i % 17 !==0 && !excluidos.includes(i)){
            lista.push(i);
        }

    }
    return lista
}
console.log(not17(0,10000))
*/
/*
function Bienal(anoInicial,anoFinal){
    min = Math.min(anoInicial,anoFinal);
    max = Math.max(anoInicial,anoFinal);
    anosBienal =[]
    for(let i = min; i<= max; i+=2){
        if(i!=2020){
            anosBienal.push(i)
        }
    }
    return anosBienal
   
}
let n1= 2000;
let n2= 2025
console.log(Bienal(n1,n2))
*/
/*
class Alunos{
    constructor(nome,matricula,idade,email){
        this.nome = nome;
        this.matricula= matricula;
        this.idade= idade;
        this.email = email;
    }
    Docente(){
        return console.log(`${this.matricula}: ${this.nome}`)
    }
}
console.log(Professores)
const professor1 = new Professores('Felipe Santos', '2345',17,'FSs@iesb.br');
professor1.Docente()*/