
document.addEventListener("DOMContentLoaded", () => {


    // counter variabile
    let counter = 0;
    let scoreUser = 0;

    // seleziona gli elementi
    const boxButton = document.querySelector(".box-button") //box che contiene i bottoni
    const boxContatore = document.querySelector("#numero") // box contenete num contatore
    boxContatore.textContent = counter

    //CREAZIONE BOTTONI
    const btnAumento = document.createElement("button");
    const btnDecremento = document.createElement("button");
    const btnReset = document.createElement("button");

    btnAumento.textContent = "INCR";
    btnDecremento.textContent = "DECR";
    btnReset.textContent = "RESET";

    //aggiunta stile bottoni
    btnAumento.className = "btn";
    btnDecremento.className = "btn";
    btnReset.className = "btn reset";
    
    //inserimento bottoni nel box
    boxButton.append(btnReset);
    boxButton.append(btnDecremento);
    boxButton.append(btnAumento);


    //funzione incremento
    function incremento() {
        counter++;
        boxContatore.textContent = counter;
    }
    btnAumento.addEventListener("click", incremento);


    //funzione decremento nel listener con limite minimo 0
    btnDecremento.addEventListener("click", function(){
        if (counter == 0){
            return;
        }
        counter--;
        boxContatore.textContent = counter;
        
    })

    // FUNZIONE DI RESET
    btnReset.addEventListener("click", ()=>{
        counter = 0;
        boxContatore.textContent = counter;
    })
    

})
