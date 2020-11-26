// Crie uma função que dado o objeto a seguir:
// var endereco = {
//  rua: "Rua dos pinheiros",
//  numero: 1293,
//  bairro: "Centro",
//  cidade: "São Paulo",
//  uf: "SP"
// };
// Retorne o seguinte conteúdo:
// O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
// nº 1293.


var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

const { rua, numero, bairro, cidade, uf } = endereco;
console.log(
  `O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua "${rua}" com nº ${numero}.`
);
