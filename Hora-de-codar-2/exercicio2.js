var Valor = parseInt(prompt("Informe um valor"));

if (Valor > 0) {
    document.write("O valor inserido é positivo.");
} else if (Valor < 0) {
    document.write("O valor inserido é negativo.");
} else {
    document.write("Ambos os valores são zero.");
}