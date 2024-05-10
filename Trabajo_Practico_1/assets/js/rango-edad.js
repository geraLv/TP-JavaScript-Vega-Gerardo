let edad = promp("Ingrese su edad: ");
if (edad<0 || edad >120){
    console.log ("Edad invalida")
    }else if( edad<=12){
        console.log("Usted esta en el rango de edad de un ñiño")
    }else if(edad>=13 && edad <= 19){
        console.log("Usted esta en rango de edad de un adolecente")
    }else if(edad > 19 && edad < 60){
        console.log("Usted se encuentra en el rango de edad de un adúlto")
    }else if(edad>60){
        console.log("Usted se encuentra en el rango de edad de un adúlto mayor")
    };