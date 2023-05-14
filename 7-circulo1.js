function circulo(raio) {
  let perimetro = 2 * Math.PI * raio; //Perímetro: C = 2 * π * r

  let area = Math.PI * Math.pow(raio, 2); //Área: A = π r²

  return `O Perímetro do círculo é igual à ${perimetro.toFixed(
    2
  )} e a Área do círculo é igual à ${area.toFixed(2)}`;
}

let raioCirculo = circulo(4);
console.log(raioCirculo);
