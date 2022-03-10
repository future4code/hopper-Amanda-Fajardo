//Exercícios de interpretação de código

//1. a) Será impresso as informações dos objetos do array principal, indicando o valor do elemento, o do índice e, do array principal separadamente.  

//2. a) Será impresso um novo array apenas com o valor correspondente ao elemento (item) que nesse código, mostra os nomes do array "usuarios".

//3. a) Será impresso um novo array sem os valores do segundo item que corresponde ao apelido: "Chijo"

//Exercícios de escrita de código

//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
//a)
const nomesDoguinhos = pets.map((item) => {
    return item.nome
})
console.log(nomesDoguinhos)

//b)
const racaSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})
console.log(racaSalsicha)

//c)
const pegarPoodles = pets.filter((item) => {
    return item.raca === "Poodle"

})
const nomePoodles = pegarPoodles.map((item) => {
    console.log(`Você ganhou um cumpom de desconto de 10% para tosar o/a ${item.nome}`)

})



//2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)

const nomeProdutos = produtos.map((item) => {

    return item.nome

})

//b)

const produtosDesconto = produtos.map((item) => {

    return {

        nome: item.nome,
        precosDesc: ((item.preco / 100) * 95).toFixed(2),

    }

})
console.log(produtosDesconto)

//c)

const apenasBebidas = produtos.filter((item) => {

    return item.categoria === "Bebidas"

})
console.log(apenasBebidas)

//d)

const palavraYpe = produtos.filter((item) => {

    return item.nome.includes("Ypê")
})
console.log(palavraYpe)

//e)

palavraYpe.map((item) =>
    console.log(`Compre ${item.nome} por ${item.preco}`)
)

