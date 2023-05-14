function calculoIMC(peso, altura) {
  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    return `Seu IMC está ${imc.toFixed(1)}, você está abaixo do peso.`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    return `Seu IMC está ${imc.toFixed(1)}, você está com o peso normal.`;
  } else if (imc >= 25 && imc <= 29.9) {
    return `Seu IMC está ${imc.toFixed(
      1
    )}, você está acima do peso(sobrepeso).`;
  } else if (imc >= 30 && imc <= 34.9) {
    return `Seu IMC está ${imc.toFixed(1)}, você está com Obesidade I.`;
  } else if (imc >= 35 && imc <= 39.9) {
    return `Seu IMC está ${imc.toFixed(1)}, você está com Obesidade II.`;
  } else {
    return `Seu IMC está ${imc.toFixed(1)}, você está com Obesidade III.`;
  }
}

console.log(calculoIMC(90, 1.62));
