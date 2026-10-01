var entrada = prompt("Escribe una lista de nombres separados por coma:");
var lista = entrada.split(",");

for (var l in lista) {
    document.write("<p>Hola " + lista[l] + "</p>");
}
