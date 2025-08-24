//Metodos que no modifican el array original , nos. permite aplicar una funcion para cada uno de los elementos. del array 
//map 

const numbers = [1,2,3,4,5]

const squareNumbers = numbers.map(num => num * num) // map nos permite aplicar una funcion uy operacion
// a cada elmento del array  para construir un nuev sin afectar al original
console.log(numbers)
console.log(squareNumbers)

// FOR EACH()
// Itera sobre cada elemento de un array y ejecuta una funcion  proporcionada para cada elmento, sin crear un nuevo  array.
 
const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color)) 

console.log(colors)
console.log(iteratedColors)

/// Exercise :  Fahrenheit  to celsius cnversion
 const temperaturasInfarenheit =  [23,68, 95, 104, 212]
 const temperaturasCelsius = temperaturasInfarenheit.map(
    fahren => (5/9)* (fahren -32)
 )
console.log(temperaturasCelsius)
// suma de toos los elementos de un array 
 let sum = 0
temperaturasInfarenheit.forEach(number => { sum+= number}) //  de esta. manera. realizamos la suma
console.log(temperaturasInfarenheit)
console.log(sum)