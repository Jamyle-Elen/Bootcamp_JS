// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [];

numeros.push(2);
numeros.push(5);
numeros.push(19);
numeros.push(45);
numeros.push(17);
numeros.push(72);
numeros.push(22);
numeros.push(92);

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero,'is even');
    } else {
        console.log(numero,'is odd');
    }
    
}