// 1. Podemo tener un copia  de un array 
 const originalArray = [1,2,3,4,5]
 const copyOanArray = [...originalArray] // usamos las copias para no mutar los valores sin modificar valores. originales
console.log(originalArray)
console.log(copyOanArray)
// 2.  Combining Arrays 
 const   array1 = [1,2,3]
const  array2 = [4,5,6]

const combinedArray = [...array1, ...array2]
console.log(combinedArray) 

//3. Podemos crear arrays. con elementos adicionalesCreating  arrays. with additional element 
const  baseArray = [1,2,3]
const  arrayWhitAdditionalElements = [...baseArray, 4,5,6,5]

console.log( arrayWhitAdditionalElements)
///4  pasar paramentros a una funciona de Pass elements to funtions

function sum (a,b,c){
     return a+b+c
} 

 const numbers1 = [1,2,3]
const result =  sum(...numbers1) // podemos pasar como parametros de una funcion utilizando de esta manera.
console.log(result)
 


