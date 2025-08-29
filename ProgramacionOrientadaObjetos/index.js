const { use } = require("react");

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
function mostrarMensaje(nombre) {
    
    const posts  = usersTimeline  // ["Hoy no quiero trabajar"]
    .filter( p => p.username.toLowerCase() === nombre.toLowerCase())   //sacamos todo un objeto.  Filter ⇒ [ { username:"Andres", timeline:"Hoy no quiero trabajar" } ]
    .map( p => `${p.timeline}`); // del objeto  anterior solo tomo la frase  Map ⇒ ` ${"Hoy no quiero trabajar"}` ⇒ " Hoy no quiero trabajar" //

    if(posts.length === 0){
        alert(`No hay publicaciones  para ${nombre}`)
    }else{
        alert(posts.join("\n"))
    }   
}


function validar(username,password) {
    // Realizamos la validacion se se ingresaron datos
    if(!username || !password ){
        alert('Debes ingresar usuario y contraseña')
        return; // Permite  cortar la funcion  ya no continua  hacia abajo
    }    

    //vamos a recorrer la base de datos , por lo que necesitamos  recupera en una  variable la contraseña y paswoord
    // en el userName si lo  ponemos  todo  en minuscula para pero para la contraseña  si lo  dejamos tal cual, 
    // ahora el usuario que cumpla esa condicion  lo  tenemos en user 
    const user = usersDatabase.find( user => user.username.toLowerCase() ===  username.toLowerCase &&  user.password === password);
    // Si  tenemos un usuario  valido  continuamos  con el mensaje
    if (user){
        
        mostrarMensaje(user.username)
         
    } else{
        alert('Usuario o contraseña incorrectos')
    }
}
validar(username, password)


