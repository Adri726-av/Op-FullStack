var practicas = parseFloat(prompt("Escribe la media de tus notas de prácticas:"));
var examen = parseFloat(prompt("Escribe la nota de tu examen:"));
var actitud = parseFloat(prompt("Escribe la nota de tu actitud:"));

var media = (practicas + examen + actitud) / 3;

document.write("<p>Tu nota media es: " + media + "</p>");

if (media >= 5) {
    document.write("<p>Estás aprobado</p>");
} else {
    document.write("<p>Estás suspenso</p>");
}
