// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Prima di tutto creo un array con gli indirizzi mail che devono avere accesso
// Chiedo all'utente di inserire il suo indirizzo mail

// Utilizzo un cliclo per mettere a confronto il dato inserito con quelli in mio possesso (array)
// SE l'indirzzo inserito corrisponde a uno di quelli presenti nell'array 
    // stampo il messaggio "accesso consentito"
// ALTRIMENTI
    // stampo il messaggio "accesso negato"

const registeredMails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];
const userMail = prompt("Inserisci la tua mail:");
console.log(userMail);
let message = "Accesso negato";

for (let i = 0; i < registeredMails.length; i++) {
    if (userMail === registeredMails[i]) {
        message = "Accesso effettuato!";
    }
}
console.log(message);