
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}
// Quando uma função ta dentro de um objeto o escopo dessa função é o this.
const jamyle = new Pessoa('Jamyle, 18');

jamyle.falar();


// class Pessoa {
//     constructor(nome, idade) {
//         this.nome =  nome;
//         this.idade = idade;
//     }
//     falar() {
//         console.log(`Meu nome é: ${this.nome}`);
//     }
// }