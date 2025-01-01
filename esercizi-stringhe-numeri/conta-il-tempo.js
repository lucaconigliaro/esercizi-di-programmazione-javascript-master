/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

*/

// Secondi totali
const totalSeconds = 12560;
console.log("Secondi totali " + totalSeconds);

// Numero totale di secondi in un'ora
const secondsXHour = 60 * 60; //3600
console.log("I secondi in un'ora sono " + secondsXHour);

// Ore
const hours = Math.floor(totalSeconds / secondsXHour);
console.log (hours + " ore");

// Resto dei minuti
const restMinutes = totalSeconds % secondsXHour; // 12560 % 3600 = 1760
console.log("Il resto dei minuti è di: " + restMinutes);

// Minuti
const minutes = Math.floor(restMinutes / 60); 
console.log(minutes + " minuti");

//Secondi 
const seconds = restMinutes % 60;
console.log(seconds + " secondi");

//Output finale
console.log(hours + " ore, " + minutes + " minuti e " + seconds + " secondi.")