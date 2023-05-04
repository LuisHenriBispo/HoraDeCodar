var valor_1 = parseInt(prompt("Insira o primeiro valor"));
var valor_2 = parseInt(prompt("Insira o segundo valor"));
var valor_3 = parseInt(prompt("Insira o terceiro valor"));

if (valor_1 > valor_2 && valor_1 > valor_3) {
    document.write("O primeiro valor inserido, é o maior.");
} else if (valor_2 > valor_1 && valor_2 > valor_3) {
    document.write("O segundo valor inserido, é o maior.");
} else {
    document.write("O terceiro valor inserido, é o maior.");
}
    