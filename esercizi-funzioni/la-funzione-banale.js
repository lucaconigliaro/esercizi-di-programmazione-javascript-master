/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE
*/


function uguaglianza(n, m) {
  // Confronta i due argomenti
  if (n === m) {
    return true;
  } else {
    return false;
  }
}

// Output
console.log(uguaglianza(2, 3));
console.log(uguaglianza(2, '2'));
console.log(uguaglianza(2, 2));
