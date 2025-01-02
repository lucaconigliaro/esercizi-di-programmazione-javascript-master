/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
*/

// Funzione per il conto alla rovescia
function contoAllaRovescia(n) {
  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }
}

// Output
const numero = 5;
contoAllaRovescia(numero);