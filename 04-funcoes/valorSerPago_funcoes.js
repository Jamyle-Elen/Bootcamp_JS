const valorRealProduto = 100;
const formaDePagamento = 4;


function aplicarDesconto(valor, desconto) {
  return(valor - (valor * (desconto / 100)));
}

function acrescimoJuros(valor, juros) {
  return(valor + (valor * (juros / 100)));
}

if (formaDePagamento === 1) {
  console.log("Selecionado.: À Vista Débito");
  console.log(aplicarDesconto(valorRealProduto, 10));
} else if (formaDePagamento === 2) {
  console.log("Selecionado.: À Vista Dinheiro ou PIX");
  console.log(aplicarDesconto(valorRealProduto, 15));
} else if (formaDePagamento === 3) {
  console.log("Selecionado.: Duas vezes");
  console.log(valorRealProduto);
} else if (formaDePagamento === 4) {
  console.log("Selecionado.: +2x");
  console.log(acrescimoJuros(valorRealProduto, 10));
} else {
  console.log("Forma de pagamento inválida!");
}
