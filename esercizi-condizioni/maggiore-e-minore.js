/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    
*/

// Numeri
const a = 3;
const b = -1;
const c = 4;
const d = -2

// Numero maggiore
let max = a;

if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}
if (d > max) {
  max = d;
}

console.log(max + " è il numero maggiore");


// Numero minore
let min = a;

if (b < min) {
  min = b;
}
if (c < min) {
  min = c;
}
if (d < min) {
  min = d;
}

console.log (min + " è il numero minore")