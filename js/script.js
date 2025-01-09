//PRIMO ESERCIZIO
/*
PALINDROMA
CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA.
CREARE UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA E' PALINDROMA.
*/

//VARs
let word = prompt("Digita una parola!");

//FUNCTIONs
//Funzione per capire se la parola è palindroma
function palindromeWord(inWord) {
  //Stringa che conterrà la parola scritta al contrario
  let reverseString = "";
  //Concatenazione dei tre metodi per rovesciare la stringa
  const tempWord = inWord.split("").reverse().join("");
  console.log(tempWord);

  //Controllo se la parola è palindroma
  if (inWord === tempWord) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
}

//Richiamo la funzione
palindromeWord(word);

//SECONDO ESERCIZIO
/*
PARI E DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//VARs
let userChoice = prompt("Scegli pari o dispari").toLowerCase();
let number = parseInt(prompt("Inserisci un numero da 1 a 5"));
let cpuNum = 0;
let result;

//FUNCTIONs
//Funzione che genera un numero random da 1 a 5
function numberGenerator() {
  let randNum = Math.floor(Math.random() * 5) + 1;
  return randNum;
}

//Funzione che controlla se il numero è pari o dispari
function checkNum(choice, num) {
  if (num % 2 === 0) {
    console.log("Il numero è pari");
    return true;
  }

  console.log("Il numero è dispari");
  return false;
}

console.log("Il numero che hai scelto è: " + number);

//Creo un numero random da 1 a 5
cpuNum = numberGenerator();
console.log("Il numero della CPU è: " + cpuNum);

//Sommo il numero random con il numero inserito dall'utente
sum = number + cpuNum;
console.log("La somma è uguale a : " + sum);

//Richiamo la funzione per controllare se il numero è pari o dispari e dichiaro il vincitore
result = checkNum(userChoice, sum);

if (
  (result && userChoice === "pari") ||
  (!result && userChoice === "dispari")
) {
  console.log("Il giocatore ha vinto");
} else if (userChoice != "pari" && userChoice != "dispari") {
  console.log("Errore nella scelta tra pari o dispari");
} else if (number > 5 || number < 1) {
  console.log("Errore nell'inserimento del numero");
} else {
  console.log("La CPU ha vinto");
}
