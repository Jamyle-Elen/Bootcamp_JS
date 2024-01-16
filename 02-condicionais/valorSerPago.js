/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os codigos de tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

    Código Condição de pagamento.:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valorRealProduto = 20;
const formaDePagamento = 2;
const quantidadeParcelas = 4;
const descontoDebito = valorRealProduto * 0.1; // Forma de pagamento 1
const descontoDinheiroPIX = valorRealProduto * 0.15; // Forma de pagamento 2
const acimaDuasVezes = valorRealProduto * 0.1 * quantidadeParcelas; // Forma de pagamento 4

if (formaDePagamento === 1) {
  console.log("Selecionado.: À Vista Débito");
  console.log(valorRealProduto - descontoDebito);
} else if (formaDePagamento === 2) {
  console.log("Selecionado.: À Vista Dinheiro ou PIX");
  console.log(valorRealProduto - descontoDinheiroPIX);
} else if (formaDePagamento === 3) {
  console.log("Selecionado.: Duas vezes");
  console.log(valorRealProduto);
} else if (formaDePagamento === 4) {
  console.log("Selecionado.: +2x");
  console.log(valorRealProduto + acimaDuasVezes);
} else {
  console.log("Forma de pagamento inválida!");
}
