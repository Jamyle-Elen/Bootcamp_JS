// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas.:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const valorGasolina = 6.66;
const valorEtanol = 5.79;
const distanciaKM = 100;
const kmPorLitros = 10;
const tipoCombustivel = `Etanol`;
const gastoMedio = distanciaKM / kmPorLitros;

if (tipoCombustivel === `Etanol`) {
  const valorGasto = gastoMedio * valorGasolina;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = gastoMedio * valorEtanol;
  console.log(valorGasto.toFixed(2));
}
