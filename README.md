# JS COUNTER.exe

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-1FE211?style=for-the-badge&labelColor=000000" alt="JavaScript Vanilla">
  <img src="https://img.shields.io/badge/SCSS-Modular-1FE211?style=for-the-badge&labelColor=000000" alt="SCSS Modular">
  <img src="https://img.shields.io/badge/UI-Retro%20Arcade-FF0004?style=for-the-badge&labelColor=000000" alt="Retro Arcade UI">
</p>

<p align="center">
  Progetto front-end in <strong>JavaScript puro</strong> con interfaccia rétro ispirata ai vecchi monitor CRT:
  nero, verde fosforo, dettagli rossi, font arcade e logica guidata dagli eventi.
</p>

---

## Screenshot

<p align="center">
  <img src="./img/readme-preview.svg" alt="Preview del progetto JS COUNTER.exe" width="100%">
</p>

> Anteprima illustrativa dello stile grafico del progetto.

---

## Panoramica

Il progetto nasce dal brief presente in `progetto.txt`: realizzare un counter in JavaScript vanilla con interfaccia e controlli creati tramite manipolazione del DOM.

Rispetto alla consegna base, il progetto è stato esteso con una piccola dashboard interattiva che include:

- un modulo `Counter`
- un mini gioco `Pari / Dispari`
- un menu a tendina responsive
- uno `score panel` con nome giocatore, punteggio utente e punteggio CPU
- una forte identità visiva rétro / terminale

---

## Obiettivi del progetto

- visualizzare un valore iniziale del counter
- incrementare e decrementare il valore tramite pulsanti creati dinamicamente
- impedire al counter di scendere sotto `0`
- gestire il comportamento dell'interfaccia con eventi JavaScript
- mantenere una struttura separata tra HTML, SCSS/CSS e JavaScript
- arricchire il progetto con funzionalità aggiuntive coerenti con il brief

---

## Funzionalità

### 1. Counter

- visualizza il numero nel display centrale
- genera dinamicamente i pulsanti `INCR`, `DECR` e `RESET`
- incrementa e decrementa il valore del contatore
- blocca il decremento quando il valore è già a `0`

### 2. Pari / Dispari

- permette di scegliere tra `EVEN` e `ODD`
- genera un numero casuale
- mostra `WIN` oppure `LOSE`
- aggiorna lo score del giocatore e della CPU
- consente il reset del pannello di gioco

### 3. Interfaccia

- menu a tendina gestito via JavaScript
- richiesta iniziale del nome giocatore con `prompt()`
- score panel laterale con dati aggiornati in tempo reale
- layout responsive mobile / desktop

---

## Stack

```txt
HTML5
SCSS
CSS3
JavaScript Vanilla
Google Fonts
- Press Start 2P
- Share Tech Mono
```

---

## Identità visiva

L'interfaccia è progettata come un piccolo software arcade anni '80:

- sfondo nero `#000000`
- verde fosforo `#1FE211`
- rosso acceso `#FF0004`
- tipografia arcade per i titoli
- font monospace tecnico per testi e interfaccia
- bordi neon, lampeggiamenti e effetto interferenza

Variabili principali:

```scss
$coloreNero: #000;
$coloreVerde: #1FE211;
$coloreVerdeScuro: #17b70b;
$coloreRosso: #FF0004;
$fontFamilyMain: "Press Start 2P", system-ui;
$fontFamilyText: "Share Tech Mono", monospace;
```

---

## Struttura reale del progetto

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
│   └── main.js
└── img
    ├── hacker_image.png
    └── readme-preview.svg
```

---

## Architettura della pagina

La pagina è organizzata come una dashboard composta da:

- `header` con titolo, versione e menu giochi
- `aside` descrittivo con spiegazione della logica event-driven
- `main` con display centrale e area pulsanti
- `sidebar` con score panel e immagine decorativa
- `footer` con riferimenti autore

Estratto della struttura HTML:

```html
<main id="main" class="grid-item">
  <div id="title-main">
    <h4>COUNTER MODULE_</h4>
    <h6>root/project/destroy</h6>
  </div>

  <div class="box-contatore">
    <div id="numero"></div>
    <span class="extra-text">+++++++++++++++++++++++</span>
    <div class="box-button"></div>
  </div>
</main>
```

---

## Logica JavaScript

Tutta la logica è contenuta in `js/main.js`.

Il file gestisce:

- apertura e chiusura del menu responsive
- selezione del gioco tramite click sugli elementi del menu
- creazione dinamica dei pulsanti
- aggiornamento del display principale
- aggiornamento del punteggio utente e CPU
- acquisizione del nome giocatore

Esempio di creazione dinamica dei controlli:

```js
const btnAumento = document.createElement("button");
const btnDecremento = document.createElement("button");
const btnReset = document.createElement("button");

btnAumento.className = "btn";
btnDecremento.className = "btn";
btnReset.className = "btn reset";
```

Esempio di logica del counter:

```js
function incremento() {
  counter++;
  boxContatore.textContent = counter;
}

btnDecremento.addEventListener("click", function () {
  if (counter == 0) {
    return;
  }
  counter--;
  boxContatore.textContent = counter;
});
```

---

## Requisiti del brief originale

Dal file `progetto.txt` il progetto doveva:

- essere sviluppato esclusivamente in JavaScript puro
- creare dinamicamente l'interfaccia del counter tramite DOM manipulation
- mostrare un valore iniziale pari a `0`
- permettere incremento e decremento tramite pulsanti
- mantenere una buona organizzazione della struttura del progetto

Il progetto rispetta questi requisiti e aggiunge una personalizzazione grafica e funzionale più ampia.

---

## Avvio del progetto

Puoi eseguire il progetto in due modi.

### Apertura diretta

Apri `index.html` nel browser.

### Server locale

Se preferisci usare un server locale:

```bash
npx serve
```

In alternativa puoi usare `Live Server` da VS Code.

---

## Responsive e stile

Lo stile è organizzato in SCSS modularizzato:

- `css/abstract/_variables.scss` per colori, font e variabili
- `css/section/_button.scss` per i bottoni
- `css/section/_homePage.scss` per layout, sezioni e animazioni
- `css/main.scss` come file principale di importazione

Il layout passa da una struttura verticale mobile a una griglia desktop a tre colonne.

---

## Autore

**Salvatore De Roma**

- Sito: `salvatorederoma.it`
- Email: `info@salvatorederoma.it`

---

## Nota

Il progetto è pensato come esercizio didattico front-end e come estensione creativa del brief originale del counter, con particolare attenzione a:

- manipolazione del DOM
- gestione eventi
- organizzazione SCSS
- coerenza grafica dell'interfaccia
