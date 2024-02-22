
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Meu nome é: ${this.nome}`);
};

// Pode ser passado contexto

const jamyle = {
  genero: "feminino",
};

Pessoa.call(jamyle, "Jamyle", 19);

console.log(jamyle);

// Quando invoca atraves do operador new ele atribui o proprio prototype da função construtora