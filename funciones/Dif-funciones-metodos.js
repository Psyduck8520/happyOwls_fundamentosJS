
/*
Capacidad que tienen las funciones. al igual que otras funciones 
1. Pasar funciones como argumentos -- >  callaback
*/

   function a () {}
   function b (a) {}
   b(a)

// retornar funciones, podemo tener una funcion dentro de otra funcion y tambien retornar,declaracion de funciones
function a () {
    function  b (){}
    return b 
}

// Asignar funciones a variables  - > expresion de funciones
//const a =  function(){}

///Tener propiedades y metodos, esta  funcione puede tener tambien un contexto
function  a () {}
const  obj  = {}
a.call(obj)
 
// Anidar funciones  -> Nested functions
 
function a () {
    function  b (){
        function  c (){
            
        }
        c()

    }
    b()
}
a() /// se pueden invocar dentro de ellas mismas o afuera de las funciones, desde las hijas. accedo a las padres propiedades
 

// Es podisble almacenar funciones en objetos 

 const rocket =  {
    name:   'Falcon 9',
    launchMessage:  function launchMessage(){
        console.log('🔥')
    }

}
rocket.launchMessage(); 

 
