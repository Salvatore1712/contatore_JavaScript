/*
In questo progetto svilupperai una semplice applicazione web che simula il comportamento di un counter (contatore).
🎯 Realizza un'applicazione in JavaScript che permetta all’utente di aumentare o diminuire il valore di un counter attraverso due pulsanti, + e −.

Vediamo il funzionamento atteso del counter:
Quando l’utente accede alla pagina, deve visualizzare il valore iniziale del counter impostato a 0.
Devono essere presenti due pulsanti, uno per incrementare (+) e uno per decrementare (−) il valore del counter.
Dopo aver creato dinamicamente gli elementi dell’interfaccia, implementa la funzione che aggiungerà e diminuirà il valore del counter.

Requisiti tecnici
L’applicazione deve soddisfare i seguenti requisiti:

L’applicazione deve essere sviluppata esclusivamente in JavaScript puro.
L’interfaccia del counter (pulsanti +/- e visualizzazione del valore) deve essere creata dinamicamente tramite JavaScript,
utilizzando la manipolazione del DOM.

È consentito l’utilizzo di librerie JavaScript esterne, solo se necessarie.
Se lo desideri, puoi aggiungere funzionalità aggiuntive che ritieni utili o interessanti (per esempio, salvataggio del valore, 
personalizzazione del contatore, ecc.).
*/

// p contatore
let contatore = 0
let tagContatore = document.querySelector(".contatore");

// bottoni
let buttonIncremento = document.getElementById("incremento");
let buttonDecremento = document.getElementById("decremento");

// titolo h2 over memory
let titoloH2 = document.querySelector(".title-alert")
let testo = titoloH2.textContent;

function incremento(){
    contatore++;
    tagContatore.textContent = contatore;
    tagContatore.textContent = contatore;
    if (tagContatore.textContent > 15) {
        titoloH2.classList.add("show")
    }
}

function decremento(){
    contatore--;
    tagContatore.textContent = contatore;
    if (tagContatore.textContent < 15) {
        titoloH2.classList.remove("show")
    }
}

