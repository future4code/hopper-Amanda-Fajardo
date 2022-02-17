//RESPOSTAS DO EXERCÍCIO DE INTERPRETAÇÃO  
//('a. ', undefined)
// ('b. ', null)
// ('c. ', 11)
// ('d. ', 3)
// ('e. ', 11)
// ('f. ', 9)

//SUBI NUM ÔNIBUS EM MIRROCOS

//EXERCÍCIOS DE ESCRITA DE CÓDIGO 
//1
let nomeUsuario = prompt(`Qual é o seu nome?`)
let emailUsuario = prompt(`Qual é o seu email?`)

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}!`)

//2
let comidasPreferidas = ["Salada", "Salpicão", "Sushi", "Sobá", "Salmão" ]

console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas [0])
console.log(comidasPreferidas [1])
console.log(comidasPreferidas [2])
console.log(comidasPreferidas [3])
console.log(comidasPreferidas [4])

//3
let listaDeTarefas = []
let tarefa1 = prompt("Digite a primeira tarefa do dia:")
let tarefa2 = prompt("Digite a segunda tarefa do seu dia:")
let tarefa3 = prompt("Digite a terceira tarefa do seu dia:")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

let indiceUsuario = prompt("Digite o índice de uma tarefa que você já realizou 1, 2 ou 3: ")
listaDeTarefas.splice(indiceUsuario -1, 1)
console.log(listaDeTarefas)
