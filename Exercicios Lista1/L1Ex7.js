const prompt = require('prompt-sync')();

let valor = 0
let compra = parseInt(prompt("Quantas maças você deseja comprar? "))

if (compra < 12 && compra > 0) {
    valor = compra * 0.30
    console.log("O valor da sua compra é de: R$",valor.toFixed(2))
} else if (compra >= 12) {
    valor = compra * 0.25
    console.log("O valor da sua compra é de: ",valor.toFixed(2))

} else {
    console.log("compra de valor invalido")
}