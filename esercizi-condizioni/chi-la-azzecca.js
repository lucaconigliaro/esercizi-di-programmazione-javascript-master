/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

*/

// Numeri dei giocatori
let player1 = 5;
let player2 = 10;

// Numero casuale
let randomNum = Math.floor(Math.random() * (100 - 1) + 1);

// Distanza numero dei giocatori
let distancePlayer1 = player1 - randomNum;
let distancePlayer2 = player2 - randomNum;

// Output numero generato
console.log("Numero casuale generato =", randomNum);

// Verifica se uno dei giocatori ha indovinato il numero
if (player1 === randomNum) {
    console.log("Il giocatore 1 ha indovinato il numero");
} else if (player2 === randomNum) {
    console.log("Il giocatore 2 ha indovinato il numero");
} else {
    // Nessuno ha indovinato, determina chi si è avvicinato di più
    if (distancePlayer1 < distancePlayer2 && distancePlayer1 > 0) {
        console.log("Il giocatore 1 si è avvicinato di più");
    } else if (distancePlayer2 < distancePlayer1 && distancePlayer2 > 0) {
        console.log("Il giocatore 2 si è avvicinato di più");
    } else {
        console.log("Entrambi i giocatori sono vicini al numero casuale");
    }
}