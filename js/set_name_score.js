document.addEventListener("DOMContentLoaded", ()=>{
    let name = "Anna";
    

    //selezione elementi
    let nameText = document.querySelector("#info-name");
    let scoreText = document.querySelector("#info-score");
    let recordText = document.querySelector("#info-record");
    let punteggio = document.querySelector(".box-contenitore")

    let scoreUser = localStorage.setItem("userScore", punteggio)
    nameText.textContent = `${name.toUpperCase()}`;
    scoreText.textContent = scoreUser;
    
    


})