// Vitor Bruno Andrade De Barros /25114290128
let estudade1 = {
    matricula :254290130,
    nome:"Igor Bruno Andrade De Barros",
    DN:"25/02/2007",
    UF: "DF"
}
console.log(estudade1)
console.log('-'.repeat(95));
console.log(estudade1.matricula);
console.log('-'.repeat(95));
console.log(estudade1.nome);
console.log('-'.repeat(95));
console.log(estudade1.DN);
console.log('-'.repeat(95));
console.log(estudade1.UF);
console.log('-'.repeat(95));
console.log(Object.keys(estudade1));
console.log('-'.repeat(95));
console.log(Object.values(estudade1));
console.log('-'.repeat(95));
console.log(Object.entries(estudade1));
console.log('-'.repeat(95));

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata"
  };
  
  const livro = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328,
    idioma: "Português"
  };
  
  const filme = {
    nome: "Interestelar",
    diretor: "Christopher Nolan",
    duracao: 169,
    genero: "Ficção"
  };
  
  const computador = {
    cpu: "Intel i7",
    ram: "16GB",
    armazenamento: "512GB SSD",
    sistema: "Windows"
  };
  
  const animal = {
    especie: "Cachorro",
    raca: "Labrador",
    idade: 5,
    nome: "Thor"
  };
  

  console.log("Carro:");
  for (const chave in carro) {
    console.log(`${chave} : ${carro[chave]}`);
  }
  console.log('-'.repeat(20));
  
 
  console.log("Livro:");
  for (const chave in livro) {
    console.log(`${chave} : ${livro[chave]}`);
  }
  console.log('-'.repeat(20));
  

  console.log("Filme:");
  for (const chave in filme) {
    console.log(`${chave} : ${filme[chave]}`);
  }
  console.log('-'.repeat(20));
  

  console.log("Computador:");
  for (const chave in computador) {
    console.log(`${chave} : ${computador[chave]}`);
  }
  console.log('-'.repeat(20));
  
 
  console.log("Animal:");
  for (const chave in animal) {
    console.log(`${chave} : ${animal[chave]}`);
  }
  console.log('-'.repeat(95));

  let estudade2 = {
    matricula :254290128,
    nome:"Vitor Bruno Andrade De Barros",
    DN:"01/06/2005",
    UF: "DF"
}
console.log(estudade2)
console.log('-'.repeat(90));
console.log(estudade2.matricula);
console.log('-'.repeat(90));
console.log(estudade2.nome);
console.log('-'.repeat(90));
console.log(estudade2.DN);
console.log('-'.repeat(90));
console.log(estudade2.UF);
console.log('-'.repeat(90));
console.log(Object.keys(estudade2));
console.log('-'.repeat(90));
console.log(Object.values(estudade2));
console.log('-'.repeat(90));
console.log(Object.entries(estudade2));
console.log('-'.repeat(90));