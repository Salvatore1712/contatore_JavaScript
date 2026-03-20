# JS COUNTER.exe

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-1FE211?style=for-the-badge&labelColor=000000" alt="JavaScript Vanilla">
  <img src="https://img.shields.io/badge/Style-Retro%2080s-1FE211?style=for-the-badge&labelColor=000000" alt="Retro 80s">
  <img src="https://img.shields.io/badge/Theme-Duotone-FF0004?style=for-the-badge&labelColor=000000" alt="Duotone theme">
</p>

<p align="center">
  Un progetto front-end in <strong>JavaScript puro</strong> che realizza un contatore interattivo
  con un'estetica da <strong>computer anni '80</strong>: schermo nero, verde fosforo, dettagli rossi,
  tipografia arcade e interfaccia da terminale vintage.
</p>

---

## Anteprima

<p align="center">
  <img src="./img/landscape-illustration.jpg" alt="Illustrazione retro del progetto" width="100%">
</p>

<p align="center">
  <img src="./img/landscape-illustration_little.jpg" alt="Dettaglio visual retro" width="48%">
  <img src="./img/pexels-nicole-avagliano-1132392-2312040.jpg" alt="Moodboard retro del progetto" width="48%">
</p>

---

## Descrizione

`JS COUNTER.exe` e' una piccola applicazione web che simula il comportamento di un contatore numerico.
L'utente puo' incrementare, decrementare e resettare il valore mostrato a schermo attraverso pulsanti creati e gestiti in JavaScript.

Il progetto nasce come esercitazione su:

- manipolazione del DOM
- gestione eventi
- organizzazione dei file front-end
- separazione tra struttura HTML, stile SCSS/CSS e logica JavaScript
- costruzione di una UI con identita' visiva forte

---

## Obiettivo del progetto

Il requisito principale era sviluppare una semplice applicazione counter che:

- mostri inizialmente il valore `0`
- permetta di aumentare il valore tramite un pulsante
- permetta di diminuire il valore tramite un pulsante
- costruisca l'interfaccia interattiva usando JavaScript
- utilizzi esclusivamente JavaScript vanilla, senza framework

Oltre ai requisiti base, il progetto aggiunge una direzione stilistica precisa: una dashboard in stile vecchio terminale / monitor CRT.

---

## Caratteristiche principali

- Counter sviluppato in JavaScript puro
- Creazione e gestione dei pulsanti tramite DOM
- Reset del valore corrente
- Blocco del decremento sotto lo zero
- Interfaccia a tema rétro anni '80
- Layout responsive con struttura mobile e desktop
- SCSS organizzato in partials
- Palette a due colori con accento rosso per le azioni critiche

---

## Stack utilizzato

```txt
HTML5
SCSS
CSS3
JavaScript Vanilla
Google Fonts:
- Press Start 2P
- Share Tech Mono
```

---

## Mood visivo

Il progetto punta su una UI fortemente riconoscibile:

- sfondo nero `#000000`
- verde fosforo `#1FE211`
- rosso acceso `#FF0004`
- font display `Press Start 2P`
- font secondario `Share Tech Mono`
- effetti di lampeggiamento
- box con bordi luminosi e look da vecchio hardware

Snippet delle variabili SCSS:

```scss
$coloreNero: #000;
$coloreVerde: #1FE211;
$coloreVerdeScuro: #17b70b;
$coloreRosso: #FF0004;
$fontFamilyMain: "Press Start 2P", system-ui;
$fontFamilyText: "Share Tech Mono", monospace;
```

---

## Struttura del progetto

```bash
.
├── index.html
├── README.md
├── progetto.txt
├── css
│   ├── main.css
│   ├── main.css.map
│   ├── main.scss
│   ├── abstract
│   │   └── _variables.scss
│   └── section
│       ├── _button.scss
│       └── _homePage.scss
├── js
│   └── contatore.js
└── img
    ├── landscape-illustration.jpg
    ├── landscape-illustration_little.jpg
    └── pexels-nicole-avagliano-1132392-2312040.jpg
```

---

## Come avviare il progetto

Puoi aprire direttamente `index.html` nel browser.

Se preferisci usare un piccolo server locale:

```bash
npx serve
```

Oppure puoi lanciare il progetto con estensioni come `Live Server` in VS Code.

---

## Struttura HTML

La pagina e' organizzata come una piccola interfaccia software rétro:

- `header` con titolo e menu
- `aside` laterale
- `main` con modulo counter
- `sidebar` con area score
- `footer` finale

Estratto da `index.html`:

```html
<main id="main" class="grid-item">
  <div id="title-main">
    <h4>COUNTER MODULE_ </h4>
    <h6>root/project/destroy</h6>
  </div>

  <div class="box-contatore">
    <div id="numero">001</div>
    <span>+++++++++++++++++++++++</span>
    <div class="box-button">
      <button class="btn reset">RESET</button>
      <button class="btn">DECR</button>
      <button class="btn">INCR</button>
    </div>
  </div>
</main>
```

---

## Logica JavaScript

La logica del contatore e' gestita nel file `js/contatore.js`.
Il flusso e' semplice e chiaro:

1. il contatore parte da `0`
2. vengono selezionati gli elementi utili del DOM
3. vengono creati i pulsanti
4. i pulsanti vengono inseriti nell'interfaccia
5. agli eventi `click` vengono associate le funzioni di incremento, decremento e reset

### Inizializzazione

```js
document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;

    const tagContatore = document.querySelector(".contatore");
    const boxButton = document.querySelector(".box-button");

    const btnIncrease = document.createElement("button");
    const btnDecrease = document.createElement("button");
    const btnReset = document.createElement("button");
});
```

### Creazione pulsanti

```js
btnReset.textContent = "RESET";
btnReset.className = "btn reset";

btnDecrease.textContent = "-";
btnDecrease.className = "btn";

btnIncrease.textContent = "+";
btnIncrease.className = "btn";
```

### Aggiornamento del display

```js
tagContatore.textContent = counter;

boxButton.appendChild(btnReset);
boxButton.appendChild(btnDecrease);
boxButton.appendChild(btnIncrease);
```

### Funzione di incremento

```js
function incremento () {
    counter++;
    tagContatore.textContent = counter;
}
```

### Funzione di decremento con blocco a zero

```js
function decremento() {
    counter--;
    tagContatore.textContent = counter;

    if (counter <= 0) {
        counter = 0;
        tagContatore.textContent = counter;
    }
}
```

### Funzione reset

```js
function reset() {
    counter = 0;
    tagContatore.textContent = counter;
}
```

### Binding degli eventi

```js
btnIncrease.addEventListener("click", incremento);
btnDecrease.addEventListener("click", decremento);
btnReset.addEventListener("click", reset);
```

---

## Logica funzionale del counter

Il comportamento del contatore e' questo:

- click su `INCR` o `+`: il numero aumenta di `1`
- click su `DECR` o `-`: il numero diminuisce di `1`
- il numero non puo' diventare negativo
- click su `RESET`: il valore torna a `0`

In termini pratici:

```txt
0 -> 1 -> 2 -> 3
3 -> 2 -> 1 -> 0
0 -> non scende sotto 0
RESET -> 0
```

---

## Stile e componenti

La parte visiva e' gestita tramite SCSS suddiviso in moduli:

- `_variables.scss` contiene palette e font
- `_homePage.scss` contiene layout e sezioni principali
- `_button.scss` contiene lo stile dei pulsanti
- `main.scss` importa e organizza tutto

Snippet pulsanti:

```scss
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 30px;
    border: 2px solid variables.$coloreVerde;
    background-color: variables.$coloreNero;
    color: white;
    font-size: 18px;
    box-shadow: 0 0 5px 2px variables.$coloreVerde;
}

.reset {
    border: 2px solid variables.$coloreRosso;
    box-shadow: 0 0 5px 2px variables.$coloreRosso;
}
```

Snippet layout principale:

```scss
#main {
    border: 1px solid variables.$coloreVerde;
    padding: 16px;
    margin-top: 16px;
}

.box-contatore {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 5px solid variables.$coloreVerde;
    height: 300px;
}
```

---

## Responsive design

Il layout e' pensato per funzionare sia su mobile sia su schermi piu' larghi.

- su mobile la struttura e' verticale
- da `768px` in su il layout passa a griglia
- l'interfaccia viene distribuita in `header`, `aside`, `main`, `sidebar`, `footer`

Estratto:

```scss
@media (min-width:768px) {
    #container-grid {
        max-width: 1000px;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas:
            "header header header"
            "aside main sidebar"
            "footer footer footer";
    }
}
```

---

## Requisiti del brief

Il progetto segue i punti richiesti dal brief iniziale:

- applicazione realizzata in JavaScript puro
- logica del counter implementata con funzioni dedicate
- uso della manipolazione del DOM
- struttura ordinata in cartelle `css`, `js`, `img`
- presenza del file `README.md`

Il brief originale e' salvato anche nel file `progetto.txt`.

---

## Nota tecnica

Nello stato attuale del repository c'e' un disallineamento tra alcuni selettori HTML e la logica JavaScript:

- `contatore.js` cerca l'elemento `.contatore`
- nell'`index.html` attuale il display visibile e' `#numero`
- in `index.html` sono referenziati anche `darkLightMode.js` e `score_info.js`, ma questi file non risultano presenti nel workspace attuale

Questo README documenta sia l'idea progettuale sia la logica gia' presente nel file JavaScript principale. Per una versione finale perfettamente coerente conviene riallineare markup e script.

---

## Possibili miglioramenti

Il progetto puo' essere esteso in diversi modi:

- salvataggio del counter in `localStorage`
- aggiunta di un vero cronometro
- sezione record score dinamica
- menu interattivo
- animazioni CRT piu' avanzate
- effetti sonori rétro
- toggle tema light/dark completo

---

## Autore

**Salvatore De Roma**  
Progetto realizzato come esercitazione JavaScript.

<p align="center">
  <strong>SYSTEM READY :: INSERT COIN</strong>
</p>
