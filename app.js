// RETO 01
// Capturar el boton 
// Crear una function que muestre un 
// propmt("Introduce tu estatura")
// propmt("Introduce tu peso")

let btnIMC = document.querySelector("#calcIMC"); // Se captura el boton
let divDOM = document.querySelector("#resultado") // Se captura el div donde se mostrara el resultado

// Se crea una funcion que calcule el IMC   
function calcIMC() {
   let estatura = Number(prompt("Introduce tu estatura"))
   let peso = Number(prompt("Introduce tu peso"))

   let IMCresult = peso / (estatura * estatura)

   if( IMCresult <= 18.5 ){
      divDOM.innerHTML = `
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtlXZcVd22kZaePolIFJy45aGFex0Jdx99S_sJC51dUHjQ1B1vqY4C3c-q-DUZuboqvTUfn1cCWPEC4roX4Lun_zbYQabkLQ7zBDVx78f9iv6X_oDFLM1wiuBBr3zU-M6hbz_flp8S6K8/s1600/Bajo+peso.jpg"></img>
                        <h1>Bajo</h1>
      ` // Se muestra una imagen de una persona delgada
   } else if( IMCresult <= 24.9){
      divDOM.innerHTML = `
                        <img src="https://img.freepik.com/vector-premium/hombre-vectorial-pesando-su-peso-corporal-ideal_1040088-3570.jpg"></img>
                        <h1>Normal</h1>
      ` // Se muestra una imagen de una persona normal
   } else if( IMCresult <= 29.9){
      divDOM.innerHTML = `
                        <img src="https://i.pinimg.com/236x/82/22/f0/8222f0fb69ec097931c0304571d52a15.jpg"></img>
                        <h1>SobrePeso</h1>
      ` // Se muestra una imagen de una persona con sobrepeso
   } else{
      divDOM.innerHTML = `
                        <img src="https://img.freepik.com/vector-gratis/personaje-dibujos-animados-hombre-sobrepeso_1308-134504.jpg"></img>
                        <h1>Obesidad</h1>
      ` // Se muestra una imagen de una persona con obesidad
   }
}

btnIMC.addEventListener("click", calcIMC) // Se agrega el evento click al boton