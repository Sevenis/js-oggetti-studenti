$(document).ready(function(){

// Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome ed età. Stampare a schermo attraverso il for in tutte le proprietà.

// var studente = {
    // 'nome': 'Pietro',
    // 'cognome': 'Seven',
    // 'eta': 36
// }
//
// for (var k in studente) {
//     console.log(studente[k]);
// }

// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

var listaStudenti = [
    {
        'nome': 'Pietro',
        'cognome': 'Seven',
        'eta': 36
    },
    {
        'nome': 'Luca',
        'cognome': 'Coppola',
        'eta': 26
    },
    {
        'nome': 'Claudia',
        'cognome': 'Cataldi',
        'eta': 33
    }
];

// for (var k in listaStudenti) {
//     console.log(listaStudenti[k].nome);
//     console.log(listaStudenti[k].cognome);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
// studente inserendo nell’ordine: nome, cognome e età.

var nomeStudente = prompt('Inserisci il nome del nuovo studente');
var cognomeStudente = prompt('Inserisci il cognome del nuovo studente');
var etaStudente = parseInt(prompt('Inserisci l\' età del nuovo studente'));

nuovoStudente = {
    'nome': nomeStudente,
    'cognome': cognomeStudente,
    'eta': etaStudente
}

listaStudenti.push(nuovoStudente);

console.log(listaStudenti);







});

//** FUNZIONI
