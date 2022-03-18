// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((num1, num2) => num1 - num2)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = array.filter(item => item % 2 === 0);
    return novoArray

}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let novoArrayPares = array.filter(numero => numero % 2 === 0);

    let novoArrayElevados = novoArrayPares.map(numero => numero ** 2);

    return novoArrayElevados

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maiorNum = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] > maiorNum) {
            maiorNum = array[index];
        }


    }


    return maiorNum

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let retornaObjeto = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: true,
        diferenca: 0,
    }
    if (num1 > num2) {
        retornaObjeto.maiorNumero = num1
        retornaObjeto.maiorDivisivelPorMenor = (num1 % num2 === 0)
        retornaObjeto.diferenca = num1 - num2
    } else {
        retornaObjeto.maiorNumero = num2
        retornaObjeto.maiorDivisivelPorMenor = (num2 % num1 === 0)
        retornaObjeto.diferenca = num2 - num1


    }
    return retornaObjeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
numeroPar = []




}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {



}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}