//Js funciona con objetos y prototipos 
// Programacion orienta a objetos funciona con herencia
// armamos un clase constructura de una persona, siempre que estamos  trabajando con clases
// automaticamente  generan un prototipo y tiene  todas las propiedades o metodos.
// Nosotros  no tenemos  que genra el metodo y la isntancia de jose , en ese momento  gracias al prototipo podemos heredadar tambien los metodos
//Protitipo tiene lso mismo metodos y propiedades  de las clases y las funciones contructoras.
// La propiedad de prototipo que se genera  sola solo  funciona con funciones y claseslas instancias no tienen este prototipo

class Animal  {
    constructor(nombre,tipo){
        this.nombre =nombre,
        this.tipo = tipo
    }
    emitirSonido(){
        console.log("El animal emite un sonido")
    }
}

// si quiero generar perros  si empiezo a genera instancias  de mas perros   entonces se queda corto 
class Perro extends Animal { // una vez que extiende de la clase animal podemos usar las cosas de la clase padre y el tipo 
    constructor(nombre, tipo, raza){
        super(nombre, tipo); // sino ponemos este  el super  y tendriamos que replicar el codigo , podemos utilizar los metodos  tambien
        this.raza = raza;
    }

    emitirSonido(){
        console.log("El perro ladra")
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`)
    }
}

/// Primero creamos una nueva instancia
const perro1 = new Perro("Bobby","Perro",  "Put")
console.log(perro1);

perro1.correr(); 
perro1.emitirSonido() // las herencias  se ven el prototipo,  ahi puedo ver las herencias en el navegador.

/// que pasa si quiero generar de la instancia  1  un nuevo metodo 
perro1.NuevoMetodo  = function () {
    console.log("Este es un metodo") //podemos ver que el metodo ya esta ahi aki solo le mando  a la isntancia 
}

/// para que se  vayan a todos lso objetos  y el metodo , general  prototipo que tenemos  
perro1.prototype.segundoMetodo =  function() { /// esto no va funcionar nunca  por que la isntancia  no tiene un prototipo 
     console.log("Es otro nuevo metodo")
}

Perro.prototype.segundoMetodo =  function() { /// lo correcto es agregar ala clase de la funcion constructora, entonces ahora si 
     console.log("Es otro nuevo metodo")
} //una  cadena de protipos  es como los objetos esta  conectado y vemos los metodos de los cules podemos extender  y podemso hacer uso 
//de isntancias que no estamos creando.







