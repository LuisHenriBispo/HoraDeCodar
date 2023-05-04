var x1 = parseInt(prompt("primeiro número"));
var x2 = parseInt(prompt("Segundo número"));
var x3 = parseInt(prompt("terceiro número"));
var x4 = parseInt(prompt("quarto número"));
var maior = 0;

document.write("Primeiro valor: " + x1);

if (x1 > x2 && x1 > x3 && x1 > x4){
    document.write("maior: " + x1);
}
else if (x2 > x3 && x2 > x1 && x2 > x4){
    document.write("Maior: " + x2);
}
else if (x3 > x1 && x3 > x2 && x3 > x4){
    document.write("Maior: " + x3);
}
else if (x4 > x1 && x4 > x2 && x4 > x3){
    document.write("Maior: " + x4);
}
document.write("Ultimo valor: " + x4);