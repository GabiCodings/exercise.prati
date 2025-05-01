const prompt = require('prompt-sync')();

let peso = Number(prompt("Qual o seu Peso em KG? "))
let altura = parseFloat(prompt("Qual é sua altura (Em Metros)? "))

let IMC = peso / altura**2;

if (IMC < 18.5) {
    console.log("Baixo Peso")
} else if (IMC >= 18.5 && IMC <= 24.99) {
    console.log("Peso Normal")
} else if (IMC >= 25 && IMC <= 29.99) {
    console.log("Sobrepeso")
} else if (IMC >= 30) {
    console.log("Obesidade")
} else {
    console.log("Informações Invalidas.")
}
