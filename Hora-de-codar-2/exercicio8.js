var x1 = parseInt(prompt("primeiro número"));
var x2 = parseInt(prompt("Segundo número"));
var x3 = parseInt(prompt("terceiro número"));
var x4 = parseInt(prompt("quarto número"));
var media;
media = x1 +x2 +x3+ x4 /4;

if(x1 <10 && x1> 0) {
    media = media + x1;
} else if(x2 < 10 && x2 > 0) {
    media = x2 + media;
} else if(x3 < 10 && x3 > 0) {
    media = x3 + media;
} else if(x4 < 10 && x4 > 0 ) {
    media = x4 + media;

}

if(media >= 5){
    document.write("Você passou no teste");
}
else if( media <= 4){
    document.write("Tente novamente!");
}