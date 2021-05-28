






/*se il nmr è maggiore di 5 scrive, altrimenti non lo scrive*/
var random = Math.floor(Math.random() * 10);

 document.getElementById("random").innerHTML = random;

if (random>5){
    document.getElementById("random").innerHTML = random;
}