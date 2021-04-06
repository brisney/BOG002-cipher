import cipher from './cipher.js';

console.log(cipher);

let inputcifrar = document.getElementById("cifrar");
let inputclavecifrar = document.getElementById("espacioclavecifrar");
let inputespacioposiciones = document.getElementById("espacioposicionescifrar");
let clavenueva = document.getElementById("espacioclavecifrada");
// let nuevocuadro = document.querySelector(".cuadroclavecifrada");

// inputcifrar.onclick = function mostrarvalores () {
//     let clavecifrar = inputespacioclave.value;  
//     // cambiarHTML(clavecifrar);
//     console.log (clavecifrar)
// }
inputcifrar.addEventListener("click",mostrarvalores); 
function mostrarvalores () {
    let clavecifrar = inputclavecifrar.value;
    let posiciones = inputespacioposiciones.value; 
    // console.log (clavecifrar,posiciones);
    let claveCifrada = cipher.encode(clavecifrar,posiciones);
     clavenueva.value = claveCifrada;
    // console.log (clavenueva)
    ocultar()
    mostrarCuadroCifrado()
}
// inputcifrar.addEventListener("click",ocultar); 
function ocultar(){
    document.getElementById('contiene').style.display = 'none';
    }
// inputcifrar.addEventListener("click",mostrarcuadro); 
function mostrarCuadroCifrado(){
    document.querySelector(".cuadroclavecifrada").style.display = 'block';
    }
    
        
let inputDescifrar = document.getElementById("descifrar");
let inputClaveDescifrar = document.getElementById("espacioclavedescifrar");
let inputPosiciones = document.getElementById("espacioparaposiciones");
let claveNuevaDescifrada = document.getElementById("clavedescifrada");       

inputDescifrar.addEventListener("click",mostrarValorDescifrado); 
function mostrarValorDescifrado () {
    let claveDescifrar = inputClaveDescifrar.value;
    let posicionesDescifrar = inputPosiciones.value; 
    // console.log (claveDescifrar,posicionesDescifrar);
    let nuevaClaveDescifrada = cipher.decode(claveDescifrar,posicionesDescifrar);
     claveNuevaDescifrada.value = nuevaClaveDescifrada;
    // console.log (clavenueva)
    ocultar()
    mostrarClaveDescifrada()
}
function mostrarClaveDescifrada(){
   document.querySelector(".cuadroclavedescifrada").style.display = 'block';
   }
    
   