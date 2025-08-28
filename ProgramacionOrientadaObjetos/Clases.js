//una clase es un molde para crear nuevos objetos
//para poder comenzar con las clases usamos 
class Persona{
    //metodo constructor  definir como se debe configurar  la inicializacion de la clase
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad 
    }
    saludar(){
        console.log(`hola mi nombre es ${this.nombre} y tengo  ${this.edad} `) 
    }
}
const persona1 = new Persona("Mariana", 25);
 

