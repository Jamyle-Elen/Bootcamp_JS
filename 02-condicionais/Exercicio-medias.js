// Faça um algoritmo que dado três notas tiradas por um aluno em um semestre da faculdade cal]cule e imprima sua média e sua classificação conforme a tabela abaixo.:

// Média = (n1 + n2 + n3) / 3

// Classificação.;
// Menor que 5, reprovado;
// Média entre 5 e 7, recuperação;
// Maior que 7, passou de semestre;

const n1 = 5;
const n2 = 5;
const n3 = 5;
const mediaNotas = (n1 + n2 + n3) / 3;

if (mediaNotas <= 5) {
  console.log(`reprovado`);
} else if (mediaNotas > 5 && mediaNotas <= 7) {
  console.log(`recuperação`);
} else {
  console.log(`passou de semenstre`);
}
