var valor_1 = parseInt(prompt("Insira o primeiro valor"));
var valor_2 = parseInt(prompt("Insira o segundo valor"));
var valor_3 = parseInt(prompt("Insira o terceiro valor"));
var soma = 0;

if (valor_1 < valor_2 && valor_1 < valor_3){
    soma = valor_2 + valor_3;
    document.write("soma: " + soma);
} else if (valor_2 < valor_3 && valor_2 < valor_1){ 
    soma = valor_3 + valor_1;
    document.write("soma: " + soma);
} else if(valor_3 < valor_1 && valor_3 < valor_2){
    soma = valor_1 + valor_2;
    document.write("soma: " + soma);
} else {
    document.write("alguns dos valores digitados são iguais");
}