/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

*/

// Gatti
const cats = 44;
console.log("I gatti sono " + cats);

const catsRows = 6;
console.log("I gatti per fila sono " + catsRows);

//File 
const numRows = Math.ceil(cats / catsRows);
console.log("Il numero di file è " + numRows);

//Gatti mancanti
const missingCats = (numRows * catsRows) - cats;
console.log("Il numero di gatti mancanti è di " + missingCats + " gatti");