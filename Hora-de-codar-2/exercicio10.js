var h =  parseFloat(prompt("Digite a sua altura"));
var sexo =(prompt("Informe seu Sexo (digite 1 para feminino ou 2 para Masculino)"));
var pesoIdeal=0;

if ( sexo == "1" && h > 0){
    pesoIdeal = (62.1 * h)-44.7;
}
else if ( sexo == "2" && h > 0){
    pesoIdeal = (72.7 * h) - 58;
}

document.write("Resultado: "+ (pesoIdeal));