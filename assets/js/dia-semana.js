let dia = prompt("Ingrese in dia de la semana: Lunes=1 ; Martes=2 ; miercoles=3 ; jueves=4 ; viernes=5 ; sabado=6 ; Domingo=7 : ")
If (dia<0 || dia>7){
    console.log("valor no valido")
}   else if(dia==1){
    console.log("|Lunes|")
}   else if(dia=2){
    console.log("|Martes|")
}   else if(dia=3){
    console.log("|Miercoles|")
}   else if(dia=4){
    console.log("|Jueves|")
}   else if(dia=5){
    console.log("|Viernes|")
}   else if(dia=6){
    console.log("|Sabado|")
}   else{
    console.log("|Domingo|")
}