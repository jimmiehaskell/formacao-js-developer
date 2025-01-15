
const numero = 0;
let isPar = (numero % 2) === 0;

if (numero <= 0){
  console.log('Insira um número valido.')
} else if (isPar) {
  console.log('O número ' + numero + ' é par.');
} else {
  console.log('O número ' + numero + ' não é par.');
}
