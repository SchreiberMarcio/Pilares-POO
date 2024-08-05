/**
 * Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional.
 
 */

abstract class Ingresso {
  constructor(protected valor: number) {}

  abstract imprimeValor(): void;
}

class Normal extends Ingresso {
  imprimeValor(): void {
    console.log(`Valor do ingresso normal: R$${this.valor.toFixed(2)}`);
  }
}

class VIP extends Ingresso {
  private valorAdicional: number;

  constructor(valor: number, valorAdicional: number) {
    super(valor);
    this.valorAdicional = valorAdicional;
  }

  imprimeValor(): void {
    const valorTotal = this.valor + this.valorAdicional;
    console.log(`Valor do ingresso VIP: R$${valorTotal.toFixed(2)}`);
  }
}

class Camarote extends Ingresso {
  private valorAdicional: number;

  constructor(valor: number, valorAdicional: number) {
    super(valor);
    this.valorAdicional = valorAdicional;
  }

  imprimeValor(): void {
    const valorTotal = this.valor + this.valorAdicional;
    console.log(`Valor do ingresso de camarote: R$${valorTotal.toFixed(2)}`);
  }
}

const normal = new Normal(50);
const vip = new VIP(50, 20);
const camarote = new Camarote(50, 30);

normal.imprimeValor();
vip.imprimeValor();
camarote.imprimeValor();
