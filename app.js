// Creamos el contenedor
let main = document.getElementsByTagName('main')[0];
let body = document.getElementsByTagName('body')[0];
let body1 = document.getElementsByTagName('body')[0];
// Agrego el numero de filas y de columnas que voy a utilizar
let nFilas = 5;
let nColumnas = 5;

let div, divContainer, objetivo, j1, j2, p, button, i;

divContainer = document.createElement('div');
divContainer.classList.add('container');
main.appendChild(divContainer);

let nFilasObjetivo, nColumnasObjetivo, nFilasJ1, nColumnasJ1, nFilasJ2, nColumnasJ2;

let contJ1 = 0;
let contJ2 = 0;

let jugador1 = 'j1';
let jugador2 = 'j2';

let recuento1 = document.getElementById('puntos-j1');
let recuento2 = document.getElementById('puntos-j2');

// Agregamos el evento load al documento
document.addEventListener('load', inicio());


/**
 * @description Inicia el juego
 * @param NO
 * @returns NO
 */
function inicio() {
    // Creamos las filas y las columnas
    for (let i = 0; i < nFilas; i++) {
        for (let j = 0; j < nColumnas; j++) {
            div = document.createElement('div');
            div.classList.add('card');
            div.setAttribute('id', `f${i}c${j}`);
            divContainer.appendChild(div);
        }
    }

    pintarCasillas();
}

/**
 * @description Mover jugador 1
 * @param NO
 * @returns NO
 */
function moverJ1(event) {
    // Busco el elemento j1
    j1 = document.getElementById(`f${nFilasJ1}c${nColumnasJ1}`);
    // Le quito las clases
    j1.classList.remove('j1');
    // Le añado la clase card
    j1.classList.add('card');

    switch (event.code) {
        case 'ArrowDown':
            // Le subo una fila
            if (nFilasJ1 != nFilas - 1) {
                nFilasJ1 = nFilasJ1 + 1;
            } else {
                nFilasJ1 = 0
            }
            break;
        case 'ArrowRight':
            if (nColumnasJ1 != nColumnas - 1) {
                // Le subo una columna
                nColumnasJ1 = nColumnasJ1 + 1;
            } else {
                nColumnasJ1 = 0;
            }

            break;
        case 'ArrowUp':
            if (nFilasJ1 != 0) {
                // Le resto una fila
                nFilasJ1 = nFilasJ1 - 1
            } else {
                nFilasJ1 = nFilas - 1;
            }
            break;
        case 'ArrowLeft':
            if (nColumnasJ1 != 0) {
                // Le resto una columna
                nColumnasJ1 = nColumnasJ1 - 1
            } else {
                nColumnasJ1 = nColumnas - 1;
            }
            break;

        default:
            break;
    }
    if (nFilasJ1 == nFilasJ2 && nColumnasJ1 == nColumnasJ2) {
        // Borro clase j1
        div.classList.remove('j1');
        // al div le pongo la nueva fila
        div = document.getElementById(`f${nFilasJ1}c${nColumnasJ1}`)
        // Le añado la clase j1
        div.classList.add('j1');
    }
    // al div le pongo la nueva fila
    div = document.getElementById(`f${nFilasJ1}c${nColumnasJ1}`)
    // Le añado la clase j1
    div.classList.add('j1');
    
    if (ganadorJX(nFilasJ1, nColumnasJ1)){
        contJ1++;
        recuento1.textContent = `${contJ1}`;
        if(contJ1 == 10){
            document.addEventListener('load',mostrarGanadorJ1())

        }
    }
}

/**
 * @description Mover jugador 2
 * @param NO
 * @returns NO
 */

function moverJ2(event) {
    // Busco el elemento j2
    j2 = document.getElementById(`f${nFilasJ2}c${nColumnasJ2}`);
    // Le quito las clases
    j2.classList.remove('j2');
    // Le añado la clase card
    j2.classList.add('card');

    switch (event.code) {
        case 'KeyS':

            if (nFilasJ2 != nFilas - 1) {
                // Le subo una fila
                nFilasJ2 = nFilasJ2 + 1;
            } else {
                nFilasJ2 = 0;
            }
            break;
        case 'KeyD':
            if (nColumnasJ2 != nColumnas - 1) {
                // Le subo una columna
                nColumnasJ2 = nColumnasJ2 + 1;
            } else {
                nColumnasJ2 = 0;
            }
            break;
        case 'KeyW':
            if (nFilasJ2 != 0) {
                nFilasJ2 = nFilasJ2 - 1
            } else {
                nFilasJ2 = nFilas - 1;
            }
            break;
        case 'KeyA':
            if (nColumnasJ2 != 0) {
                nColumnasJ2 = nColumnasJ2 - 1
            } else {
                nColumnasJ2 = nColumnas - 1;
            }
            break;

        default:
            break;
    }
    if (nFilasJ1 == nFilasJ2 && nColumnasJ1 == nColumnasJ2) {
        // Borro clase j2
        div.classList.remove('j2');
        // al div le pongo la nueva fila
        div = document.getElementById(`f${nFilasJ2}c${nColumnasJ2}`)
        // Le añado la clase j2
        div.classList.add('j2');
    }
    // al div le pongo la nueva fila
    div = document.getElementById(`f${nFilasJ2}c${nColumnasJ2}`)
    // Le añado la clase j2
    div.classList.add('j2');
    if (ganadorJX(nFilasJ2, nColumnasJ2)){
        contJ2++;
        recuento2.textContent = `${contJ2}`;
        if(contJ2 == 10){
            mostrarGanadorJ2();
        }
    }
}


/**
 * @description Funcion que pinta las casillas objetivo, j1, j2
 * @param NO
 * @returns NO
 */
function pintarCasillas() {

    nFilasObjetivo = Math.floor(Math.random() * 5);
    nColumnasObjetivo = Math.floor(Math.random() * 5);

    /* USAR MATH.RANDOM con las nFilas y nColumnas para colocarlo en el sitio correcto */
    objetivo = document.getElementById(`f${nFilasObjetivo}c${nColumnasObjetivo}`);
    objetivo.classList.add('objetivo');

    do {
        nFilasJ1 = Math.floor(Math.random() * 5);
        nColumnasJ1 = Math.floor(Math.random() * 5);

    } while (nFilasObjetivo == nFilasJ1 || nColumnasObjetivo == nColumnasJ1)

    j1 = document.getElementById(`f${nFilasJ1}c${nColumnasJ1}`);
    j1.classList.add('j1');

    do {
        nFilasJ2 = Math.floor(Math.random() * 5);
        nColumnasJ2 = Math.floor(Math.random() * 5);

    } while (nFilasObjetivo == nFilasJ2 || nColumnasObjetivo == nColumnasJ2 || nFilasJ1 == nFilasJ2 || nColumnasJ1 == nColumnasJ2);

    j2 = document.getElementById(`f${nFilasJ2}c${nColumnasJ2}`);
    j2.classList.add('j2');
}


/**
 * @description Mira el ganador en función de las columnas del Jugador 1 o Jugador 2
 * @param nFilasJX , nColumnasX
 * @returns boolean (True)
 */
function ganadorJX(nFilasJX, nColumnasJX) {
    if (nFilasJX == nFilasObjetivo && nColumnasJX == nColumnasObjetivo) {
        div = document.getElementById(`f${nFilasJ1}c${nColumnasJ1}`)
        div.classList.remove('j1');

        div = document.getElementById(`f${nFilasJ2}c${nColumnasJ2}`)
        div.classList.remove('j2');

        div = document.getElementById(`f${nFilasObjetivo}c${nColumnasObjetivo}`)
        div.classList.remove('objetivo');

        pintarCasillas();

        return true;
    }
}


/**
 * @description Reinicia el tablero, o sea la posición del Jugador 1, Jugador 2 y el objetivo
 * @param NO
 * @returns NO
 */
function reiniciarTablero(){

    div = document.getElementById(`f${nFilasJ1}c${nColumnasJ1}`)
    div.classList.remove('j1');

    div = document.getElementById(`f${nFilasJ2}c${nColumnasJ2}`)
    div.classList.remove('j2');

    div = document.getElementById(`f${nFilasObjetivo}c${nColumnasObjetivo}`)
    div.classList.remove('objetivo');

    pintarCasillas();

    button = document.getElementsByTagName('button')
}

/**
 * @description Muestra el ganador (Jugador 1) si el contador es >=10
 * @param NO
 * @returns NO
 */
function mostrarGanadorJ1(){
    body.innerHTML = '';
    p = document.createElement('p');
    p.textContent = 'Ganador Jugador 1'
    body.appendChild(p)
    div = document.createElement('div');
    div.classList.add('ganador-j1');
    body.appendChild(div)
    
}

/**
 * @description Muestra el ganador (Jugador 2) si el contador es >=10
 * @param NO
 * @returns NO
 */
function mostrarGanadorJ2(){
    body.innerHTML = '';
    p = document.createElement('p');
    p.textContent = 'Ganador Jugador 2'
    body.appendChild(p)
    div = document.createElement('div');
    div.classList.add('ganador-j2');
    body.appendChild(div)
    
}



/**
 * COSAS PENDIENTES
 * 
 * 1. Crear funcion para poner formato correcto a las filas y columnas.
 * f_c_ siendo la f la fila, la c la columna y el guion bajo el numero.
 * 
 * 2. Asignar posicion objetivo, j1, y j2 a las casillas del tablero.
 * 
 * 3. Colocar evento de teclado al 'document' para evaluar si pulso una tecla, mover o no una ficha.
 * 
 * 4. Necesario validar que al mover la ficha, no me salgo de los limites.
 */