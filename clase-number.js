 // 1. Tipo enter decimal
const  entero =  42 
const decimal = 3.14

console.log(  typeof entero, typeof decimal) // EN js  n tenemos un tipo de distincion entre enteros y decimales, 
//por eso los dos nos reconoce como numeros

// 2.  Notacion cientifica
 const  cientifico  =  5e3 

// 3. Infinitos  Y NaN 
 
const infinito = Infinity
const noEsUnNumero  = NaN
 
//Operacioes aritmeticas

//1 . Suma, Resta, Multiplicion, Division
const suma =   3 + 4 
const resta =  4 - 4
const Multiplicion =  4 * 4
const Division  = 4/4
console.log(suma)
console.log(resta)
console.log(Division)
console.log(Multiplicion)

// 2. Modulo  y exponenciacio, nos sirve para saber si un numero es multiplo de otro numero
const modulo = 15%8
const exponenciacion =  2**3 
console.log(modulo) 
console.log(exponenciacion)

//Precision
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1)) // Podemos que tantos valores podemos poner despues de la com
//aqui tenemos que tener cuidado, por js. no es tan preciso al hacer comparaciones como lo podemos ver a cotinuacion
console.log(resultado==0.3)
 
// OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const  aleatorio = Math.random()
console.log(valorAbsoluto)
console.log(raizCuadrada)
console.log(aleatorio)
