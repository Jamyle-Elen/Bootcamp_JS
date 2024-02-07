class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Minha idade é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const jamyle = new Pessoa();
jamyle.nome = 'Jamyle Elen C do Nascimento';
jamyle.idade = 18;

const rhuan = new Pessoa();
rhuan.nome = 'Rhuan Pablo M da Silva';
rhuan.idade = 18;

jamyle.descrever();
rhuan.descrever();