/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

*/

// Numero di cui stampare la tabellina
let number = 5;

// Ciclo per stampare la tabellina
let tabellina = '';
for (let i = 0; i <= 10; i++) {
    tabellina += (number * i) + ' ';
}

// Output
console.log(tabellina);