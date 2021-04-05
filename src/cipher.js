const cipher = {
  encode,
  decode
};

let abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]

  function encode(clave, desplazamiento){
    let arreglarClave = clave.toUpperCase().split ('');
    //  console.log(arreglarClave)
     let desplazarPosicion = parseInt(desplazamiento);
    //  console.log(desplazarPosicion)
     let nuevaPosicionLetra = "";
    //  let claveCifrada = "";
    // console.log(nuevaPosicionLetra,claveCifrada)
    for(let i=0; i<arreglarClave.length; i++) {
      // console.log(i)
      let letraActual= arreglarClave[i]
      let posicionEnAbecedario = abecedario.indexOf(letraActual);
      // console.log(posicionEnAbecedario)
      if (posicionEnAbecedario>=0){
        let nuevaPosicionAbecedario = (posicionEnAbecedario+desplazarPosicion)%abecedario.length;
        console.log(nuevaPosicionAbecedario)
        nuevaPosicionLetra += abecedario[nuevaPosicionAbecedario];
        console.log(nuevaPosicionLetra)  
      }else{
        nuevaPosicionLetra += arreglarClave[i];
      }
    }
    return nuevaPosicionLetra;
  }
  

function decode(clave, desplazamiento){
    let arreglarClave = clave.toUpperCase().split ('');
    //  console.log(arreglarClave)
     let desplazarPosicion = parseInt(desplazamiento);
    //  console.log(desplazarPosicion)
     let nuevaPosicionLetra = "";
    //  let claveCifrada = "";
    // console.log(nuevaPosicionLetra,claveCifrada)
    for(let i=0; i<arreglarClave.length; i++) {
      // console.log(i)
      let letraActual= arreglarClave[i]
      let posicionEnAbecedario = abecedario.indexOf(letraActual);
      // console.log(posicionEnAbecedario)
      if (posicionEnAbecedario>=0){
        let nuevaPosicionAbecedario = (posicionEnAbecedario-(desplazarPosicion %abecedario.length-abecedario.length))%abecedario.length;
        console.log(nuevaPosicionAbecedario)
        nuevaPosicionLetra += abecedario[nuevaPosicionAbecedario];
        console.log(nuevaPosicionLetra)  
      }else{
        nuevaPosicionLetra += arreglarClave[i];
      }
    }
    return nuevaPosicionLetra;
  }




export default cipher;
