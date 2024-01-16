
function calcularIMC(peso, altura) {
  return peso / Math.pow(altura * altura);
}

function classificarIMC() {
  if (IMCFormat < 18.5) {
    return "Abaixo do peso";
  } else if (IMCFormat >= 18.5 && IMCFormat <= 25) {
    return "Peso normal";
  } else if (IMCFormat >= 25 && IMCFormat <= 50) {
    return "Acima do peso";
  } else if (IMCFormat >= 30 && IMCFormat <= 40) {
    return "Obeso";
  } else {
    return "Obesidade grave";
  }
}

(function () { //função não invocada
  const peso = 54.6;
  const altura = 1.68;
  const IMC = calcularIMC(peso, altura);
  const IMCFormat = IMC.toFixed(1);

  console.log(IMCFormat);
  console.log(classificarIMC(imc));
})(); //função imediatamente invocada