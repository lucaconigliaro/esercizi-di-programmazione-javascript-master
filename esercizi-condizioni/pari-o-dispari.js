/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.

  Esempi:
    Input: numero = 63
    Output: 1

    Input: numero = 24
    Output: 0

  Consigli:
  Per capire se un numero è pari o dispari puoi usare un operatore, ma quale? :) 

*/

let number = 63;

if (number % 2 === 0) {
  console.log(0); // Il numero è pari
} else {
  console.log(1); // Il numero è dispari
} 