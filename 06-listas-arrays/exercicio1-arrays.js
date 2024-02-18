// 1) Crie um programa que dado um número imprima a sua tabuada.

const num = 9;
console.log(`Tabuada de ${num}`);

for (let i = 1; i <= 10; i++) {
    console.log(i,'x',`${num}`, '=' ,i*num);
}