
const entradas = [89, 34, 62, 12, 7, 56, 43, 21, 5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};