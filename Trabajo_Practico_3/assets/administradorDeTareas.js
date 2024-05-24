let tarea = [];
let seleccion;


while (seleccion !== 0) {
    seleccion = parseInt(prompt('Elija una opción a realizar\n1- Ver lista\n2- Agregar Tarea\n3- Editar tarea\n4- Eliminar tarea\n0- Salir'));


    switch (seleccion) {
        case 1:
            verLista();
            break;
        case 2:
            agregarTarea();
            break;
        case 3:
            editarTarea();
            break;
        case 4:
            eliminarTarea();
            break;
        case 0:
            alert('Cerrando el programa.');
            break;
        default:
            alert('Seleccione una opción válida.');
            break;
    }
}


function verLista() {
    if (tarea.length === 0) {
        alert('No hay tareas disponibles.');
    } else {
        alert('Las tareas disponibles son:\n' + tarea.join('\n'));
    }
}


function agregarTarea() {
    let nombre = prompt("Ingresar una nueva tarea");


    if (nombre.charAt(0) === " " || nombre.charAt(nombre.length - 1) === " ") {
        alert("ERROR: El nombre de la tarea no puede tener espacios al principio ni al final.");
        return;
    }


    if (!nombre) {
        alert("ERROR: No ha ingresado una tarea.");
        return;
    }


    nombre = nombre.trim();
   


    if (nombre === "") {
        alert("ERROR: El nombre de la tarea no puede estar vacío.");
        return;
    }


    tarea.push(nombre);
    alert("Tarea añadida.");
}


function editarTarea() {
    if (tarea.length === 0) {
        alert("No hay tareas disponibles para editar.");
        return;
    }


    let indice = parseInt(prompt("Ingrese el número de la tarea que desea editar")) - 1;


    if (isNaN(indice) || indice < 0 || indice >= tarea.length) {
        alert("ERROR: No ha ingresado un número válido.");
        return;
    }


    let nuevaTarea = prompt("Ingrese la nueva descripción para la tarea:");


    if (nuevaTarea.charAt(0) === " " || nuevaTarea.charAt(nuevaTarea.length - 1) === " ") {
        alert("ERROR: La nueva descripción no puede tener espacios al principio ni al final.");
        return;
    }


    if (!nuevaTarea) {
        alert("ERROR: No ha ingresado una nueva descripción.");
        return;
    }


    nuevaTarea = nuevaTarea.trim();


    if (nuevaTarea === "") {
        alert("ERROR: La nueva descripción no puede estar vacía.");
        return;
    }


    if (!/^[a-zA-Z\s]+$/.test(nuevaTarea)) {
        alert("ERROR: La nueva descripción solo puede contener letras y espacios.");
        return;
    }


    tarea[indice] = nuevaTarea;
    alert("Tarea editada correctamente.");
}


function eliminarTarea() {
    if (tarea.length === 0) {
        alert("No hay tareas disponibles para eliminar.");
        return;
    }


    let tareaAEliminar = prompt("Ingrese el nombre de la tarea que desea eliminar:");


    if (!tareaAEliminar) {
        alert("ERROR: No ha ingresado el nombre de la tarea.");
        return;
    }


    tareaAEliminar = tareaAEliminar.trim();


    if (tareaAEliminar === "") {
        alert("ERROR: El nombre de la tarea no puede estar vacío.");
        return;
    }


    let indice = tarea.indexOf(tareaAEliminar);


    if (indice === -1) {
        alert("ERROR: La tarea especificada no se encuentra en la lista.");
        return;
    }


    tarea.splice(indice, 1);
    alert("Tarea borrada correctamente.");
}
