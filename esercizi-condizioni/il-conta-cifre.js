/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

*/

// Numero
let number = parseInt(prompt("Inserisci un numero (massimo 9999):"));

// Verifica
if (number < 10) {
    console.log("1 cifra");
} else if (number < 100) {
    console.log("2 cifre");
} else if (number < 1000) {
    console.log("3 cifre");
} else if (number < 10000) {
    console.log("4 cifre");
} else {
    console.log("Numero troppo grande");
}