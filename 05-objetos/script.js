const jamyle = {
    nome: "Jamyle Elen C do Nascimento",
    idade: 18,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const atributo = 'nome';

console.log(jamyle[atributo]);