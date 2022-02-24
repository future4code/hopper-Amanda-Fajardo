//Exercícios de interpretação de código

//1.
// a) O que vai ser impresso no console?
// Matheus Nachtergaele
// Virginia Cavendish
// canal: Globo, horario: 14h

// 2.
// a) O que vai ser impresso no console ?
// nome : 'Juca', idade: 3, raca: 'SRD'
// nome: 'Juba', idade: 3, raca: 'SRD'
// nome: 'Jubo', idade: 3, raca: 'SRD'

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Sintaxe espalhamento ou spread, realiza uma cópia de um objeto (ou array), 
//permitindo manipulações, como: mudar ou adicionar propriedades.

//3.
//a) O que vai ser impresso no console?
//false 
//undefined 

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Foi impresso undefined porque não tinha uma variável "altura" declarada.

//Exercícios de escrita de código

//1.

const propriedades = {
    nome: "Amanda",
    apelidos: ["Mandinha", "Pandinha", "Amenda"]
}

function minhaFuncao(objeto) {

    return objeto

}
const frase = `Eu sou ${propriedades.nome}, mas pode me chamar de: ${propriedades.apelidos[0]}, ${propriedades.apelidos[1]} ou ${propriedades.apelidos[2]}`

console.log(minhaFuncao(frase))


const novasPropriedades = {
    ...propriedades,
    apelidos: ["Ahava", "Dinha", "Viana"]
}

console.log(minhaFuncao(novasPropriedades))

//2.

const objetoUm = {
    nome: "Maria",
    idade: 54,
    profissão: "Cozinheira"

}
const objetoDois = {
    nome: "Wander",
    idade: 64,
    profissão: "Aposentado"
}


function recebeObjetoUm(parametrosObjetos) {

    return [parametrosObjetos.nome, parametrosObjetos.nome.length, parametrosObjetos.idade, parametrosObjetos.profissão, parametrosObjetos.profissão.length]

}

console.log(recebeObjetoUm(objetoUm))
console.log(recebeObjetoUm(objetoDois))

//3.

let carrinho = []

let frutasUm = {
    nome: "Maçã",
    disponibilidade: true

}

let frutasDois = {
    nome: "Banana",
    disponibilidade: true

}

let frutasTres = {
    nome: "Laranja",
    disponibilidade: true

}

function recebeFrutas(objetoFruta) {

    carrinho.push(objetoFruta)
    return [frutasUm, frutasDois, frutasTres]

}
recebeFrutas(frutasUm, frutasDois, frutasTres)
console.log(recebeFrutas(carrinho))