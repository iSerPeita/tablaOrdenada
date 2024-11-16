"use strict";


class Empleado {

    #nombre;         
    #apellidos;
    #nacimiento;
    #sueldo;

    constructor(nombre, apellidos, nacimiento, sueldo) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;
    }



    getNombre() {
        return this.#nombre;
    }

    getApellidos() {
        return this.#apellidos;
    }

    getNacimiento() {
        return this.#nacimiento;
    }

    getSueldo() {
        return this.#sueldo;
    }




    toString() {                 
        return `<tr>
                    <td>${this.#nombre}</td> 
                    <td>${this.#apellidos}</td> 
                    <td>${this.#nacimiento}</td> 
                    <td>${this.#sueldo}</td></tr>`;
    }
}

let empleados = [
    new Empleado("Paco", "Fiestas", 1997, 27000), 
    new Empleado("Chidas", "Vinto", 1991, 1800), 
    new Empleado("Juan", "Cruz", 1998, 700),    
    new Empleado("Misty", "Perez", 1990, 3000),  
    new Empleado("Joan", "Laporta", 1987, 1200),
    new Empleado("Elsa", "Polindo", 1994, 4500),
    new Empleado("Eulalio", "Fernandez", 1996, 3000),
];

let clickNombre = 0;
let clickapellidos = 0;
let clickNacimiento = 0;
let clickSueldo = 0;



let tabla = document.getElementById("lista-empleados");

empleados.forEach(
    empleado => {
        tabla.innerHTML += empleado;
    }
);


function ordenaNombre() {
    clickNombre ++;

    if (clickNombre % 2 != 0) {
        empleados.sort((a, b) => {
            if (a.getNombre() > b.getNombre() ) return 1; 
            if (a.getNombre()  < b.getNombre() ) return -1;
            return 0; 
        });
    
        tabla.innerHTML = ""; //se vacia el contenido de la casilla pra que no se duplique
    
        empleados.forEach(
            empleado => {
                tabla.innerHTML += empleado.toString();
            }
        );
    }else{
        empleados.reverse();

        tabla.innerHTML = "";

        empleados.forEach(
            empleado => {
                tabla.innerHTML += empleado.toString();
            }
        );
    }
}


function ordenaApellidos() {
    clickapellidos ++;

    if (clickapellidos % 2 != 0) {
        empleados.sort((a, b) =>{
            if (a.getApellidos() > b.getApellidos() ) return 1; 
            if (a.getApellidos()  < b.getApellidos() ) return -1; 
            return 0; 
        });
    
        tabla.innerHTML = "";
    
        empleados.forEach(
            empleado => {
                tabla.innerHTML += empleado.toString();
            }
        );
    }else{
        empleados.reverse();

        tabla.innerHTML = "";

        empleados.forEach(
            empleado => {
                tabla.innerHTML += empleado.toString();
            }
        );
    }
}


function ordenaAnno() {
    clickNacimiento ++;


    if (clickNacimiento % 2 != 0) {
        empleados.sort((a, b) => a.getNacimiento() - b.getNacimiento());

        tabla.innerHTML = "";
    
        empleados.forEach(
            empleado => {
                tabla.innerHTML += empleado.toString();
            }
        );
    }else{
        empleados.reverse();

        tabla.innerHTML = "";

        empleados.forEach(
            empleado => {
                tabla.innerHTML += empleado.toString();
            }
        )
    }

}


function ordenaSueldo() {
    clickSueldo ++;
    tabla = document.getElementById("lista-empleados");


    if (clickSueldo % 2 != 0) {
        empleados.sort((a, b) => a.getSueldo() -b.getSueldo()); //ordenar  numericamente

        tabla.innerHTML = "";

        empleados.forEach(
            empleado => {
                tabla.innerHTML += empleado.toString();
            }
        )
        
    }else{
        empleados.reverse();

        tabla.innerHTML = "";

        empleados.forEach(
            empleado => {
                tabla.innerHTML += empleado.toString();
            }
        );
        
    }
    
}