"use strict";
function contarPalabras(cadena) {
    cadena = cadena.trim();
    let palabras = cadena.split(" ");
    let contador = 0;
    for (let palabra of palabras) {
        if (palabra !== "") {
            contador++;
        }
    }
    return contador;
}
var numero = contarPalabras("Clase de segundo de DAM");
console.log("Esta cadena tiene " + numero + " palabras");
function getAvenger(nombre, poder, arma = "arco") {
    let mensaje = "";
    if (poder != null) {
        mensaje = `Nombre: ${nombre} - Poder: ${poder} - Arma: ${arma}`;
    }
    else {
        mensaje = `Nombre: ${nombre}`;
    }
    return mensaje;
}
var mensaje = getAvenger("Leontorre", "Fuego", "Espada");
console.log(mensaje);
//# sourceMappingURL=tipoDatos.js.map