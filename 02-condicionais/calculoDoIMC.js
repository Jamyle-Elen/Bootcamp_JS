// Formula do IMC.:
// IMC = Peso / (altura + altura)

// Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.:

// IMC em adultos condição.:
// - Abaixo de 18.5, abaixo do peso;
// - Entre 18.5 e 25, peso normal;
// - Entre 25 e 50, acima do peso;
// - Entre 30 e 40, obeso;
// - Acima de 40, obesidade grave;

const peso = 54.6
const altura = 1.68;
const IMC = peso / (altura * altura);
const IMCFormat = IMC.toFixed(1)

if (IMCFormat < 18.5) {
    console.log('Abaixo do peso')
} else if (IMCFormat >= 18.5 && IMCFormat <= 25) {
    console.log('Peso normal')
} else if (IMCFormat >= 25 && IMCFormat <= 50) {
    console.log('Acima do peso')
} else if (IMCFormat >= 30 && IMCFormat <= 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade grave')
}

console.log(IMCFormat)