var n = parseInt(prompt("Insira um número: "));
var inicio = 1;

while (inicio <= 10) {
  document.write(`${n} x ${inicio} = ${n*inicio}<br>`);
  inicio++;
}
