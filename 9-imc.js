function calculoIMC(peso, altura) {
  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    return `Seu IMC está ${imc.toFixed(1)}, está abaixo do peso`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Acima do peso (Sobrepeso)";
  } else if (imc >= 30 && imc <= 34.9) {
    return "Obesidade I";
  } else if (imc >= 35 && imc <= 39.9) {
    return "Obesidade II";
  } else {
    return "Obesidade III";
  }
}

console.log(calculoIMC(50, 1.62));
