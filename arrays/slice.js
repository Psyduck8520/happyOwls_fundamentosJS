//Segmentado con slice()
 //Crea una copia superficial( shallow copy)  de una porcin del array
 //inicio  y fin  (fin no incluido)

const animals =  ['ant', 'bison','camel','duck', 'elephant']
console.log(animals.slice(2)) 
console.log(animals.slice(2,4)) //cuatr0 -1
console.log(animals.slice(1,6))
console.log(animals.slice(-2))
console.log(animals.slice(2, -1))
console.log(animals.slice()) // aki nos. devuelve todo el array