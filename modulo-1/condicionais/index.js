//Exercícios de interpretação de código

//1. 

//a) O teste está verificando se o número é par ou ímpar. Caso seja par, aparecerá no console que passou no teste. 

//b) Apenas os números pares será impresso como "passou no teste"

//c) Os números ímpares como "Não passou no teste"

//2.

//a) O código serve para indicar o preço das frutas. Cada uma com o seu respectivo preço. Caso o usuário escolha uma fruta que não está no código, aparecerá o valor de $5,00 reais.

//b) "O preço da fruta Maçã é 2.25"

//c) O código passa direto para o default e imprimi o preço padrão de $5,00 reais porque sem a palavra reservada "break" ele executa todos os casos até encontar um break ou chegar no caso default. 

//3.

//a) A primeira linha está pedindo ao usuário que digite um número e transformando esse número de "string" para Number guardando na variável numero.

//b) Caso o usuário digite 10, será impresso: "Esse número passou no teste". Caso digite -10, dará erro indicando que nenhuma instância foi definida à essa condição.

//c) O erro aparece porque não foi criada uma condição dentro do escopo filho para a váriavel "mensagem". Sendo Assim, o escopo Pai não consegue acessa-lá.   

//Exercícios de escrita de código-----------------------------------------------------

//1.

const idadeUsuario = Number(prompt("Qual é a sua idade?"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
}

else {
    console.log("Você não pode dirigir")
}

// //2.

const turnoAluno = prompt("Em qual turno voê estuda? Por favor, digite M para Matutino, V para vespertino ou N para Noturno.")

if (turnoAluno === "M") {
    console.log("Bom Dia!")
}
else if (turnoAluno === "V") {
    console.log("Boa Tarde!")
}
else if (turnoAluno === "N") {
    console.log("Boa Noite!")

}
else {
    console.log("Desculpe, não consegui entender o que você digitou. Verifique se digitou a letra certa e maiúscula.")

}

// //3.

const turnoAlunoSwiC = prompt("Em qual turno voê estuda? Por favor, digite M para Matutino, V para vespertino ou N para Noturno.")

switch (turnoAlunoSwiC) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Desculpe, não consegui entender o que você digitou. Verifique se digitou a letra certa e maiúscula.")

}

//4.

const generoDoFilme = prompt("Qual o gênero de filme você quer assistir?")
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoDoFilme.toLowerCase() === "fantasia" && precoIngresso < 15) {
    console.log("Bom Filme!")
}
else {
    console.log("Escolha outro filme :(")
}
