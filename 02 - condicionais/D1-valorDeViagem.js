// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas.:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const valorEtanol = 3.64;
const valorGasolina = 5.59;
const tipoCombustivel = "Premium";
const distanciaKM = 5;
const gastoMedioEtanol = ((distanciaKM%100)*valorEtanol);
const gastoMedioGasolina = ((distanciaKM%100)*valorGasolina);

// console.log(`O gasto para realizar essa viagem de ${distanciaKM}KM foi de R$ ${gastoMedioGasolina} ulitizando o combustivel ${tipoCombustivel}, por ser um carro flex, você gastaria apenas R$ ${gastoMedioEtanol} se optado por Etanol.`)
