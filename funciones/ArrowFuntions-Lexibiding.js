/*
Se crearon para hacer mas cortas y para quitar y el contexto,
funtion    -- quitamos y queda como una variable y estab los parametro  el return 
y luego lo hacemos el llamado
*/
 
const  greenting  = function(name){
     return `Hola,  ${name}`
    }
// cmo podemos ver a continuacion son iguales solo que reemplazamos algunos valoresrn
//  Arrow function. -  explicit return
const  newgreenting  = (name) => {
     return `Hola,  ${name}`
}

// Arrow function -  implicit retunr
const  newGreetingImplicit  = name => `Hi, ${name}`
const  newGreetingImplicitTwoParameters   = (name,lastname)=> `hi ,${name} ${lastname}`
 
//Lexical Biding

 const   finctionalCharacterd = {
    name: 'Uncle BEN ',
    messageWithTraditionalfunction:  function(message){
         console.log(`${this.name}. says:  ${ message}`)
    },
    messageWithArrowfuntion: message  => {
         console.log(`${this.name} says: ${message} `)
    }
 }

finctionalCharacterd.messageWithTraditionalfunction('UN GRAN PODER CONLLEVA UNA GRANA REPONSABILIDA')
finctionalCharacterd.messageWithArrowfuntion('Esta es una frase rando') // Cuanto usamos una funcion flecha se rompe el lazo
// que se tiene con los atributos del objeto, se rompe el enlace  lexico.
