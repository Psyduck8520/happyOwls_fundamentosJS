/*    
tienen entradas y tienen salidas, 
nombre. de la funcion 

function suma ( a  + b ) {
return  a + b 

}
LLamado
suma ( 3, 5 ). --- >  esta tiena argumento
*/

function calculateDiscountePrice(price, descountPercetage){ 
    const  discount =  ( price * descountPercetage)/ 100
    const  priceWithDiscount =   price - discount 
    return priceWithDiscount 
}
const originalPrice = 100
const discountPercetage =20
const finalPrice = calculateDiscountePrice(originalPrice,discountPercetage)
console.log( 'Price with  discount '  + finalPrice)