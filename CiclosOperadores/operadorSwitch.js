 /*
switch(expresion){
    case valor1 :
        //codigo ha ejecutar
        break ;
    case valor2: 
        //Codigo a ejecutar
        break;
    case valor1:
        //Codigo a ejecutar 
        break;
    case valor2: 
        // codigo a ejecutar
    break;
    default: 
        //codigo 
}*/

let  expr  = "Papayas" 
switch(expr){
    case "Naranjas" :
         console.log("Las naranjas cuestan  $20 el kilo")
         break;
    case "Manzanas" :
        console.log("las manzanas cuestan. $43 el kilo")
         break;
    case "Platanos" :
        console.log("El platano esta en $30  el kilo")
        break;
    case "Mangos":
    case "Papayas":
         console.log("Los mangos y las papayas cuestan $20pesos el kilo")
        break;
    default:
        console.log(`Lo siento, no contamos con  ${expr}`) 
}

console.log("hay algo mas que podemosqu desees")

