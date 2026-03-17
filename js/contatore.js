




document.addEventListener("DOMContentLoaded", () => {


    // counter variabile
    let counter = 0;
    let scoreUser = 0;
    const punteggi = {
        Score: [1, counter]
    }

    // seleziona gli elementi
    const tagContatore = document.querySelector(".contatore"); //contenitore del numero
    const boxButton = document.querySelector(".box-button");

    //creazione bottoni
    const btnIncrease = document.createElement("button");
    const btnDecrease = document.createElement("button");
    const btnReset = document.createElement("button")

    //agginge classi e contenuto bottoni
    btnReset.textContent = "RESET"; //tasto reset
    btnReset.className = "btn reset";

    btnDecrease.textContent = "-" //bottone decremento
    btnDecrease.className = "btn";

    btnIncrease.textContent = "+";
    btnIncrease.className = "btn";


    //inserire bottoni nel DOM e contatore
    tagContatore.textContent = counter;

    boxButton.appendChild(btnReset);
    boxButton.appendChild(btnDecrease);
    boxButton.appendChild(btnIncrease);

    // funzione incrementa
    function incremento () {
        counter++
        tagContatore.textContent = counter;
        // condizione if
    }

    //funzione decrementa
    function decremento() {
        counter --;
        tagContatore.textContent = counter;
        if (counter <=0) {
            counter = 0;
            tagContatore.textContent = counter
        }
    }

    // funzione reset che ritorna il contatore a zero
    function reset() {
        counter = 0;
        tagContatore.textContent = counter;
    }

    btnIncrease.addEventListener("click", incremento); // + contatore
    btnDecrease.addEventListener("click", decremento); // - contatore
    btnReset.addEventListener("click", reset); //reset contatore

    let totalScore = localStorage;
    console.log(totalScore);
    


}) 
