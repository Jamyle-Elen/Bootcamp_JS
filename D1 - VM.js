// Faça um programa que calcule a velocidade média e o gasto de gasolina utilizado pelo carro X.

let car = "Golzin Quadrado";

const city = 11;
const road = 17.1;
const km = 74;
const gasoline = 5.52;
const gastoMedioCITY = ((gasoline*km)/city).toFixed(2);
const gastoMedioROAD = ((gasoline*km)/road).toFixed(2);


console.log(`O ${car} percorreu ${km}KM/h e gastou RS${gastoMedioCITY} com a viagem na cidade, se tivesse na estrada teria gasto apenas R$${gastoMedioROAD}.`);