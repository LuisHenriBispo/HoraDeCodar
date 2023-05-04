var x1 = parseInt(prompt("primeiro número"));
var x2 = parseInt(prompt("Segundo número"));
var x3 = parseInt(prompt("terceiro número"));
var x4 = parseInt(prompt("quarto número"));
var x5 = parseInt(prompt("quinto número"));
var x6 = parseInt(prompt("sexto número"));
var soma = 0;

if(x1 < 72) {
    soma = soma + x1;
} else if(x2 < 72) {
    soma = soma + x2;
} else if(x3 < 72) {
    soma = x3 + soma;
} else if(x4 < 72) {
    soma = x4 + soma;
}  else if(x5 < 72) {
    soma = x5 + soma;
}  else if(x6 < 72) {
    soma = x6 + soma;
}

document.write("resultado: " + soma);