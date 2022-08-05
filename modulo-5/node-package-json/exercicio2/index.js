const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

let resultado = "Resultado: "

switch (operacao) {
  case "soma":
    resultado = num1 + num2
    break
  case "subtracao":
    resultado = num1 - num2
    break
  case "multiplicacao":
    resultado = num1 * num2
    break
  case "divisao":
    resultado = (num1 / num2).toFixed(1)
    break
  default:
    resultado = "erro"
}

console.log(resultado)