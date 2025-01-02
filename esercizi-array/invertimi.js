/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

*/

// Numero di elementi nell'array
const number = 5;

// Array
const array = [];
for (let i = 0; i < number; i++) {
  array.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Array ottenuto = ", array);

// Array invertito
const newArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}

console.log("Array invertito =", newArray);