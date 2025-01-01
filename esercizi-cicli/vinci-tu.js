/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

*/

// Numero di tiri
let number = 5;

// Variabili per tenere traccia dei punteggi
let player1 = 0;
let player2 = 0;

// Tiri player1
for (let i = 0; i < number; i++) {
    let shotPlayer1 = Math.floor(Math.random() * 6) + 1;
    player1 += shotPlayer1;
}

// Tiri player2
for (let i = 0; i < number; i++) {
    let shotPlayer2 = Math.floor(Math.random() * 6) + 1;
    player2 += shotPlayer2;
}

// Output punteggi
console.log("Punteggio Player1: " + player1);
console.log("Punteggio Player2: " + player2);

// Determina e stampa chi ha vinto
if (player1 > player2) {
    console.log("Player1 ha vinto");
} else if (player1 < player2) {
    console.log("Player2 ha vinto");
} else {
    console.log("È un pareggio");
}