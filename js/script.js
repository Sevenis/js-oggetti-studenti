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
        'eta': 36,
        'sesso': 'm'
    },
    {
        'nome': 'Luca',
        'cognome': 'Coppola',
        'eta': 26,
        'sesso': 'm'
    },
    {
        'nome': 'Claudia',
        'cognome': 'Cataldi',
        'eta': 33,
        'sesso': 'f'
    }
];

// for (var k in listaStudenti) {
//     console.log(listaStudenti[k].nome);
//     console.log(listaStudenti[k].cognome);
// }

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
// studente inserendo nell’ordine: nome, cognome e età.

var nomeStudente = prompt('Inserisci il nome del nuovo studente');
var cognomeStudente = prompt('Inserisci il cognome del nuovo studente');
var etaStudente = parseInt(prompt('Inserisci l\' età del nuovo studente'));
var sessoStudente = prompt('Inserisci il sesso dello studente');

nuovoStudente = {
    'nome': nomeStudente,
    'cognome': cognomeStudente,
    'eta': etaStudente,
    'sesso': sessoStudente
}

listaStudenti.push(nuovoStudente);
console.log(listaStudenti);

// var nuovoStudente = $('.template .student').clone();
//
// nuovoStudente.find('student-name').append(nomeStudente);
// nuovoStudente.find('student-surname').append(cognomeStudente);
// nuovoStudente.find('student-age').append(etaStudente);
//
// listaStudenti.push(nuovoStudente);
//
// $('.student-list').append(listaStudenti);

for (var i = 0; i < listaStudenti.length; i++){
    var student = listaStudenti[i]; //questo rappresenta il context
    console.log(student);

    //
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var html = template(student);
    // aggiungerlo all'area desiderata, cioe' dove lo vogliamo vedere
    $('#stud').append(html);
}








});

//** FUNZIONI
