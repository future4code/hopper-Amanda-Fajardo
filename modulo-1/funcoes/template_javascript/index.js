//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 

// 1.
//a) O que vai ser impresso no console ?
//     Será impresso o resultado das duas multiplicações.
// 5 * 2 = 10
// 5 * 10 = 50

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//Não aparece nada no console, porque para aparecer, teria que ter o comando console.log() indicando a mensagem ser impressa.

//2.
//a) Explique o que essa função faz e qual é sua utilidade
//    A função vai transformar todas as letras do texto em minúsculas e procurar a palavra "cenoura" retornando true ou false.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i. true
//ii. true
//iii. true

//EXERCÍCIOS DE ESCRITA DE CÓDIGO 
//1.
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

let mensagemFuncao = function () {

    console.log("Eu sou Amanda, tenho 28 anos, moro em São Paulo e sou estudante.")
}
mensagemFuncao()


//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

let nomeUsuario = "Amanda"
let idadeUsuario = 28
let cidadeUsuario = "Belo Horizonte"
let profissaoUsuario = "Atriz"

let funcaoRecebeInf = function (nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`

}

funcaoRecebeInf(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario)

//2. 
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

let funcaoSoma = function (num1, num2) {

    let resultadoSoma = num1 + num2

    return resultadoSoma

}
console.log(funcaoSoma(5, 3))

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

let funcaoBooleano = function (primeiroNum, segundoNum) {

    let maiorOuIgual = primeiroNum >= segundoNum

    return maiorOuIgual
}

funcaoBooleano(5, 2)

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

let funcaobooleanoPar = function (umNum) {
    let parOunao = umNum % 2 === 0
    return parOunao
}

funcaobooleanoPar(2)

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

let recebeMensagem = function (mensagem) {

    return `A mensagem ${mensagem.toUpperCase()} tem ${mensagem.length} caracteres`
}

console.log(recebeMensagem("say my name"))

//3 

let numeroUsuario = Number(prompt("Digite um número:"))
let outronumUsuario = Number(prompt("Digite outro número:"))

let FuncSoma = function (numeroUsuario, outronumUsuario) {

    let resultados = numeroUsuario + outronumUsuario
    return resultados
}
console.log(FuncSoma(numeroUsuario, outronumUsuario))

let FuncSubtracao = function (numeroUsuario, outronumUsuario) {

    let resultados = numeroUsuario - outronumUsuario
    return resultados
}

console.log(FuncSubtracao(numeroUsuario, outronumUsuario))

let FuncMultiplicacao = function (numeroUsuario, outronumUsuario) {

    let resultados = numeroUsuario * outronumUsuario
    return resultados
}

console.log(FuncMultiplicacao(numeroUsuario, outronumUsuario))

let FuncDivisao = function (numeroUsuario, outronumUsuario) {

    let resultados = numeroUsuario / outronumUsuario
    return resultados
}

console.log(FuncDivisao(numeroUsuario, outronumUsuario))