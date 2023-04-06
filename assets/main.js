let arrayNumeriPc = []
for (let i = 0; i <= 4; i++) {
    let numeroRandom = Math.floor(Math.random() * 10) + 1;
    arrayNumeriPc.push(numeroRandom)
    
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
        let numeroPrompt = parseInt(prompt("inserisci il numero"))
        if (numeroPrompt <= 10) {
            let numeroUtente = numeroPrompt
            arrayNumeriUtente.push(numeroUtente)
            document.querySelector("#numeroUtente").innerHTML += `<div class="contenitore${[k]} square d-flex justify-content-center align-items-center"><span>${numeroUtente}</span></div>`
    
            const list = document.querySelectorAll(".numeroPC");
            for (let z = 0; z < list.length; z++) {
                list[z].classList.remove("d-none")
            }

            
        }else{
            alert("il numero è magiore di 10")
            k--            
        }
            
    }

    let arrayNumeriEsatti = []
    let punteggio;
    for (let i = 0; i < arrayNumeriUtente.length; i++) {
        
        let contenitore = document.querySelector(`.contenitore${[i]}`)
        if (arrayNumeriPc.includes(arrayNumeriUtente[i]) && arrayNumeriPc[i]== arrayNumeriUtente[i]) {
            arrayNumeriEsatti.push(arrayNumeriUtente[i])
            contenitore.classList.add("bg-success")
            
        }else if(arrayNumeriPc.includes(arrayNumeriUtente[i])){
            arrayNumeriEsatti.push(arrayNumeriUtente[i])
            contenitore.classList.add("bg-warning")
        
        }else{
            contenitore.classList.add("bg-danger")
           
        }
        punteggio = arrayNumeriEsatti.lenght
    }
    
    console.log(arrayNumeriEsatti.length)
    setTimeout(avviaAlert, 1000)
    
    function avviaAlert(){
        alert("Hai totalizzato" + " " + arrayNumeriEsatti.length)}
    
}
