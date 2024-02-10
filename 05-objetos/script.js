class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Minha idade é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha que ${p2.nome}.`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} são da mesma idade.`);
    }
}

const jamyle = new Pessoa('Jamyle Elen', 18);
const rhuan = new Pessoa('Rhuan Pablo', 18);

compararPessoas(jamyle, rhuan);