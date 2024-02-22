
const pessoa = {
  genero: "feminino",
};

const jamyle = Object.create(pessoa);

jamyle.nome = "Jamyle";

console.log(jamyle.genero);
