/*
En la siguiente  funcion tenemos varios contxtos locales y globales, de esta manera
podemos ver
*/
const userPoints =150

function checkAccess() {
    if (userPoints<100){
         const message  = "Acces denied: Insufficient points"
        return message
    } else {
         const  mensajes  = 'Access granted: Enjoy. the premiun features!'
         return  message 
    }
}


