

let a = 5;


if ( a >= 10 ){ //undefined, null, una asignacion
    console.log('A es mayor o igual a 10');
} else{
    console.log( 'A es menor a 10');
}


//console.log('Fin del programa');

const hoy =  new Date(); // {}
let día = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes ......

console.log({ día });

if ( día ===  0 ) {
    console.log('Domingo');
} else if( día === 1 ){
    console.log('Lunes');

    //if ( día ===  1 ) {
        //console.log('Lunes');
   // } else {
        //console.log('No es Lunes ni Domingo');
    //}
} else if ( día === 2 ) {
    console.log('Martes');
} else {
    console.log('Ni es Lunes, Martes O Domingo...');
}

// Sin usar If Else, o switch unicamente objetos 
dia = 6; 

// día de la semana

const diasLetras = {
    0: () => "domingo - 0",
    1: () => "lunes - 1",
    2: () => 'martes - 2',
    3: () => 'miercoles - 3',
    4: () => 'jueves - 4',
    5: () => 'viernes - 5',
    6: () => 'sábado - 6',
};

const diasLetras2 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado'];

console.log( diasLetras2[dia]);