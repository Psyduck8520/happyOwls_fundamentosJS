/*
Las promesas existieron despues de los callback 
funcionan igual que las promesas, pero es una forma un poco mas legible
 Consumir una api publica, una vez que esta el resultado nos devuelve, 
 vamos ahcer  el mismo ejercicio 

*/

function fectchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) //  Trae  le repuesta y lo trae jsonloque se va ejecutar una vez que nuestra promesa se ej satisfactoriamente
  .then((data) => console.log(data)) //  esa respuesta  se convierta  en nuestra  dato
    .catch((err => console.log(err))); // aki nos devuelve el error que esta retornando si no funciona
}
fectchData() //aqui ya podemos  ver la API que esta retornando

/// aki vamos a cosntruir  un async, siempre estan conformado por try  y cath y despues  ocupamos el cathc para
// poder manejar el error

async function fectchDataAwait() {
    try {

        let response  = await   fetch("https://jsonplaceholder.typicode.com/posts")  //  este codigo  tiene await por que espera a la promesa a
        let data  = response.json();
        console.log(data)

    }catch(error){
        console.log(error)
    }
}

fectchDataAwait()  // vamos a tener el mismo resultado peronos funciona super bien de la misma manera.



