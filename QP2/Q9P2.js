class Professores {
    constructor(nomeCompleto, matricula, idade, email) {
      this.nomeCompleto = nomeCompleto;
      this.matricula = matricula;
      this.idade = idade;
      this.email = email;
    }
  
    apresentar() {
      console.log(`Olá! Meu nome é ${this.nomeCompleto}, tenho ${this.idade} anos, matrícula ${this.matricula}, e meu e-mail é ${this.email}.`);
    }
  
    Docente() {
      console.log(`${this.nomeCompleto} é um(a) docente com matrícula ${this.matricula}.`);
    }
  }
  

  let prof1 = new Professores("Ana Maria da Silva", "MAT2025", 42, "ana.maria@escola.edu.br");
  

  prof1.apresentar();
  prof1.Docente();
  

  let chaves = Object.keys(prof1);
  console.log("Chaves do objeto:", chaves);