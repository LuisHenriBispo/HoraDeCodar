var ah = parseInt(prompt("Primeiro valor"));
var be = parseInt(prompt("Segundo valor"));

if (be <= 0){
    be= parseInt(prompt("Indique o segundo valor novamente"));
} else { 
    alert(ah/be)
}