async function fectchDataAwait() {
    try {

        let response  = await   fetch("https://jsonplaceholder.typicode.com/posts")  //  este codigo  tiene await por que espera a la promesa a
        let data  = response.json();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
//for awaint  , una vez que las peticiones  se finalice  se puedan mostrar

const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];
 // generamos otra funcion

async function fetchNewData() {
    try {
        for  (let url of urls) {
             let  response = await fetch(url);  // obtenemos en tipo json 
             let data = await response.json()  // aki lo mandamos en datos 
                console.log(data)
            }


    } catch (error) {
        console.log(error)
    }
}
 
fetchNewData() // esta es forma en lacual podemos hacer de forma asincrona no vamosa tener que  bloquea al usuario 
// lo dejamos de manera asincrona  una vez que la promesa se aya cumplido podemos cargas  cosas en el doom 
