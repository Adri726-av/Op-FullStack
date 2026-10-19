"use strict";
class Employee {
    nombre;
    apellido;
    edad;
    fechaInicio;
    fechaFin;
    profesion;
    constructor(nombre, apellido, edad, fechaInicio, fechaFin, profesion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.profesion = profesion;
    }
    // Getters
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getEdad() {
        return this.edad;
    }
    getFechaInicio() {
        return this.fechaInicio;
    }
    getFechaFin() {
        return this.fechaFin;
    }
    getProfesion() {
        return this.profesion;
    }
    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    setFechaInicio(fechaInicio) {
        this.fechaInicio = fechaInicio;
    }
    setFechaFin(fechaFin) {
        this.fechaFin = fechaFin;
    }
    setProfesion(profesion) {
        this.profesion = profesion;
    }
}
// Empleado que ya ha terminado (tiene fecha de finalización)
let empleado1 = new Employee("Juan", "Pérez", 45, new Date(2015, 2, 1), new Date(2022, 5, 30), "Programador");
// Empleado que sigue trabajando (fecha de fin null)
let empleado2 = new Employee("Laura", "García", 29, new Date(2021, 8, 15), null, "Diseñadora");
console.log(`Nombre: ${empleado1.getNombre()} - Edad: ${empleado1.getEdad()}`);
console.log(`Nombre: ${empleado2.getNombre()} - Edad: ${empleado2.getEdad()}`);
