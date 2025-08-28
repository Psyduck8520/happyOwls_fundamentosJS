/*
const persona = {
    nombre : 'diego',
    apellido : 'De Grande'
}
*/
 //funcion constructura
 function  Persona(nombre, apellido, edad) { // tenemos que agregar las propiedades para construir nuestro obejto
     this.nombre = nombre, 
      this.apellido = apellido, 
      this.edad = edad 
 }
 
 const persona1 = new Persona('Juand', 'Perez', 30 )
 console.log(persona1)

 // El beneficio decrearlo asi es que la siguiente  vez que quiero una persona nueva vamosa copiar la misma estructura 
  
 const persona2 = new Persona('Diego', 'De granda',  35)
console.log(persona2)
//si queremoe  agregar una consulta, podemos generar o agregar una propiedad

Persona.prototype.telefono = '555-555-55' // no se agrega directamente a la funcion contructora si no al prototipo  que es la copia
// de la funcion constructura  para asegurarme que el prototipo ,   aki se agrega  a todos los objetos que se han creado  a traves  
// del constructor

persona1.nacionalidad = "ecuatoriana" // aki en cambio solo estamos agregando la propiedad al objeto creado como tal
 
/// si queremos agregar un metodo

Persona.prototype.salidar   = function () {
    console.log(`Hola mi nombre es  ${this.nombre} ${this.apellido}`)
}
persona1.salidar()
persona2.salidar()






