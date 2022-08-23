//a)
// const minhaString : string = 9
// R: O erro mostra que Type 'number' não pode ser atribuído ao Type 'string'

//b)
const meuNumero: number | string = 29;

//c)
type user = {
  nome: string;
  idade: number;
  corFavorita: colors;
};

//d)
type newUser = {
  nome: string;
  idade: number;
  corFavorita: colors;
};

enum colors {
  Red = "Vermelho",
  Orange = "Laranja",
  Yellow = "Amarelo",
  Green = "Verde",
  Blue = "Azul",
  indigo = "Anil",
  violet = "Violeta",
}

const userOne: newUser = {
  nome: "Amanda",
  idade: 28,
  corFavorita: colors.Blue,
};

const userTwo: newUser = {
  nome: "Maria",
  idade: 54,
  corFavorita: colors.Green,
};

const userThree: newUser = {
  nome: "Wander",
  idade: 64,
  corFavorita: colors.Orange,
};

console.log(userOne);
console.log(userTwo);
console.log(userThree);
