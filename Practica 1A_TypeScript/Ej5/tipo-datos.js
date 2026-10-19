"use strict";
class Laptop {
    constructor(nombre, encendido, modelo) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.modelo = modelo;
    }
    encender() {
        this.encendido = true;
        console.log(`El portátil ${this.nombre} se ha encendido`);
    }
    apagar() {
        this.encendido = false;
        console.log(`El portátil ${this.nombre} se ha apagado`);
    }
    abrirPrograma(programa) {
        if (this.encendido) {
            console.log(`Abriendo ${programa} en el portátil ${this.modelo}`);
        }
        else {
            console.log("Tienes que encender el portátil primero");
        }
    }
}
class Smartphone {
    constructor(nombre, encendido, marca) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.marca = marca;
    }
    encender() {
        this.encendido = true;
        console.log(`El móvil ${this.nombre} se ha encendido`);
    }
    apagar() {
        this.encendido = false;
        console.log(`El móvil ${this.nombre} se ha apagado`);
    }
    llamar(numero) {
        if (this.encendido) {
            console.log(`Llamando al ${numero} desde el móvil ${this.marca}...`);
        }
        else {
            console.log("Tienes que encender el móvil primero");
        }
    }
}
let laptop1 = new Laptop("Mi portátil", false, "ThinkPad");
laptop1.abrirPrograma("VS Code");
laptop1.encender();
laptop1.abrirPrograma("VS Code");
laptop1.apagar();
let smartphone1 = new Smartphone("Mi móvil", false, "Samsung");
smartphone1.llamar(600123456);
smartphone1.encender();
smartphone1.llamar(600123456);
smartphone1.apagar();
