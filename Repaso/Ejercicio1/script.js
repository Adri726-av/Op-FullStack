var texto = prompt("Introduce un texto: ");

var tamaño = texto.length;

document.write("<h3>El tamaño del texto es: " + tamaño + "</h3>");

var caracter = texto.charAt(8);

document.write("<h3>El caracter en la posición 8 es: " + caracter + "</h3>");

var letra = prompt("Introduce una letra para ver si esta en el texto: ");

if (texto.includes(letra)) {
    document.write("<h3>La posicion de la letra " + letra + " es: " + texto.indexOf(letra) + "</h3>");
} else {
    document.write("<h3>La letra " + letra + " no se encuentra en el texto</h3>");
}

document.write("<h3> " + texto.toUpperCase() + "</h3>");
document.write("<h3> " + texto.toLowerCase() + "</h3>");