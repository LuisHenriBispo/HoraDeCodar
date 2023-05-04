var inicio = 15;
var limite = 100;
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