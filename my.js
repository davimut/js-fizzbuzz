// Consegna:
// Per iniziare scrivi un programma che stampi in console i numeri da 1 a 100,
// Successivamente aggiungi un controllo sul numero in modo tale che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// in tutti gli altri casi venga stampato il numero stesso
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
// Attenzione all’ordine con cui fate il controlli negli if / else if, potrebbe essere importante

let n = 100
// stampa numeri da 0 a 99
for ( let i = 0 ; i < n; i++) {
   // console.log(i + 1 ) // (il (+1) aggiunge 1 al ciclo di (i) parte da 1 anziche 0 non si ferma a minore di 100 ma a 100)
    num = i + 1
    // per calcolare i multipli di 3 da 1 a 100 bisogna usare modulo (%) piu il numero  es 100 % 3  (tutti i multipli di 3 daranno come risultato 0 )
 const restoFizz = num % 3
// console.log(restoFizz +' multipli di 3')
 const restoBuzz = num % 5 
 //console.log(restoBuzz + ' multipli di 5')
 
 //SE il resto dei multipli di 5 è 0 E il rsto dei multipli di 3 è 0 stampa fizz buzz 
 if (restoBuzz === 0 && restoFizz === 0) {
console.log( i+1 +' fizz buzz')
 } //ALTRIMENTI SE solo il resto dei multipli di 5 è uguale a 0 stampa buzz 
 else if ( restoBuzz === 0){
    console.log(i+1 +' buzz')
 } //ALTRIMENTI SE solo il resto dei multipli di 3 è uguale a 0 stampa fizz
 else if ( restoFizz === 0 ){
    console.log(i+1 + ' fizz')
 }//ALTRIMENTI stampa tutti gli altri numeri
 else ( console.log(i+1))
}