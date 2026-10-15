function contarPalabras(cadena: string): number {
    cadena = cadena.trim();
    let palabras: string[] = cadena.split(" ");
    let contador: number = 0;
    for (let palabra of palabras) {
        if (palabra !== "") {
            contador++;
        }
    }
    return contador
}

var numero: number = contarPalabras("Clase de segundo de DAM")
console.log("Esta cadena tiene " + numero + " palabras")

function getAvenger(nombre: string, poder?: string, arma: string = "arco"): string {
    let mensaje: string = ""
    if (poder != null) {
        mensaje = `Nombre: ${nombre} - Poder: ${poder} - Arma: ${arma}`;
    } else {
        mensaje = `Nombre: ${nombre}`;
    }
    return mensaje
}

var mensaje: string = getAvenger("Leontorre", "Fuego", "Espada")
console.log(mensaje)