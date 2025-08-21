//Existen  varios lenguajes de programacion funciona de una manera similar 
//sin embargo  existen dos grupos los compilados y los interpretados
//Compilados: c, c++ , Rust, Go, Swift ,todo este. codig es traducido antes de la ejecucion del programa , necesitamos la receta antes de cocinar,  chequeo estatico de tipos
//Iterpretados: JavaScript, python, ruby, php, esta se va tranduciendo en la ejecucion , van guiando mientras vamos cocinado ,  chequeo dinamico de tipos, no es tipado 
//Conversion  implicita   significa que el mismo js lo hace ejemplo.   2+ true
//Explicita string(), Number() , Boolean(), lo hacemo nosotros de manera controlada

//Explicit  Type Casting 
const string = '42'
const integer = parseInt(string)
console.log(integer) 
console.log(typeof integer)

const stringDecimal =  '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof(float))

const binary  ='1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof(decimal))

//Implicit Type Cating
const sum = '5' + 3 
console.log(sum)

const  sum1 = 3 + '5'
console.log(typeof sum)
 
const sumWithBoolean  = '3'  + true 
console.log(sumWithBoolean)

const sumwithNumber  = 2 + true 
console.log(sumwithNumber) 


const stringvalue = '10'
const numberValue =  10
const booleanValue = true

console.log( stringvalue + numberValue + booleanValue ) // nos da una cadena
/// si hay un string. concatena ,  si es sin string. lo que hace. es sumar en general.
 