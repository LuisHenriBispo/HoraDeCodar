var numero_1 = parseFloat(prompt("Insira o primeiro valor"));
var numero_2 = parseFloat(prompt("Insira o segundo valor"));
var opcao = (prompt("Informe seu a operação desejada (digite: 1.adição, 2.Subtração, 3.Divisão, 4.Multiplicação)"));
var resultado = 0;

if (opcao == "1") {
    resultado = numero_1 + numero_2;
    document.write("Resultado da soma: " + resultado);
}
else if (opcao == "2") {
    resultado = numero_1 - numero_2;
    document.write("Resultado da subtração: " + resultado);
}
else if (opcao == "3") {
    resultado = numero_1 / numero_2;
    document.write("Resultado da divisão: " + resultado);
}
else if (opcao == "4") {
    resultado = numero_1 * numero_2;
    document.write("Resultado da multiplicação: " + resultado);
}  