// MENU TENDINA RESPONSIVE

// selezione elementi




//selezione elementi
const menuBtn = document.querySelector(".icon-menu")
let listaUl = document.querySelector(".menu-lista");

menuBtn.addEventListener("click", ()=> {
    if (listaUl.classList.contains("menu-show")) {
        listaUl.classList.remove("menu-show")
    }else{
        listaUl.classList.add("menu-show")
    }
})

    


