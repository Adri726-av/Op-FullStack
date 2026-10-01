var entrada = prompt("Escribe una lista de nombres separados por coma:");
var lista = entrada.split(",");

for (var l in lista) {
    document.write("<p>Hola " + lista[l] + "</p>");
}

document.write("<p>Número de personas: " + lista.length + "</p>");
document.write("<p>Primera persona: " + lista[0] + "</p>");
document.write("<p>Última persona: " + lista[lista.length - 1] + "</p>");

lista.sort();
console.log(lista);

lista.reverse();
console.log(lista);
