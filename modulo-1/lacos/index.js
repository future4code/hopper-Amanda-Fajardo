
//Exercícios de interpretação de código

//1. O código está fazendo um loop de soma até o número 4. Somando o valor mais o incremento. 
// Mostrando no console o resultado 10 (0+1+2+3+4) 

//2.a) Será impresso no console todos os números que são maiores que 18. 
//[19, 21, 23, 25, 27, 30]

//b) Para acessar o índice, é necessário utilizar o "for". O "for...Of" indica apenas o elemento. 

//3. O resultado seria o número de linhas indicado pelo usuário (4) mais a repetição do bloco somando os asteriscos. 


//Exercícios de escrita de código

//1.

let petNumeros = Number(prompt("Quantos bichinhos de estimação você tem?"))
let petNomes = []

if (petNumeros === 0) {
    console.log("Que pena! Você pode adotar um pet!")

}
else {
    while (petNumeros > 0) {
        petNomes.push(prompt("Qual é o nome dos seus pets?"))
        petNumeros -= 1
    }
}

console.log(petNomes)


//2.
const arrayOriginal = [15, 12, 25, 45, 100, 1, 0, 500];


function imprimirElementos(array) {
    for (const elemento of array) {
        console.log(elemento);
    }
}

imprimirElementos(arrayOriginal);


function dividido10(array) {
    for (const numero of array) {
        console.log(numero / 10);
    }
}

dividido10(arrayOriginal);


let pares = [];
function selecionaPares(array) {
    for (const element of array) {
        if (element % 2 === 0) pares.push(element);
    }
    console.log(pares);
}
selecionaPares(arrayOriginal);

let strings = [];
function arrayStrings(array) {
    for (let index = 0; index < array.length; index++) {
        strings.push(`O elemento do índex ${index} é: ${array[index]}`);
    }
    console.log(strings);
}
arrayStrings(arrayOriginal);


let numeros = [];
let maiorNum = 0;
let menorNum = 0;
function mostrarMaiorMenor(array) {
    for (let num = 0; num < array.length; num++) {
        if (array[num] > maiorNum) {
            maiorNum = array[num];
        } else {
            menorNum = array[num];
        }
    }
    console.log(maiorNum, menorNum);
}

const resultado = mostrarMaiorMenor(arrayOriginal);
console.log(resultado);















