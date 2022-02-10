//  EXERCÍCIOS DE INTERPRETAÇÃO

// 1.
// console.log("a. ", false)
// console.log("b. ", false)
// console.log("c ", true)
// console.log("d ", booleano)


// 2. O console não vai somar os valores porque não foi feita a conversão do tipo "String" para o tipo Number.


// 3.
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)


//EXERCÍCIO ESCRITA DE CÓDIGO 

let idadeUsuario = Number (prompt ("Qual é a sua idade?"))
let idadeAmigo = Number (prompt("Qual é a idade do seu melhor amigo(a)?"))
let diferencaidade = idadeUsuario - idadeAmigo

console.log ( "Sua idade é maior do que a do seu melhor amigo?" , idadeUsuario > idadeAmigo)
console.log ("A diferença de idade entre vocês é de: ",diferencaidade  ,"anos")


2.
let num1 = Number(prompt("Por favor, insira um número par"))
console.log(num1 % 2)
// O resto da divisão é igual a zero quando o número é par e, igual a 1 quando é ímpar.  


3
let anoNasc = Number(prompt("Em qual ano você nasceu?"))
let idadeAtual = anoNasc - 2022
let idadeMeses = idadeAtual * 12
let idadeDias = idadeAtual * 365
let idadeHoras = idadeAtual * (365 * 24)

console.log("a. Sua idade em meses é aproximadamente:  ", idadeMeses)

console.log("b. A sua idade em dias é aproximadamente:", idadeDias)

console.log("c. A sua idade em horas é aproximadamente: ", idadeHoras)


4
let numero1 = Number(prompt("Por favor, insira o primeiro número"))
let numero2 = Number(prompt("Por favor, insira o segundo número"))

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo? " ,numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0)



