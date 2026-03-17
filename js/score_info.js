// gestione info punteggi & more
    //selezione elementi
    
    const titoliArray = ["Your score: ", "Record score: "];
    //select lista
    const listaUl = document.querySelector(".lista-score");
    

    for (let i=0; i<2; i++) {
        let liTag = document.createElement("li")
        liTag.textContent = titoliArray[i] + punteggi.Score[i];
        listaUl.append(liTag)
    }

