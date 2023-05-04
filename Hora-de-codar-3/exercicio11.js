let dentroIntervalo = 0;
let foraIntervalo = 0;

for (let i = 0; i < 10; i++) {
  const valor = parseFloat(prompt(`Informe o valor ${i + 1}:`));
  
  if (valor >= 24 && valor <= 42) {
    dentroIntervalo++;
  } else {
    foraIntervalo++;
  }
}

document.write(`Valores dentro do intervalo: ${dentroIntervalo}`);
document.write(`Valores fora do intervalo: ${foraIntervalo}`);
