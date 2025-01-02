/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

*/

// Funzione per restituire il maggiore dei tre numeri
function maggiore(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

// Funzione per restituire il minore dei tre numeri
function minore(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  return min;
}

// Output
const a = 1, b = -10, c = 4;

const valoreMaggiore = maggiore(a, b, c);
const valoreMinore = minore(a, b, c);

console.log("Maggiore:", valoreMaggiore);
console.log("Minore:", valoreMinore);
