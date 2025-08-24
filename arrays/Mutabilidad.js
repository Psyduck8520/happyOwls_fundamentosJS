/*
Mutabilidad. e inmutabilida, el objeto puede. tener diferentes metodos. que nos ayudan hacer una cantidad de cosas 
//mutamos el valor original  o por el contrario creamos uno nuevo
*/
//Mutabiliti
/*

// 1. new Array () or Array()
*/

const fruits  = Array('apple','banana', 'orange')
console.log(fruits)
// Si lo hacemos de esta manera no lo podemos declarar con un numero
const  justOneNumbre = Array(12, 12) //  pero si ponemos mas de un elemento si me deja 
console.log(justOneNumbre)

// 2. Array literal syntax 
const oneNumber = [4]
console.log(oneNumber)

const  emtyArray = [] //  se puede crear cuando se tiene. array vacios como una manera de inicializarlo para luego, usarlo en 
//algun programa
console.log(emtyArray)

const sport  = ['soccer', 'tennis', 'RUGBY ']  // TENEMOS un array  solo de string
 console.log(sport)
  
const recipeIgredientes  = [ //  podemos. tener un array mixto incluso con un objeto por dentro
    'flour',
    true,
    2,{
        ingredien: 'milk', quantity : '1cup'
    }
]
console.log(recipeIgredientes)


// accesing  array elements
 const  firstfruit = fruits[0]
 console.log(firstfruit)

 //Tamanio de un array
  const numberOffFruit = fruits.length
  console.log(numberOffFruit)
//Mutabilidad
fruits.push('watermelo')
console.log(fruits)


//inmutabilidad
 
const newfruits = fruits.concat(['grape' ,  'kiwi'] )
console.log(fruits) //tenemos nuestro array. sin modificar 
console.log(newfruits) // tenemos el nuevo array con las nuevas cosas que le agraegamos .

//checkin. arrays with  Array.isArray (
const  isArray = Array.isArray(fruits)
console.log(isArray)

//  Sumar todos los elementos que tenemos en un array 
 
const newNumbes  = Array(1,2,3,4,5)

// Practical execise, la suma de todos los elementos de un array
let sumNumberarray = 0
for  (numbers of newNumbes ) {
      sumNumberarray +=  numbers
}
console.log(sumNumberarray) 
 



