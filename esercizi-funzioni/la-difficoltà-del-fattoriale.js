/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

*/

// Funzione per calcolare il fattoriale in modo iterativo
function fattoriale(n) {
  let risultato = 1;

  for (let i = 1; i <= n; i++) {
    risultato *= i;
  }

  return risultato;
}

// Output
const numero = 5;
const risultatoFattoriale = fattoriale(numero);

console.log(`Il fattoriale di ${numero} è:`, risultatoFattoriale);