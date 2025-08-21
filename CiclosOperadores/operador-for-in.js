/*

Este nos sirve para realizar operacioones,  sobre objetos inumerablos ques
Es una  estrucutra de datos que tiene propiedades y valor

for ( variable d in objeto). {
     codigo
}

*/
const  listaDeCompras =  {
    manzana : 5, 
    pera: 3, 
    naranja: 2,
    uva: 1
}

for  ( fruta in  listaDeCompras){
    console.log(fruta)

}

for ( fruta in listaDeCompras){
     console.log(`${fruta} :  ${listaDeCompras[fruta]}`)
}
