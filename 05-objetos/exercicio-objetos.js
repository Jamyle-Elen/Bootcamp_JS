/*
        1 - Crie uma classe para representar carros.
        Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
        Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKM;

    constructor(marca, cor, gastoMedioKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKM = gastoMedioKM;
    }

    calcularGastoViagem(distancia, precoCombustivel) {
        return distancia * this.gastoMedioKM * precoCombustivel;
    }
}

const accord = new Carro('Honda', 'Branco', 1/8);
console.log(accord.calcularGastoViagem(2090, 5,890))
const onix = new Carro('Chevrolet', 'Azul', 1/9);
console.log(onix.calcularGastoViagem(26, 5,890).toFixed(2));