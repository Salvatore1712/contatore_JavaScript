// MENU TENDINA RESPONSIVE
//SELEZIONE ELEMENTI PER GESTIONE MENU -- OK
const menuBtn = document.querySelector(".nav")
let listaUl = document.querySelector(".nav__list");
let iconMenu = document.querySelector(".nav__icon");
const extraText = document.querySelector(".main__text");


// SELEZIONE ELEMENTI E VARIABILI PER GIOCHI
let counter = 0; //CONTATORE
const boxButton = document.querySelector(".main__button") //BOX CONTANITORE BOTTONI
const boxContatore = document.querySelector(".main__contatore__numero") // BOX CONTENENTE CONTATORE
let scoreText = document.querySelector("#info-score"); //SPAN PER PUNTEGGIO
let nameText = document.querySelector("#info-name"); // SPAN PER NOME USER
let cpuText = document.querySelector("#info-cpu"); // SPAN PER CPU PUNTEGGIO
let titoloGico = document.querySelector(".main__titles__big"); // SPAN PER CPU PUNTEGGIO
let textGioco = document.querySelector(".main__text");

//CREAZIONE ELEMENTI BOTTONI
const btnAumento = document.createElement("button");
const btnDecremento = document.createElement("button");
const btnReset = document.createElement("button");

//INSERIMENTO NOME PLAYER
let nome = "PLAYER_01";
nameText.textContent = nome;

//IMPOSTA A ZERO IL PUNTEGGIO USER
let scoreUser = 0;
scoreText.textContent = scoreUser;

//IMPOSTA A ZERO IL PUNTEGGIO CPU
let punteggioCPU = 0;
cpuText.textContent = punteggioCPU;

//AGGIUNTA STILI BOTTONI
btnAumento.className = "btn";
btnDecremento.className = "btn";
btnReset.className = "btn reset";

function renderButtons() {
    boxButton.append(btnReset, btnDecremento, btnAumento);
}

// EVENTO SUL MENU SELEZIONA GIOCO IN BASE AL TESTO IN <LI>
listaUl.addEventListener("click", event =>{
    
    // ******* GIOCO CONTATORE *********
    if(event.target.textContent === "CONTATORE"){
        titoloGico.textContent = "GIOCO CONTATORE";
        boxContatore.textContent = counter //set testo conuter = 0
        textGioco.textContent = "INCREMENTA O DECREMENTA CONTATORE"

        // INSERIMENTO TESTO BOTTONI DINAMICI
        btnAumento.textContent = "+";
        btnDecremento.textContent = "-";
        btnReset.textContent = "RESET";

        //INSERIMENTO BOTTONI NEL BOX BOTTONI
        renderButtons();

        btnAumento.onclick = function () {
            counter++;
            boxContatore.textContent = counter;
        };


        //FUNZIONE DECRENENTO CONTATORE CON MINIMO A 0 (NO NEGATIVI)
        btnDecremento.onclick = function () {
            if (counter == 0){
                return;
            }
            counter--;
            boxContatore.textContent = counter;
        };

        // FUNZIONE DI RESET
        btnReset.onclick = () => {
            counter = 0;
            boxContatore.textContent = counter;
        };
    
    }


    // **** GIOCO PARI DISPARI ****
    else if(event.target.textContent === "PARI DISPARI"){
        titoloGico.textContent = "GIOCO PARI DISPARI";
        boxContatore.textContent = "";
        extraText.textContent = "INDOVINA SE PARI O DISPARI";

        // INSERIMENTO TESTO DINAMICO BOTTONI GIOCO PARI DISPARI
        btnAumento.textContent = "PARI";
        btnDecremento.textContent = "DISP";
        btnReset.textContent = "RESET";

        //RICHIAMO FUNZIONE INSERIMENTO BOTTONI NEL BOX
        renderButtons();

        // SE USER CLICCA TASTO PARI
        btnAumento.onclick = function () {
            let numeroCasuale = Math.floor(Math.random()* 20);
            if(numeroCasuale % 2 == 0){ // VINCITA SE PARI
                boxContatore.textContent = "WIN";
                scoreUser++
                scoreText.textContent = scoreUser;
                extraText.textContent = `NUMERO RANDOM: ${numeroCasuale}`;
            } else { //PERDITA SE CLICK BOTTONE PARI
                boxContatore.textContent = "LOSE";
                punteggioCPU++;
                cpuText.textContent = punteggioCPU;
                extraText.textContent = `NUMERO RANDOM: ${numeroCasuale}`;
            }
        };

        //SE USER CLICCA TASTO DISPARI
        btnDecremento.onclick = () => {
            let numeroCasuale = Math.floor(Math.random()* 20)+1;
            if(numeroCasuale % 2 == 0){ 
                boxContatore.textContent = "LOSE";
                punteggioCPU++;
                cpuText.textContent = punteggioCPU;
                extraText.textContent = `NUMERO RANDOM: ${numeroCasuale}`;
            } else { // VINCITA SE DISPARI
                boxContatore.textContent = "WIN";
                scoreUser++;
                scoreText.textContent = scoreUser;
                extraText.textContent = `NUMERO RANDOM: ${numeroCasuale}`;
            }
        };

        // FUNZIONE BOTTONE RESET
        btnReset.onclick = () => {
            //RESET DEI CONTATORI PUNTEGGI
            punteggioCPU = 0;
            cpuText.textContent = punteggioCPU;
            scoreUser = 0;
            scoreText.textContent = scoreUser;
            boxContatore.textContent = "";
            extraText.textContent = "INDOVINA SE PARI O DISPARI";
        };
    }
})
