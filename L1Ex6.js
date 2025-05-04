const prompt = require('prompt-sync')();
let a = Number(prompt("Informe o lado A do Triangulo: "))
let b = Number(prompt("Informe o lado B do Triangulo: "))
let c = Number(prompt("Informe o lado C do Triangulo: "))

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("Triangulo equilatero")
    } else if (a != b && b != c) {
        console.log("Triangulo escaleno")
    } else {
        console.log("Triangulo isosceles")
    }
} else {
    console.log("Não é um triangulo")
}