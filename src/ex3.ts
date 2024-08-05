// Superclasse Animal
class Animal {
  protected nome: string;
  protected idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  comer(): void {
    console.log(`${this.nome} está comendo.`);
  }

  dormir(): void {
    console.log(`${this.nome} está dormindo.`);
  }

  mostrarIdade(): void {
    console.log(`${this.nome} tem ${this.idade} anos.`);
  }
}

class Cachorro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  latir(): void {
    console.log(`${this.nome} está latindo.`);
  }
}

class Cavalo extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  galopar(): void {
    console.log(`${this.nome} está galopando.`);
  }
}

class Gato extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  miar(): void {
    console.log(`${this.nome} está miando.`);
  }
}

const cachorro = new Cachorro("Totó", 3);
const cavalo = new Cavalo("Alazão", 5);
const gato = new Gato("Costelinha", 2);

cachorro.comer();
cachorro.dormir();
cachorro.latir();
cachorro.mostrarIdade();

cavalo.comer();
cavalo.dormir();
cavalo.galopar();
cavalo.mostrarIdade();

gato.comer();
gato.dormir();
gato.miar();
gato.mostrarIdade();
