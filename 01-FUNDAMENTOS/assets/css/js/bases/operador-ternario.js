/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */
//Entra a un sitio web, para consultar si esta abierto hoy...
const dia = 1; // 0: Domingo, 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes, 6: Sabado

const horaActual = 10;


let horaApertura;
let mensaje; // esta abierto, esta cerrado, hoy abrimos a las 9

/**if ( [0,6].includes(dia) ) {
    console.log( 'Fin de Semana');
    horaApertura = 9; 
} else {
    console.log('Dia de Semana');
    horaApertura = 11;
}*/
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;



/**if ( horaActual >= horaApertura ) {
    mensaje = 'Esta Abierto'
} else { 
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura } `;
}*/

mensaje = ( horaActual >= horaApertura ) ? 'Esta Abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje});

