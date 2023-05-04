let qtdAprovados = 0;
let calcularOutroAluno = true;

while (calcularOutroAluno) {
  const nota1 = parseFloat(prompt("Digite a primeira nota: "));
  const nota2 = parseFloat(prompt("Digite a segunda nota: "));


  const media = (nota1 + nota2) / 2;

 
  if (media >= 9.5) {
    document.write(`Parabéns, sua média foi ${media.toFixed(1)}, você foi aprovado!`);
    qtdAprovados++;
  } else {
    document.write(`Sua média foi ${media.toFixed(1)}, você foi reprovado.`);
  }


  const resposta = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
  calcularOutroAluno = (resposta === "S");
}

document.write(`Foram aprovados ${qtdAprovados} alunos.`);