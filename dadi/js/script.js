// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Creo due variabili una per il player1 e una per il computer
// A entrambe le variabili faccio generare un numero random

// Metto a confronto i due numeri generati e 
// SE il primo è più grande del secondo 
//     stampo un messaggio sovrascritto
// ALTRIMENTI  
//     stampa il messaggio di default

const player1 = Math.floor(Math.random() * 6) + 1;
console.log(`Il numero del Player 1 è: ${player1}`);

const computer = Math.floor(Math.random() * 6) + 1;
console.log(`Il numero del computer è: ${computer}`);

let winner = "Il computer ha vinto =(";

if (player1 > computer) {
    winner = "Complimenti hai vinto tu!";    
}
console.log(winner);