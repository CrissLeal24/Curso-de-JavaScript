
function saludar( nombre ) {
    console.log( arguments );
    console.log('Hola ' + nombre );
    return [1,2];
}

const saludar2 = function( nombre ) {
     console.log('Hola ' + nombre);  
}

const saludarFlecha = () => {
    console.log( 'Hola Flecha' );
}

const saludarFlecha2 = (nombre) => {
    console.log( 'Hola ' + nombre  );
}



const retornoDeSaludar = saludar( 'Crisbell', 23, true, 'Venezuela' );
console.log( retornoDeSaludar[0], retornoDeSaludar[1] );

//saludar2( 'Crisbell' );

//saludarFlecha();
//saludarFlecha2( 'Carolina');



function sumar ( a, b) {
    return a + b;    
}

//const sumar2 = (a,b) => {
    //return a + b:
//}
const sumar2 = (a,b) => a + b;

function getAleatorio() {
   return Math.random(); 
}

// Transformarla en una funcion de flecha que no tenga {}
// Se llamara getAleatorio2()

const getAleatorio2 = () => Math.random();


console.log(  getAleatorio2()  );