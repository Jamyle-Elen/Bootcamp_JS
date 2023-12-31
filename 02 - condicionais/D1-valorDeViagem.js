// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas.:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const valorGasolina = 5.59;
const distanciaKM = 100;
const kmPorLitros = 15;

const gastoMedioEtanol = distanciaKM / kmPorLitros;
const valorGasto = gastoMedioEtanol * valorGasolina;
console.log(valorGasto.toFixed(2))

