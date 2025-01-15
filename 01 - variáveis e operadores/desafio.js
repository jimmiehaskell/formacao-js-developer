/* Faça um programa para calcular o valor de uma viagem.
*
* Você terá 3 variáveis. Sendo elas:
* 1 - Preço do combustível;
* 2 - Gasto médio de combustível do carro por KM; e
* 3 - Distância em Km da viagem;
*
*/

const precoCombustivel = 6.26;
const distanciaDaViagemKm = 100;
const kmPorLitro = 10;
const listrosConsumido = distanciaDaViagemKm / kmPorLitro

let valorGasto = (listrosConsumido * precoCombustivel).toFixed(2);

console.log(valorGasto);
