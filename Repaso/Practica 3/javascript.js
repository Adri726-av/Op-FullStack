var numero = prompt("Introduce un numero:");

var contador = 0;

while (contador <= 10) {
    document.write(numero + " x " + contador + " = " + (numero * contador) + "<br>");
    contador++;
}