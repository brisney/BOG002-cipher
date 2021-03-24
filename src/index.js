import cipher from './cipher.js';

console.log(cipher);

let inputcifrar = document.getElementById("cifrar");
let inputespacioclave = document.getElementById("espacioclave");
let inputespacioposiciones = document.getElementById("espacioposiciones");

// inputcifrar.onclick = function mostrarvalores () {
//     let clavecifrar = inputespacioclave.value;  
//     // cambiarHTML(clavecifrar);
//     console.log (clavecifrar)
// }

inputcifrar.addEventListener("click",mostrarvalores); 
function mostrarvalores () {
    let clavecifrar = inputespacioclave.value; 
    let posiciones = inputespacioposiciones.value
    console.log (clavecifrar,posiciones);
} 
