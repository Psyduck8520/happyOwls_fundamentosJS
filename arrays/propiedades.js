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