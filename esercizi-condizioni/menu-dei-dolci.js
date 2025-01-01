/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

*/

// Menu
console.log("MENU:");
console.log("1. Tiramisù");
console.log("2. Torta della nonna");
console.log("3. Cheesecake alla nutella");
console.log("4. Macedonia");

// Scelta
let choise = parseInt(prompt("Inserisci il numero del dolce che desideri scegliere (1-4):"));

// Verifica
if (choise === 1) {
    console.log("Hai scelto il dolce Tiramisù");
} else if (choise === 2) {
    console.log("Hai scelto il dolce Torta della nonna");
} else if (choise === 3) { 
  console.log("Hai scelto il dolce Cheesecake alla nutella");
} else if (choise === 4) {
    console.log("Hai scelto il dolce Macedonia");
} else {
    console.log("Dolce non disponibile");
}