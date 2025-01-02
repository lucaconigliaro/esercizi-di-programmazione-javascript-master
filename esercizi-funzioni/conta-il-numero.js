/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

*/

// Funzione per contare il numero di cifre di un numero intero
function contaCifre(numero) {
  // Convertiamo il numero in una stringa e restituamo la lunghezza della stringa
  const numeroStringa = numero.toString();
  return numeroStringa.length;
}

// Output
const numero1 = 9;
console.log(`${numero1} ha ${contaCifre(numero1)} cifra`);

const numero2 = 245;
console.log(`${numero2} ha ${contaCifre(numero2)} cifre`);