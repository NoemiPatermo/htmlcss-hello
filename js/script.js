




//il software deve chiedere per 10 volte all’utente di inserire un numero.
//var xNum = prompt("inserisci un numero");
//Il programma stampa la somma di tutti i numeri inseriti.


//js-snack-4
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 /*var listaInvitati = [ 'tizio', 'caio', 'filano', 'martino'];
 var invitato = ['prego, inserisca il suo nome'];
 var flag = false; 

 for (var i = 0; i < listaInvitati.length; i++){
    if(invitato === listaInvitati[i]){
        flag = true;
    }
} 
//siamo fuori dal for
if (flag){
    document.getElementById("login").innerHTML = "Benvenuto! Gatsby la attende!";
} else {
    document.getElementById("login").innerHTML = "Mi dispiace, lei non può entrare";
} */

/*js-snack-5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */
var myList = ['', '',];
for(var i = 1; i <= 6; i++){
    var num = parseInt(prompt('inserisci numero'));
    if(num % 2 !==0){
        myList.push(num);
    }
    
console.log