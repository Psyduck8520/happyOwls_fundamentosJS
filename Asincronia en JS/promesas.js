//promesas nos yaudan nos ayudan  a decir que vamos a trabajar de forma Asyncrona 
//Pdemos genera una promesa  la promesa va venir al ultimo
//es la formavamos a genera que nuestro codigo funciona de forma asyncrona
// pending  estado de pendiente, es cuando la promesa se va a crear, esta en pendiente por que se genera la promesa
//Fullfilled , cuando la promesa se resuelve 
//Rejected cuando la promesa no se resolvio
// manejamos dos tipos de callback 
// Resolve cuando es exitosa
// Reject  no se resolviero 

///Metodos
// them()  cuando la promesa se resuelve va entrar a ejecutar el then
// catch()  cuando la promesa no se resuelve obtener el error para poder imprimir
const promise   =  new Promise((resolve, reject)=> {
    setTimeout(        
        //como si estubieramos haciendo una llamada a un api    
        () => {
            let  operationSuccesfull  = true; // lo que paso en el codigo llego con exito
                if(operationSuccesfull){
          resolve ("La operacion fue exitosa!")
    } else {
        reject("Fallo la operacion") // en caso de que no sea exitosa 
    }
        }, 2000
    ) // nos va da u tiempo  y una vez que este resulto nos devuelva el resultado

})

promise.then((succesMessaged) => { // codigo que esperamos  si se ejecuta de manera exitosa
    console.log(succesMessaged)
})
.catch((errorMessage)=> {  //  aqui ejecutamos cual fue el error y po que no se ejecuta correctamento el error
    console.log(errorMessage)
})
// lo que  hace  se ejecuta cuando la promesa se resuelve 
