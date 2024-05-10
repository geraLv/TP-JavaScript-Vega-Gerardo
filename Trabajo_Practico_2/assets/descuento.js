let articulos = parseInt(prompt("Ingrese la cantidad de articulos que lleva"))
let Precio = parseInt(prompt("Ingrese el precio"))
let total = articulos*Precio
let descuento = total *0.15
switch (true){
    case total>20000 && articulos>=10:
        console.log(`Se le aplicara un descuento de el 15%, se le descontara: $${total}`)
    break;
    default:
        console.log(`Usted no alica para el descuento, su total es: $${total}`)

    }