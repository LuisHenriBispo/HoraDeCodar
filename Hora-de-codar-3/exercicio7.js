let notasLidas = 0;
let somaNotas = 0;

while (notasLidas < 6) {
  let nota = -1;
  
  while (nota < 0 || nota > 10) {
    nota = parseFloat(prompt(`Informe a nota ${notasLidas + 1}:`));
    
    if (nota < 0 || nota > 10) {
      document.write("Nota inválida! Informe um valor entre 0 e 10.");
    }
  }
  
  somaNotas += nota;
  notasLidas++;
}

const media = somaNotas / 6;

document.write(`A média do aluno é ${media.toFixed(2)}.`);
