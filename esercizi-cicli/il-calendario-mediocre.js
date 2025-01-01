/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31

*/

// Dati di input
let numDays = 31; 
let weekDay = 0;

// Giorni della settimana
let days = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

// Ciclo per stampare il calendario
for (let i = 1; i <= numDays; i++) {
    // Stampa il giorno con il nome della settimana
    console.log(days[weekDay] + " " + i);
    
    // Passa al giorno successivo
    weekDay = (weekDay + 1) % 7;  // Ciclo tra 0 (Lun) e 6 (Dom)
}