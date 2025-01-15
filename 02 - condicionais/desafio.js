/* Faça um programa para calcular o valor de uma viagem.
*
* Você terá 5 variáveis. Sendo elas:
* 1 - Preço do etanol;
* 2 - Preço da gasolina;
* 3 - O tipo de combustível que está no seu carro;
* 2 - Gasto médio de combustível do carro por KM; e
* 3 - Distância em Km da viagem;
*
*/

const precoEtanol = 5.76;
const precoGasolina = 6.26;
const tipoCombustivel = 'Etanol';
const distanciaDaViagemKm = 100;
const kmPorLitro = 10;
const litrosConsumido = distanciaDaViagemKm / kmPorLitro;
let resultado = 0;

if (tipoCombustivel === 'Gasolina') {
  resultado = (litrosConsumido * precoGasolina).toFixed(2);
  console.log('Resultado: ' + resultado);

} else if (tipoCombustivel === 'Etanol') {
  resultado = (litrosConsumido * precoEtanol).toFixed(2);
  console.log('Resultado: ' + resultado);
}