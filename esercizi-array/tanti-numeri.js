/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
*/

// Array di numeri
const number = [3, 5, 10, 2, 8];

// Calcolo della somma degli elementi
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}

// Calcolo della media
const media = sum / number.length;

// Filtraggio dei valori minori della media
const valoriMinori = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] < media) {
    valoriMinori.push(number[i]);
  }
}

// Output
console.log("Media:", media.toFixed(1)); // Arrotondamento a una cifra decimale
console.log("Valori minori della media:", valoriMinori);