var inicio = parseFloat(prompt("Insira o primeiro valor"));
var limite = parseFloat(prompt("Insira o segundo valor"));;
var media = 0;
var contador = 0;
var soma = 0;
do {
    soma = soma + inicio;
    inicio++;
    contador++;
} while ( inicio <= limite)
media = soma/contador

document.write("Média: " + media)