/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  let titolo = document.querySelector("h1");
  titolo.innerText = "Qualcos'altro";
};
changeTitle();
console.log(document.querySelector("h1"));

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  let titolo = document.querySelector("h1");
  titolo.classList.add("myHeading");
};
addClassToTitle();
console.log(document.querySelector("h1"));

/* ESERCIZIO 3
       Scrivi una funzione per che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  let nuovoTestoP = document.querySelectorAll("div p"); //richiamiamoli tutti, diventa un array
  nuovoTestoP.forEach((paragrafo) => {
    //cicliamoli e per ogni paragrafo(parametro nome inventato)
    paragrafo.innerText = "Se mi leggi significa che l'esercizio è riuscito"; //facciamo scattare ciò
  });
};
changePcontent();
console.log(document.querySelectorAll("div p"));

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  let ancora = document.querySelector("div a");
  ancora.setAttribute("href", "https://www.google.com");
};
changeUrls();
console.log(document.querySelector("div a"));

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  let newLi = document.createElement("li");
  newLi.innerText = "4rth";
  let posizionePerLi = document.getElementById("secondList");
  posizionePerLi.appendChild(newLi);
};
addToTheSecond();
console.log(document.getElementById("secondList"));
/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un secondo paragrafo al primo div
    */

const addParagraph = function () {
  let newParagraph = document.createElement("p");
  newParagraph.innerText = "Nuovo paragrafo da aggiungere al primo div";
  let primoDiv = document.querySelector("div");
  primoDiv.appendChild(newParagraph);
};
addParagraph();
console.log(document.querySelector("div"));

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  let primaUl = document.getElementById("firstList");
  primaUl.classList.add("remove");
};
// hideFirstUl();
/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  let everyUl = document.querySelectorAll("ul");
  everyUl.forEach((listaNonOrdinata) => {
    listaNonOrdinata.style.backgroundColor = "green";
  });
};
paintItGreen();
/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

// const makeItClickable = function () {
//   let titolo = document.getElementsByTagName("h1");
//   console.log(titolo);
//   titoloAsArr = Array.from(titolo);
//   console.log(titoloAsArr);
//   titoloAsArr.onclick.splice(titoloAsArr.lenght - 1, 1);
// };
// makeItClickable();     // cannot read properties splice

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  alert(
    "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"
  );
};
document.querySelector("footer").onclick = revealFooterLink;

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
  let areaTabella = document.getElementById("tableArea");
  let newTable = document.createElement("table");
  let riga = document.createElement("tr");
  let cella1 = document.createElement("td");
  cella1.innerHTML = '<img src="www.placekitten.com/200/200"/>';
  let cella2 = document.createElement("td");
  cella2.innerText = "nome prodotto";
  let cella3 = document.createElement("td");
  cella3.innerText = "quantità";
  let cella4 = document.createElement("td");
  cella4.innerText = "prezzo";
  areaTabella.appendChild(newTable);

  newTable.appendChild(riga);

  newTable.appendChild(cella1);
  newTable.appendChild(cella2);
  newTable.appendChild(cella3);
  newTable.appendChild(cella4);

  areaTabella.appendChild(newTable);
  return areaTabella;
};

generateTable();

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {
  let newRow = document.createElement("tr");
  newRow.innerText = "Qui i dati necessari?";
  areaTabella.appendChild(newRow); //operché non torna areaTabella se prima l'avevo fatta tornare con return?
};
addRow();

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
      Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */

const deleteVowels = function () {};
