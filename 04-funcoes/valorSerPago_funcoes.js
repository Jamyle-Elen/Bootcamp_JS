const valorRealProduto = 100;
const formaDePagamento = 4;


function aplicarDesconto(valor, desconto) {
  if (formaDePagamento === 1) {
    console.log("Selecionado.: À Vista Débito");
    console.log(valorRealProduto - valorRealProduto * 0.1);
  } else if (formaDePagamento === 2) {
    console.log("Selecionado.: À Vista Dinheiro ou PIX");
    console.log(valorRealProduto - valorRealProduto * 0.15);
  } else if (formaDePagamento === 3) {
    console.log("Selecionado.: Duas vezes");
    console.log(valorRealProduto);
  } else if (formaDePagamento === 4) {
    console.log("Selecionado.: +2x");
    console.log(valorRealProduto + valorRealProduto * 0.1);
  } else {
    console.log("Forma de pagamento inválida!");
  }
}
