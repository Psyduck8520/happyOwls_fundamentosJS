/*
 Un objeto es una es una estructura de datos que nos pemite guardar informacion
ayuda a guardar informacion de la siguiente form 
 key /value 
Objeto. tiene una propiedad. y un valor 

 objeto {
 propiedad : valor,
 propiedad :  valor, 
 propiedad :  valor
 }
*/
 const persona = {
    nombre: 'edison',
    edad:  25, 
    direccion  :  { // peque;o objeto intenrno
        calle: 'equinoccio',
        ciudad : 'Quito'
    }, 
    saludar (){
        console.log(`hola mi nombre es. ${persona.nombre}`) // la accion que puede  hacer el objeto
    }  
} // esta es la respuesta de como llevamos una persona  a programcion

//Dentro de la estructa de los objetos. tambien tiene metodos y tiene funciones que estan adentro de los objeto
// 






