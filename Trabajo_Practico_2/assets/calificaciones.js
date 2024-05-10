let nota1 = parseInt(prompt("Ingrese la nota del alumn en el primer trimestre"));
let nota2 = parseInt(prompt("Ingrese la nota del alumn en el segundo trimestre"));
let nota3 = parseInt(prompt("Ingrese la nota del alumn en el tercer trimestre"));
let promedio = (nota1+nota2+nota3)/3;
if(nota1 != Number || nota2 !=Number || nota3!=Number){
    console.log("Una de las notas cargadas es un valor invalido")
}if(nota1 > 10 || nota2 > 10 || nota3>10){
    console.log("Una de las notas cargadas es un valor invalido")
}else if(nota1 < 0 || nota2 <0 || nota3<0){
    console.log("Una de las notas cargadas es un valor invalido")
}else if(promedio <= 3 && promedio >= 1){
    console.log("______Nota insuficiente______")
}else if(promedio >= 4 && promedio<=5){
    console.log("______Nota regular______")
}else if(promedio<=7 && promedio >5){
    console.log("_____Nota buena______")
}else if(promedio >=8 && promedio<=9){
    console.log("_____Nota muy buena_____")
}else if(promedio == 10){
    console.log("_____Nota sobresaliente_____")
}
