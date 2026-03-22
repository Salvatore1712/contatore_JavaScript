// MENU TENDINA RESPONSIVE
//selezione elementi per menu
const menuBtn = document.querySelector("#nav-bar")
let listaUl = document.querySelector(".menu-lista");
let iconMenu = document.querySelector(".icon-menu");
const extraText = document.querySelector(".extra-text");

// **** MOSTRA/NASCONDE MENU
menuBtn.addEventListener("click", (event)=> {
    if (listaUl.classList.contains("menu-show")) {
        listaUl.classList.remove("menu-show")
    }else{
        listaUl.classList.add("menu-show")
    }
})

// selezione elementi e variabili giochi
let counter = 0; //contatore
const boxButton = document.querySelector(".box-button") //box che contiene i bottoni
const boxContatore = document.querySelector("#numero") // box contenete num contatore
let scoreText = document.querySelector("#info-score"); //span x punteggio
let nameText = document.querySelector("#info-name"); // span per nome
let cpuText = document.querySelector("#info-cpu"); // span per CPU SCORE

//CREAZIONE ELEMENTI BOTTONI
const btnAumento = document.createElement("button");
const btnDecremento = document.createElement("button");
const btnReset = document.createElement("button");

//immissione nome player
let nome = prompt("INSERISCI NOME");
nameText.textContent = nome.toUpperCase();

//setta a zeo il punteggio user
let scoreUser = 0;
scoreText.textContent = scoreUser;

//setta a zero il punteggio cpu
let punteggioCPU = 0;
cpuText.textContent = punteggioCPU;

//AGGIUNTA STILI BOTTONI
btnAumento.className = "btn";
btnDecremento.className = "btn";
btnReset.className = "btn reset";

// EVENTO SUL MENU SELEZIONA GIOCO IN BASE AL TESTO IN <LI>
listaUl.addEventListener("click", event =>{
    
    // ******* GIOCO CONTATORE *********
    if(event.target.textContent === "contatore"){
        
        boxContatore.textContent = counter //set testo conuter = 0

        // testo per bottoni
        btnAumento.textContent = "INCR";
        btnDecremento.textContent = "DECR";
        btnReset.textContent = "RESET";

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
            scoreText.textContent = scoreUser;
        })
    
    }


    // **** PARI DISPARI ****
    else if(event.target.textContent === "pari dispari"){
        
        boxContatore.textContent = " ";
        extraText.textContent = "select your button"
        // testo per bottoni
        btnAumento.textContent = "EVEN";
        btnDecremento.textContent = "ODD";
        btnReset.textContent = "RESET";

        //inserimento bottoni nel box
        boxButton.append(btnReset);
        boxButton.append(btnDecremento);
        boxButton.append(btnAumento);

        // scelta pari
        btnAumento.addEventListener("click", function(){
            let numeroCasuale = Math.floor(Math.random()* 20);
            if(numeroCasuale % 2 == 0){ // vinci bottone pari
                boxContatore.textContent = "WIN";
                scoreUser++
                scoreText.textContent = scoreUser;
                extraText.textContent = `Random Number: ${numeroCasuale}`;
            } else {
                boxContatore.textContent = "LOSE";
                punteggioCPU++;
                cpuText.textContent = punteggioCPU;
                extraText.textContent = `Random Number: ${numeroCasuale}`;
            }
        })

        //scelta dispari
        btnDecremento.addEventListener("click", ()=>{
            let numeroCasuale = Math.floor(Math.random()* 20);
            if(numeroCasuale % 2 == 0){ 
                boxContatore.textContent = "LOSE";
                punteggioCPU++;
                cpuText.textContent = punteggioCPU;
                extraText.textContent = `Numero Random: ${numeroCasuale}`;
            } else { // vinci bottone dispari
                boxContatore.textContent = "WIN";
                scoreUser++;
                scoreText.textContent = scoreUser;
                extraText.textContent = `Numero Random: ${numeroCasuale}`;
            }
        })

        // reset button
        btnReset.addEventListener("click", ()=>{
            //reset contatori
            punteggioCPU = 0;
            cpuText.textContent = punteggioCPU;
            scoreUser = 0;
            scoreText.textContent = scoreUser;

            boxContatore.textContent = "";
            extraText.textContent = "select your button"
            // testo per bottoni
            btnAumento.textContent = "PARI";
            btnDecremento.textContent = "DISPARI";
            btnReset.textContent = "RESET";

            //inserimento bottoni nel box
            boxButton.append(btnReset);
            boxButton.append(btnDecremento);
            boxButton.append(btnAumento);

            
            // scelta pari
            btnAumento.addEventListener("click", function(){
                let numeroCasuale = Math.floor(Math.random()* 20);
                if(numeroCasuale % 2 == 0){
                    boxContatore.textContent = "WIN";
                    // scoreUser++
                    // scoreText.textContent = scoreUser;
                    extraText.textContent = `Numero Random: ${numeroCasuale}`;
                } else {
                    boxContatore.textContent = "LOSE";
                    // punteggioCPU++;
                    // cpuText.textContent = punteggioCPU;
                    extraText.textContent = `Numero Random: ${numeroCasuale}`;
                }
            })

            //scelta dispari
            btnDecremento.addEventListener("click", ()=>{
                let numeroCasuale = Math.floor(Math.random()* 20);
                if(numeroCasuale % 2 == 0){
                    boxContatore.textContent = "LOSE";
                    // punteggioCPU++;
                    // cpuText.textContent = punteggioCPU;
                    extraText.textContent = `Numero Random: ${numeroCasuale}`;
                } else {
                    boxContatore.textContent = "WIN";
                    // scoreUser++;
                    // scoreText.textContent = scoreUser;
                    extraText.textContent = `Numero Random: ${numeroCasuale}`;
                }
            })
        })
    }
})
