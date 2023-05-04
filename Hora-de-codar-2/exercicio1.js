var primeiro_numero = parseInt(prompt("primeiro número"));
var segundo_numero = parseInt(prompt("Segundo número"));

if (primeiro_numero > segundo_numero) {
    document.write("O primeiro é o número maior.");
} else if (primeiro_numero < segundo_numero) {
    document.write("O segundo é o maior número.");
} else {
    document.write("Ambos os números são iguais.");
}