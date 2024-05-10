let num1 = prompt("Ingrese el primer número: ")
let num2 = prompt("Ingrese el segundo número: ")
let num3 = prompt("Ingrese el tercer número: ")
if ( num1>num2 && num2>num3){
    console.log("El orden es: "+num3+"<"+num2+"<"+num1)
}   else if(num2>num1 && num1>num3){
    console.log("El orden es: "+num3+"<"+num1+"<"+num2)
}   else if(num3>num2 && num2>num1){
    console.log("El orden es: "+num1+"<"+num2+"<"+num3)
}   else if(num2>num3 && num3>num1){
    console.log("El orden es: "+num1+"<"+num3+"<"+num2)
}   else if(num2>num1 && num1>num3){
    console.log("El orden es: "+num3+"<"+num1+"<"+num2)
}   else if(num3>num1 && num1>num2){
    console.log("El orden es: "+num2+"<"+num1+"<"+num3)  
}   else if(num1>num3 && num3>num2){
    console.log("El orden es: "+num2+"<"+num3+"<"+num1)
}   else if(num2==num1 && num1==num3){
    console.log("El orden es: "+num3+"="+num1+"="+num2)
}   else if(num1==num2 && num1>num3){
    console.log("El orden es: "+num3+"<"+num1+"="+num2)
}   else if(num1==num2 && num1<num3){
    console.log("El orden es: "+num2+"="+num1+"<"+num3)
}   else if(num1==num3 && num1>num2){
    console.log("El orden es: "+num2+"<"+num1+"="+num3)
}   else if(num1==num3 && num1<num2){
    console.log("El orden es: "+num3+"="+num1+"<"+num2)
}   else if(num3==num2 && num3<num1){
    console.log("El orden es: "+num3+"="+num2+"<"+num1)
}   else if(num3==num2 && num3>num1){
    console.log("El orden es: "+num1+"<"+num3+"="+num2)
};