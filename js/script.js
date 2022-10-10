/* Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero 
e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
*/

// Loop con "for" incrementale da min 1 a max 100
for (let i = 1; i < 101; i++){
//impostiamo la variante "i" che quando è multiplo di 3 dia Fizz (per il multiplo usiamo simbolo modulo "%") 
if (i % 3 == 0)
    console.log("Fizz");

//e per i multipli di 5 stampi “Buzz” 
if (i % 5 == 0)
    console.log("Buzz");

//per i multipli sia di 3 che di 5 (quindi 3x5 = 15) stampiamo FizzBuzz
if (i % 15 == 0)
    console.log("FizzBuzz");

// tutti gli altri restisce il numero incrementale
else console.log(i);
}