/*
    Formula do IMC.:
    IMC = Peso / (altura + altura)

    Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.:

    IMC em adultos condição.:
    - Abaixo de 18.5, abaixo do peso;
    - Entre 18.5 e 25, peso normal;
    - Entre 25 e 50, acima do peso;
    - Entre 30 e 40, obeso;
    - Acima de 40, obesidade grave;
*/

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