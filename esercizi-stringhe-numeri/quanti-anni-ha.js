/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

*/

// Anno corrente
const curYear = 2025;
console.log ("Anno corrente: " + curYear);

// Anno di nascita
const birthYear = 1996;
console.log("Anno di nascita: " + birthYear)

// Età
const age = curYear - birthYear;
console.log ("l'età è: " + age + " anni");

// Anni necessari per raggiungere i 100
let rip = 100 - age;
console.log("Anni per raggiungere i 100 = " + rip + " anni");