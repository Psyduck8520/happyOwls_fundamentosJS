/* 
Metodos para modificar el array original, mutabilidad
*/
//push()
 
const countries = [ 'USA' ,  'CANADA' , 'uk']
const  newCountries  = countries.push('Germany', 'Australia')
console.log( countries) //  nos. modifico un valor. original
console.log(newCountries) // aparte. que nos modifica nos devuelve el valor de la logitud 

//POp() Elimmina  el ultimo valor del array y nos devuelve el tamano. de ese array 

const removeContry  = countries.pop()
console.log(countries)
console.log(removeContry) // Lo que hace este metodo es eliminar el ultimo. elemento y a su vez nos indica. cual fue
// el elemento que se quito.




