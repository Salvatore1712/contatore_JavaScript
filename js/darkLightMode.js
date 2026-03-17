    // DARK LIGHT MODE

    //selezione parent per inserimento
    const darkSpace = document.querySelector("#dark-mode");
    let boxNumero = document.querySelector(".box-numero")
    //creazione bottone
    const btnDarkMode = document.createElement("button");
    btnDarkMode.classList = "dark-button"
    btnDarkMode.textContent = "DARK 🌛";


    btnDarkMode.addEventListener("click", (event) => {
        let eleCliccato = event.target;
        if (eleCliccato.textContent === "DARK 🌛") {
            btnDarkMode.textContent = "LIGHT ☀️";
            document.body.classList.add("dark-theme");
            boxNumero.classList.add("dark-display");

        } else if (eleCliccato.textContent === "LIGHT ☀️") {
            btnDarkMode.textContent = "DARK 🌛";
            document.body.classList.remove("dark-theme");
            boxNumero.classList.remove("dark-display");

        }
            
    })

    //inserimento in DOM
    darkSpace.appendChild(btnDarkMode);
    