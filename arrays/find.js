//Descubriendo tesoros 
// Fin()Devuelve el valor del primer elemento  del array que cumple la funcon de prueba proporcionada.
// esto no muta el arreglo 
const multipleOf5 = [5,10,15,20]
const primerNumberGreaterthan10 =multipleOf5.find(number => number  >  10) // el primer elemento que es mayor que 10
console.log(primerNumberGreaterthan10) 

//findIndex()

const randomNumber = [6,14,27,56,40]
const indexNumber =  randomNumber.findIndex(number => number >50)
 
console.log(randomNumber)
console.log(indexNumber)



