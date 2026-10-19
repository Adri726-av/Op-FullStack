"use strict";
class Animal {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getTipo() {
        return this.tipo;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    hacerRuido() {
        console.log(`${this.nombre} está haciendo un ruido`);
    }
}
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad, "Perro");
        this.raza = raza;
    }
    getRaza() {
        return this.raza;
    }
    setRaza(raza) {
        this.raza = raza;
    }
    hacerRuido() {
        console.log(`${this.getNombre()} dice: ¡Guau guau!`);
    }
    traerPelota() {
        console.log(`${this.getNombre()} (${this.raza}) trae la pelota`);
    }
}
class Pajaro extends Animal {
    constructor(nombre, edad, puedeVolar) {
        super(nombre, edad, "Pájaro");
        this.puedeVolar = puedeVolar;
    }
    getPuedeVolar() {
        return this.puedeVolar;
    }
    setPuedeVolar(puedeVolar) {
        this.puedeVolar = puedeVolar;
    }
    hacerRuido() {
        console.log(`${this.getNombre()} dice: ¡Pío pío!`);
    }
    volar() {
        if (this.puedeVolar) {
            console.log(`${this.getNombre()} está volando`);
        }
        else {
            console.log(`${this.getNombre()} no puede volar`);
        }
    }
}
let animal1 = new Animal("Bicho", 3, "Desconocido");
let perro1 = new Perro("Toby", 5, "Labrador");
let pajaro1 = new Pajaro("Piolín", 2, true);
let pajaro2 = new Pajaro("Pingu", 4, false);
animal1.hacerRuido();
perro1.hacerRuido();
perro1.traerPelota();
pajaro1.hacerRuido();
pajaro1.volar();
pajaro2.volar();
console.log(`${perro1.getNombre()} tiene ${perro1.getEdad()} años y es de tipo ${perro1.getTipo()}`);
