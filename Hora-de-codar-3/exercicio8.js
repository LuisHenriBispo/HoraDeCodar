var numero = parseInt(prompt("Insira um número: "));
var inicio = 1;



if (numero <= 0) {
    document.write("Número invalido, só pode começar a imprimir a partir do número 1!");
}
else {
    do {
        document.write("Imprimindo... : " + inicio + "<br>");
        inicio++;
    } while ( inicio <= numero)

}