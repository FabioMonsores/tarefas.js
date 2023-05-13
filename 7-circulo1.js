function circulo(raio) {
  let perimetro = 2 * Math.PI * raio; //Perímetro: C = 2 * π * r

  let area = Math.PI * (raio * raio); //Área: A = π r²

  return `O Perímetro do círculo é igual à ${perimetro} e a Área do círculo é igual à ${area}`;
}

let raioCirculo = circulo(4);
console.log(raioCirculo);
