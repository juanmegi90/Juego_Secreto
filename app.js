let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero es menor");
        } else {
        asignarTextoElemento("p","El numero es mayor");            
        }
    }   intentos++;
        limpiarCaja();
    return;
}   

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego de Numero Secreto !");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje intervalo de numero
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
     //Deshabilitar el boton de nuevo juego
     document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = " ";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    // Si ya se sortearon todos los numeros 
    if ( listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {

    // Si el numero generado esta en la lista
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

condicionesIniciales();

