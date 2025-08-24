/*
CLOSURE: Funcion que tiene acceso a variables de un ambito externo 
incluso despues de que esta funcon haya terminado de ejecutarse.
Ambito lexico> cada vez que se declara una funcion, crea su propio  ambito lexico,
y puede accde a las variables en ambitos superiores
*/

 function outerfuntion(){
    let outerVarible = 'i am from outer function'
    function innterfunction( ) {
        console.log(outerVarible)
    }
    return innterfunction 
 }

const closureExample  = outerfuntion()
closureExample()

function createCounter () {
    let count =0 
    return function(){
         count++
         console.log(count)
    }
}

const  counterA = createCounter()
counterA() // se queda guardado el valor del contador que tien  1
counterA() //2
counterA() //3
 
const  counterB = createCounter()
counterB()
function outer() {
     let message  = "hello,"
     function innter(name){
        console.log(message +  name)
     }     
}

