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
    if(inWord === tempWord) {
        return console.log("La parola è palindroma");
    }
    else {
        return console.log("La parola non è palindroma");
    }
}

//Richiamo la funzione
palindromeWord(word);