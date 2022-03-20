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

    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i += 2) {
        numerosPares.push(i);

    }
    return numerosPares
}





// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"

    }
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"

    }
    else {
        return "Escaleno"
    }


}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    array.sort((a, b) => a - b)

    let arrayMaiorEMenor = [];

    arrayMaiorEMenor.push(array[array.length - 2])
    arrayMaiorEMenor.push(array[1])

    return arrayMaiorEMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {


    const frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

    return frase

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    const novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO",
    }
    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let pessoasAutorizadas = pessoas.filter((pessoa) => pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60)

    return pessoasAutorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    let pessoasNaoAutorizadas = pessoas.filter((pessoaNao) => pessoaNao.altura < 1.5 || pessoaNao.idade <= 14 || pessoaNao.idade > 60)

    return pessoasNaoAutorizadas

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