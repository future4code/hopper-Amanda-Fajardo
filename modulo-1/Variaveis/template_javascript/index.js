// Resposta da interpretação 1. (10 , 5)
//Sendo a variável let podendo ser alterada.

// Resposta da interpretação 2. (10 , 10 , 10)

/* Resposta da interpretação 3.
   let horasTrabalhadas = prompt ("Quatas horas você trabalha por dia?")
   let valorDoDia = prompt ("Quanto você recebe por dia?")
   alert ('Você recebe 4 {valorDoDia / horasTrabalhadas} por hora')
   */


//Exercício 1
let nomeAluna
let idadeAluna
console.log(typeof nomeAluna, typeof idadeAluna)
// Imprimiu o tipo "undefined" "undefined" já que não foi atribuido nenhum valor as variaves. 

nomeAluna = prompt("Qual seu nome?")
idadeAluna = prompt("Qual sua idade?")

console.log(typeof nomeAluna, typeof idadeAluna)
// Imprimiu o tipo "String" porque foi atribuido valores às variaveis.

console.log("Olá,", nomeAluna, "você tem", idadeAluna, "anos")

//Exercício 2
let cafeDaManha
let almoco
let jantar

cafeDaManha = prompt("Já tomou café da manhã hoje?")
almoco = prompt("Já almoçou hoje?")
jantar = prompt("Já jantou?")

cafeDaManha1 = cafeDaManha
almoco1 = almoco
jantar1 = jantar

console.log("Já tomou café da manhã hoje?", cafeDaManha1)
console.log("Já almoçou hoje?", almoco1)
console.log("Já jantou?", jantar1)


//Exercício 3

let a = 10
let b = 50
c = a
a = b
b = c
console.log(a, b)
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


//DESAFIO 

let num1
let num2
let somado
let multiplicado

num1 = Number(prompt("Digite o primeiro número"))
num2 = Number(prompt("Digite o segundo número"))

somado = num1 + num2
multiplicado = num1 * num2

console.log("O primeiro número somado ao segundo número resulta em:", somado)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicado)




