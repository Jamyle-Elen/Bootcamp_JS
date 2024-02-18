/*
        2) Crie uma classe para representar pessoas.
        Para cada pessoa teremos os atributos nome, peso e altura.
        As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC =  peso / (altura *));
        Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    classificarIMC() {
        const imc = this.calcularIMC().toFixed(2);
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 35) {
            return 'Obeso';
        } else {
            return 'Obesidade grave';
        }
    }
}

const jose = new Pessoa('José', 79, 1.75);
console.log(jose.classificarIMC());
const rhuan = new Pessoa('Rhuan', 65, 1.80);
console.log(rhuan.classificarIMC());
const jamyle = new Pessoa('Jamyle', 54, 1.68);
console.log(jamyle.classificarIMC());