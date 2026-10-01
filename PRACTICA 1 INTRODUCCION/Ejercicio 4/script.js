var notaPracticas = prompt("Ingrese la nota de las practicas: ");
var notaExamen = prompt("Ingrese la nota del examen: ");
var notaActitud = prompt("Ingrese la nota de su actitud: ");

var notaMedia = (parseFloat(notaPracticas) + parseFloat(notaExamen) + parseFloat(notaActitud)) / 3;

var aprobado = notaMedia >= 5;

if (aprobado) {
    document.write("<h2> Felicidades, has aprobado con una nota media de: " + notaMedia + "</h2>");
}
else {
    document.write("<h2> Lo siento, has suspendido con una nota media de: " + notaMedia + "</h2>");
}