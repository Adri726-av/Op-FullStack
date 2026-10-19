"use strict";
class Almacen {
    constructor() {
        this.elementos = [];
    }
    agregarElemento(elemento) {
        this.elementos.push(elemento);
    }
    obtenerElemento(posicion) {
        return this.elementos[posicion];
    }
    listarElementos() {
        for (let i = 0; i < this.elementos.length; i++) {
            console.log(`Posición ${i}:`, this.elementos[i]);
        }
    }
}
let almacenNumeros = new Almacen();
almacenNumeros.agregarElemento(10);
almacenNumeros.agregarElemento(20);
almacenNumeros.agregarElemento(30);
console.log(almacenNumeros.obtenerElemento(1));
almacenNumeros.listarElementos();
let almacenCadenas = new Almacen();
almacenCadenas.agregarElemento("juan");
almacenCadenas.agregarElemento("ana");
console.log(almacenCadenas.obtenerElemento(0));
almacenCadenas.listarElementos();
let almacenAlumnos = new Almacen();
almacenAlumnos.agregarElemento({ nombre: "Pedro", nota: 7 });
almacenAlumnos.agregarElemento({ nombre: "Lucía", nota: 9 });
console.log(almacenAlumnos.obtenerElemento(1));
almacenAlumnos.listarElementos();
console.log(almacenNumeros.obtenerElemento(10));
