/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

*/

// Funzione che restituisce un numero casuale tra 0 e il numero passato come argomento
function numeroCasuale(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Output
const max = 10;
console.log(`Numero casuale tra 0 e ${max}:`, numeroCasuale(max));