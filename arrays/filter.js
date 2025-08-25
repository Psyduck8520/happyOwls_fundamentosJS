// filter ()  , no  modificar el array actual y. tambien nos ayuda. a crear otra array que cumple la condici[]
//fiter
const number  =  [1, 2,3,4,5,6,7,8,9,10]
const eventNumber = number.filter(
    number =>  number  %2 ===0   // aki ponemos  la codicion
)
console.log(eventNumber)


//Reduce  reduce un array  a un solo valor,  
 
const  numberReduce = [1,2,3,4,5]
const sum =numberReduce.reduce((accumulatro, currentValue) =>  accumulatro + currentValue, 0 ) 
// como si tubieramos una valriable  externa, current. value es cada uno. de los valores d
console.log(sum)

// Encontrar. que tanto se repite una palabra 
const  words = ['apple', 'banana', 'hello', 'bye','banana', 'bye']
const  wordsFrecuency  =  words.reduce(
 (accumulator, currentValue) => {
    if(accumulator[currentValue]){
        accumulator[currentValue] ++
    }  else {
        accumulator[currentValue] = 1
    }
    return  accumulator // siempre tiene que tener un return
 }, {} // es necesario. poner un objeto  vacion incial
)
console.log(wordsFrecuency)
