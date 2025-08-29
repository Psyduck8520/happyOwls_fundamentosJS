const usersDatabase = [
  {
    username: "Andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];


const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta más el café que el té",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contraseña?");


function mostrarMensaje(nombre){
    console.log('nombre',nombre)
    for( let  user  in usersTimeline  ){
        if( usersTimeline[user].username === nombre ){
             console.log(usersTimeline[user].timeline)
             alert(`${usersTimeline[user].timeline}`)
             
        }
    }
}

function validacion(username, password){
    for (let user  in usersDatabase){
         if (usersDatabase[user].username ===username  &&
             usersDatabase[user].password === password ){
            mostrarMensaje(username)
         }else{
          alert('usuario o pass incorrecto')
         }
}
}
validacion(username, password) 

