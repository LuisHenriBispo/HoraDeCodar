var anoatual = 2023;
var anonasc = parseInt(prompt("Digite o ano em que nasceu"));
var idade;
idade = anoatual - anonasc; 

if (idade>=16){
    document.write("Você têm: " + idade + ",já pode votar!");
}
else {
    document.write("Você têm: " + idade + ",não pode votar ainda!");
}