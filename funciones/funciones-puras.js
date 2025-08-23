/*
Funciones puras:
dando una misma entrada vamos a tener la misma salida, no tiene 
efectos secundarios

*/
//Side effect hacen que nuestras funciones puras dejen de ser pura, no es algo malo 
//son necesarios pero no son pura.
// 1. Modificar variables  globales
// 2. Modificar parametros
// 3. Solicitudes http  
// 4. Imprimir mensajes en pantallas o en consola
// 5. Manipulacion de DOM
// 6. Obtener la hora

//Estructura de una funcion pura
//siempre. vamos a obtener una misma respuesta
 function sum(a , b){
     
     return a + b  
 }
//funcion ya no es impura por que ya tenemos un efecto secundario
 function sum(a , b){
    console.log('A',a )  
     return a + b  
 }

 // Manipulamos una variable global
 let total = 0
 function sumSideEffect(a){
    total += a
 }

  //Funcion pura,  siempre va ser la salida la misma  
 function square(x){
    return x * x  
 }

function addTen (y) {
     return  y + 10
}

// que pasaria si tenemos la combinacion de dos funciones puras
// sigue siendo una funcion puta. pro que las dos. funciones son puras
const number = 5
const finalResult = addTen(square(5))
console.log(finalResult)
 

