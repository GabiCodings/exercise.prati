const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Digite o primeiro número: "));
let b = parseFloat(prompt("Digite o segundo número: "));

if (a === b) {
    console.log("Os valores não podem ser iguais.");
} else if (a < b) {
    console.log("Ordem crescente:", a, b);
} else {
    console.log("Ordem crescente:", b, a);
}
