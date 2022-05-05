/*Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.*/ 

//prima milestone
const quadratini = document.querySelector(".container");

for (let i = 1; i <= 100; i++){
    let element;
     if((i % 3 == 0) && (i % 5 == 0)){
        console.log("FizzBuzz");
        element = `<div class ="fizzbuzz sezione ${i}">${"FizzBuzz"}</div>`;
        
    } else if (i % 3 == 0){
        console.log("Fizz");
        element = `<div class ="fizz sezione ${i}">${"Fizz"}</div>`;

    } else if (i % 5 == 0){
        console.log("Buzz");
        element = `<div class ="buzz sezione ${i}">${"Buzz"}</div>`;

    } else {
        console.log(i)
        element = `<div class ="normal sezione ${i}">${i}</div>`;
    }
    quadratini.innerHTML += element;
}
