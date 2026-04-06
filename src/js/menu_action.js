const menuBtn = document.querySelector(".nav") // menu
let listaUl = document.querySelector(".nav__list"); //lista menu

// **** MOSTRA / NASCONDE MENU  -- OK
menuBtn.addEventListener("click", (event)=> {
    if (listaUl.classList.contains("menu__show")) {
        listaUl.classList.remove("menu__show")
    }else{
        listaUl.classList.add("menu__show")
    }
})