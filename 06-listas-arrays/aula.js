// push adiciona novo valor
// pop retira o ultimo valor e chama ela para ser utilizado
// shift ao contrario do pop (ele pega o primeiro)

const notas = [];

notas.push(4);
notas.push(7);
notas.push(9);
notas.push(5);
notas.push(10);

const valorTotal = notas[0] + notas[1] + notas[2] + notas[3] + notas [4];

console.log(notas.length);

const media = valorTotal/notas.length;
console.log(media)