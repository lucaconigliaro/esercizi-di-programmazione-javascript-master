/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

*/

// Temperature
let a = 10;
let b = -2;
let c = 31;
let d = 22;
let e = 15;
let f = -6;
let g = 7;

// Variabili
let hot = a;
let cold = a;

// Giornata più calda
if (b > hot) {
  hot = b
} else if (c > hot) {
  hot = c
} else if (d > hot) {
  hot = d
} else if (e > hot) {
  hot = e
} else if (f > hot) {
  hot = f
} else {
  hot = g
}

// Giornata più fredda 
if (b < cold) {
  cold = b
} else if (c < cold) {
  cold = c
} else if (d < cold) {
  cold = d
} else if (e < cold) {
  cold = e
} else if (f < cold) {
  cold = f
} else {
  cold = g
}

// Output
console.log("giornata più calda = " + hot, "giornata più fredda = " + cold);