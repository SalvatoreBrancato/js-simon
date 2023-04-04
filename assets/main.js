let arrayNumeriPc = []
for (let i = 0; i <= 4; i++) {
    let numeroRandom = Math.floor(Math.random() * 10) + 1;
    
    arrayNumeriPc.push([numeroRandom])
    
    
    document.querySelector("#numeroPC").innerHTML += `<div class="square d-flex justify-content-center align-items-center"><span class="numeroPC">${numeroRandom}</span></div>`
   
      
}
    console.log(arrayNumeriPc)

//Funzione timeout che dopo 5 secondi aggiunge la classe d-none agli elementi inseriti e fa sparire i numeri random
    setTimeout(blackout, 3000)
    function blackout(){
    
    const list = document.querySelectorAll(".numeroPC");
    for (let i = 0; i < list.length; i++) {
        list[i].classList.add("d-none")
    }
    
}

let arrayNumeriUtente = []

setTimeout(avviaPrompt, 3500)
function avviaPrompt(){

    for (let k = 0; k <= 4; k++) {
        let numeroUtente = parseInt(prompt("inserisci il numero"))
        arrayNumeriUtente.push([numeroUtente])
        document.querySelector("#numeroUtente").innerHTML += `<div class="square d-flex justify-content-center align-items-center"><span>${numeroUtente}</span></div>`

        const list = document.querySelectorAll(".numeroPC");
        for (let z = 0; z < list.length; z++) {
            list[z].classList.remove("d-none")
        }

    }
    if (arrayNumeriPc.includes(arrayNumeroPc)) {
        console.log("hai vinto")
    }else{
        console.log("hai perso")
    }

}



console.log(arrayNumeriUtente)



// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.